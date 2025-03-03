'use client'

import { useDropzone } from 'react-dropzone';
import { useFileStore } from "../../common/store/useFileStore";
import styles from "./fileUpload.module.scss";
import { useCallback } from 'react';
import Button from '../../common/button/button';
import JSZip from "jszip";
import { PDFDocument } from "pdf-lib";


export default function FileUpload() {

    const {pdfUrl,file,setFile, setPdfUrl} = useFileStore();

    const onDrop = useCallback((acceptedFiles: File[])=>{
        if (acceptedFiles.length > 0) {
            const selectedFile = acceptedFiles[0];
            setFile(selectedFile);
        }
    },[setFile, setPdfUrl])

    const { getRootProps, getInputProps} = useDropzone({onDrop});

    const handleClick = async ()=>{
        if(!file) return;
        setPdfUrl("1");

        const zip = new JSZip();

        try {
            const zipData = await zip.loadAsync(file);

            const xhtmlFiles = Object.keys(zipData.files).filter((filename) =>
                filename.endsWith(".xhtml") || filename.endsWith(".html")
            );
        
            if (xhtmlFiles.length === 0) throw new Error("Nincsenek XHTML fejezetek az EPUB-ban.");

            const newBook = await PDFDocument.create();
            let pages = newBook.addPage();
            const { width, height } = pages.getSize();

            let yPosition = height - 20;
    
            // Első fejezet kiválasztása
            for (let i = 0; i < xhtmlFiles.length; i++) {
                // Az első találatot vesszük
                const element = xhtmlFiles[i]; 
                const chapterText = await zipData.file(element)?.async("text");

                if(chapterText){
                    const plainText = chapterText.replace(/<[^>]*>/g, "");
                    const lines = plainText.match(/.{1,90}/g) || [];
                    for (const line of lines) {
                        if (yPosition < 50) {
                            // Új oldal hozzáadása és változó frissítése
                            pages = newBook.addPage();
                            yPosition = height - 50;
                        }
            
                        // Szöveg kiírása az aktuális oldalra
                        pages.drawText(line, {
                            x: 50,
                            y: yPosition,
                            size: 12,
                            maxWidth: width - 50,
                        });
            
                        yPosition -= 30; // Sorok közti távolság
                    }
                }
            }

            const pdfBytes = await newBook.save();
            const blob = new Blob([pdfBytes], { type: "application/pdf" });
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = "converted.pdf";
            link.click();
            
        } catch (error) {
          console.error("Hiba az EPUB beolvasásakor:", error);
    }
    }


    return(
        <>
        <div className={styles.container} {...getRootProps()}>
            <input {...getInputProps()} />
            {(file === null) ? <p>drop file here or click to select</p> : <p>{file.name}<br/> {file.type}</p> }
        </div>
        <div className={styles.btn_container}>
            { (pdfUrl === null) ? <Button text={'Convert Now!'} onClick={handleClick}/> : null}
        </div>
        </>
        
    )
  
};

