import Title from "../../common/title/title";
import styles from "./panel.module.scss"
import BackgroundVideo from "../background/backgroundVideo";
import FileUpload from "../fileUpload/fileUpload";


export default function Main(){
    return (
        <section className={styles.panel}>
            <Title></Title>
            <BackgroundVideo/>
            <FileUpload></FileUpload>
        </section>
    )
}