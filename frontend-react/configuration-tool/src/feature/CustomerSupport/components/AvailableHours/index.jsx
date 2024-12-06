import availableHours from '../../../../mockData/apiMockdata'
import styles from './styles.module.css'

const AvailableHours = () => {
    return (
        <div className={styles.container}>
            {
                availableHours.map((data) => (
                    <div key={data?.startDay} className={styles[data?.type]}>
                        <strong>{data?.startDay}{data?.endDay && <> - {data?.endDay}</>}</strong>
                        <div>{data?.startTime} - {data?.endTime}</div>
                    </div>
                ))
            }
        </div>
    )
}

export default AvailableHours
