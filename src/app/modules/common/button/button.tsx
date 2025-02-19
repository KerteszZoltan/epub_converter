import styles from './button.module.scss';

interface IButton {
    text:string;
    onClick:()=>void
}

export default function Button({text, onClick}:IButton){
    return (
        <div className={styles.container}>
        <button className={styles.container_button}
        onClick={onClick}
        >
            <p className={styles.container_button_left_side}>{text}</p>
        </button>
        </div>
    )
}