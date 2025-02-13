'use client'

import { useDropzone } from 'react-dropzone';
import { useFileStore } from "../../common/store/useFileStore";
import styles from "./fileUpload.module.scss";
import { useCallback } from 'react';


export default function FileUpload() {

    const {file,setFile} = useFileStore();

    const onDrop = useCallback((acceptedFiles: File[])=>{
        if (acceptedFiles.length > 0) {
            const selectedFile = acceptedFiles[0];
            setFile(selectedFile);
        }
    },[setFile])

    const { getRootProps, acceptedFiles, getInputProps, isDragActive} = useDropzone({onDrop});

    const selectedFile = acceptedFiles[0];
    console.log(selectedFile);

    return(
        <div className={styles.container} {...getRootProps()}>
            <input {...getInputProps()} />
            {(file === null) ? <p>drop file here or click to select</p> : <p>{file.name}<br></br> {file.type}</p> }
        </div>
    )
  
};

