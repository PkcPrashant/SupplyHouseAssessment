import { useState } from 'react';

const SpecialHoursForm = () => {
    const today = new Date().toISOString().split('T')[0];

    const [specialHours, setSpecialHours] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();

        const formValues = {};
        new FormData(event.target).forEach((value, key) => formValues[key] = value);
        setSpecialHours(JSON.stringify(formValues));
        event.target.reset();
    }

    return (
        <div>
            <h2>Special Hours Form</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="date">Select date</label>
                    <input type="date" id="date" name="date" min={today} />
                </div>
                <div>
                    <label htmlFor="startTime">Start time</label>
                    <input type="time" id="startTime" name="startTime" />
                </div>
                <div>
                    <label htmlFor="endTime">End time</label>
                    <input type="time" id="endTime" name="endTime" />
                </div>
                <button type="submit">Submit</button>
            </form>
            {specialHours && <div>Special hours: {specialHours}</div>}
        </div>
    )
}

export default SpecialHoursForm