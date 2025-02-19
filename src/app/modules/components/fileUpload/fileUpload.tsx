'use client'

import { useDropzone } from 'react-dropzone';
import { useFileStore } from "../../common/store/useFileStore";
import styles from "./fileUpload.module.scss";
import { useCallback } from 'react';
import Button from '../../common/button/button';


export default function FileUpload() {

    const {pdfUrl,file,setFile, setPdfUrl} = useFileStore();

    const onDrop = useCallback((acceptedFiles: File[])=>{
        if (acceptedFiles.length > 0) {
            const selectedFile = acceptedFiles[0];
            setFile(selectedFile);
        }
    },[setFile])

    const { getRootProps, getInputProps} = useDropzone({onDrop});

    const handleClick = async ()=>{
        if(!file) return;
        setPdfUrl("1");
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

