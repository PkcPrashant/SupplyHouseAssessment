import styles from './styles.module.css'
import callIcon from '../../../../assets/call.png'

const ContactInformation = () => {
    return (
        <div className={styles.container}>
            <div className={styles.gap}>
                <img src={callIcon} alt="icon" />
                <div className={styles.textLeft}>
                    <div className={styles.gap}><strong>Call</strong>888-551-7600</div>
                    <li>Available 8am</li>
                </div>
            </div>
            <div className={styles.gap}>
                <img src={callIcon} alt="icon" />
                <div className={styles.textLeft}>
                    <div className={styles.gap}><strong>Text</strong>888-551-7600</div>
                    <li>Available 8am</li>
                </div>
            </div>
            <div className={styles.gap}>
                <img src={callIcon} alt="icon" />
                <div className={styles.textLeft}>
                    <strong>Live Chat</strong>
                    <li>Available 8am</li>
                </div>
            </div>
            <div className={styles.gap}>
                <img src={callIcon} alt="icon" />
                <div className={styles.textLeft}>
                    <strong>Email</strong>
                    <li>Available 8am</li>
                </div>
            </div>
        </div>
    )
}

export default ContactInformation
