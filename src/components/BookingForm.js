import React, { useState } from 'react';

const BookingForm = (props) => {
    const [date, setDate] = useState('');
    const [times, setTimes] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        const formData = {
            date: event.target['book-date'].value,
            times: event.target['book-time'].value,
            guests: event.target['book-guests'].value,
            occasion: event.target['book-occasion'].value,
        };
        console.log('Form submitted with date:', date);
        props.submitForm(formData);
    };
    const handleChange = (event) => {
        setDate(event);
        props.dispatch(event);
    };
    return (
        <>
        <section>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div>
                        <label htmlFor='book-date'>Choose date</label>
                        <input type='date' id='book-date' name='book-date' value={date} onChange={(e) => handleChange(e.target.value)} required />
                    </div>
                    <div>
                        <label htmlFor='book-time'>Choose time:</label>
                        <select id="book-time" value={times} onChange={(e) =>  setTimes(e.target.value)} required>
                            <option value="">Select a time</option>
                            {
                                props.availableTimes.availableTimes.map((availableTimes) => 
                                { return <option key={availableTimes}>{availableTimes}</option> })
                            }
                        </select>
                    </div>
                    <div>
                        <label htmlFor="book-guests">Number of Guests:</label>
                        <input type='number' id='book-guests' name='book-guests' min='1' max='10' value={guests} 
                            onChange={(e) => setGuests(e.target.value)} required />
                    </div>

                    <div>
                        <label htmlFor="book-occasion">Occasion:</label>
                        <select id="book-occasion" value={occasion} onChange={e => setOccasion(e.target.value)} required>
                                <option>Birthday</option>
                                <option>Anniversary</option>
                                <option>Engagement</option>
                                <option>Graduation</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div className='btnReceive'>
                            <input type='submit' value='Make Your reservation' className='btn btn-primary' />
                        </div>
                </fieldset>
            </form>
            </section>
        </>
    );
}
export default BookingForm;