import Title from "../../common/title/title";
import styles from "./panel.module.scss"
import BackgroundVideo from "../background/backgroundVideo";


export default function Main(){
    return (
        <section className={styles.panel}>
            <Title></Title>
            <BackgroundVideo/>
        </section>
    )
}