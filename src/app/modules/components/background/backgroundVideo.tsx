import styles from "./backgroundVideo.module.scss"

export default function BackgroundVideo(){
    return(
        <video
        src="/assets/videos/backgroundVideo.mp4"
        className={styles.background}
        autoPlay
        muted
        loop>
        </video>
    )
}