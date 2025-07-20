import React, { useReducer } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import ConfirmedBooking from './ConfirmedBooking';
import Booking from './Booking';
import Header from './Header';
import About from './About';
import Services from './Services';
import OrderOnline from './OrderOnline';
const Main = () => {
    const seedRandom = function(seed) {
        var m = 2 ** 35 - 31;
        var a = 185852;
        var s = seed % m;
        return function(){
            return (s = s * a % m) / m;
        }
    }
    const fetchAPI = function (date) {
        let result = [];
        let random = seedRandom(date.getDate());
        for (let i = 17; i <= 23; i++) {
            if (random() < 0.5) {
                result.push(i + ':00');
            }
            if (random() > 0.5) {
                result.push(i + ':30');
            }
        }
        console.log('fetchAPI', date, result);
        return result;
    }
    const initialState = { availableTimes: fetchAPI(new Date()) };
    const [state, dispatch] = useReducer(updateTimes, initialState);
    const navigate = useNavigate();
    const submitAPI = function (formData) {
        return true;
    }


    function submitForm(formData) {
        if (submitAPI(formData)) {
            navigate("/confirmed", { state: formData });
        }
    }
    function updateTimes(state, date) {
        return { availableTimes: fetchAPI(new Date()) };
    }
    return <main className='main'>
        <Routes>
            <Route name="" path="/" element={<Header />} />
            <Route name="booking" path="/booking" element={<Booking availableTimes={state}
                dispatch={dispatch} submitForm={submitForm} />} />
            <Route name="" path="/confirmed" element={<ConfirmedBooking />} />
            <Route name="" path="/about" element={<About />} />
            <Route name="" path="/services" element={<Services />} />
            <Route name="" path="/orderOnline" element={<OrderOnline />} />

        </Routes>
    </main>
};
export default Main;