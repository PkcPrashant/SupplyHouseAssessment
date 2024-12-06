import AvailableHours from "./AvailableHours"
import ContactInformation from "./ContactInformation"
import Questions from "./Questions"
import SpecialHoursForm from "./SpecialHoursForm"
import styles from './style.module.css'

const CustomerSupport = () => {
    return (
        <div>
            <SpecialHoursForm />
            <div className={styles.container}>
                <Questions />
                <div className={styles.divider} />
                <ContactInformation />
                <div className={styles.divider} />
                <AvailableHours />
            </div>
        </div>
    )
}

export default CustomerSupport