import styles from './styles.module.css'
import profile from '../../../../assets/profile.jpeg'

const Questions = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img className={styles.image} src={profile} alt="ques" />
            </div>
            <h3>Questions?</h3>
            <p>Our customer support will be opening late today. We apologize for any inconvenience.</p>
        </div>
    )
}

export default Questions