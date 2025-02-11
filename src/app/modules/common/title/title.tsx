import styles from './title.module.scss';

export default function Title(){
    return (
        <div className={styles.container}>
            <div className={styles.container_title}>
                Convwme
                <p className={styles.container_title_subtitle}>This is not the e-pub!</p>
                <p className={styles.container_title_subtitle_lower}>Just an epub converter!</p>
                <p className={styles.container_title_supplement}> use it for free, read it freely </p>
            </div>
        </div>
    )
}