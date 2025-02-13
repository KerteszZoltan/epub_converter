import styles from './button.module.scss';

export default function Button(){
    return (
        <div className={styles.container}>
        <button className={styles.container_button}>
            <p className={styles.container_button_left_side}>Convert now</p>
        </button>
        </div>
    )
}