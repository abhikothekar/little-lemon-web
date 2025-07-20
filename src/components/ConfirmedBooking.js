import React from 'react';
import { useLocation } from 'react-router-dom';
const ConfirmedBooking = () => {
    const location = useLocation();
    const bookingDetails = location.state;

    if (!bookingDetails) {
        return <p>No booking confirmed yet.</p>;
    }

    return (
        <div className="confirm">
        <section>
            <h2>Booking Confirmed</h2>
            <p><strong>Date:</strong> {bookingDetails.date}</p>
            <p><strong>Time:</strong> {bookingDetails.times}</p>
            <p><strong>Guests:</strong> {bookingDetails.guests}</p>
            <p><strong>Occasion:</strong> {bookingDetails.occasion}</p>
        </section>
        </div>
    );
}

export default ConfirmedBooking;