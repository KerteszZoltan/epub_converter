import {create} from 'zustand';


interface IUpload{
    file : File | null;
    uploading : boolean;
    uploadSuccess : boolean;
    pdfUrl:string|null;
    setFile: (file:File | null ) => void;
    setUploading:(uploading:boolean)=>void;
    setUploadSuccess:(uploadSuccess:boolean)=>void;
    setPdfUrl:(pdfUrl:string | null)=>void;
}

export const useFileStore = create<IUpload>((set)=>({
    file : null, 
    uploading : false,
    uploadSuccess : false,
    pdfUrl:null,
    setFile: (file)=>set({file}),
    setUploading:(uploading)=>set({uploading}),
    setUploadSuccess:(uploadSuccess)=>set({uploadSuccess}),
    setPdfUrl:(pdfUrl)=>set({pdfUrl}),
}))