import React, { useEffect, useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './home.css';
import video from '../../Assets/Sea_video.mp4';
import { FiFacebook } from 'react-icons/fi';
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    const [destination, setDestination] = useState('');
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showGuestSelector, setShowGuestSelector] = useState(false);
    const [guests, setGuests] = useState(1);

    const datePickerRef = useRef(null);

    const guestDiv = useRef(null);

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    const handleDateInputClick = () => {
        setShowDatePicker(true); // Set date picker to open on first click
    };

    // Close date picker when clicking outside
    const handleClickOutside = (event) => {
        if (datePickerRef.current && !datePickerRef.current.contains(event.target)) {
            setShowDatePicker(false);
        }
        if (guestDiv.current && !guestDiv.current.contains(event.target)){
            setShowGuestSelector(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Automatically close date picker when both dates are selected
    useEffect(() => {
        if (checkInDate && checkOutDate) {
            setShowDatePicker(false);
        }
    }, [checkInDate, checkOutDate]);

    return (
        <section className="home">
            <div className="overlay"></div>
            <video src={video} muted autoPlay loop type="video/mp4"></video>

            <div className="homeContent container">
                <div className="textDiv">
                    <span data-aos="fade-up" className="smallText">
                        Our Packages
                    </span>
                    <h1 data-aos="fade-up" className="homeTitle">
                        Search Your Holidays
                    </h1>
                </div>

                <div data-aos="fade-up" className="cardDiv grid">
                    <div className="search-bar">
                        {/* Destination Input */}
                        <input
                            type="text"
                            placeholder="Enter destination"
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                        />

                        <div ref={datePickerRef} className="date-picker">
                            <input
                                type="text"
                                placeholder="Check-in - Check-out"
                                onClick={handleDateInputClick}
                                readOnly
                                value={`${checkInDate ? checkInDate.toLocaleDateString() : 'Check-in'} - ${checkOutDate ? checkOutDate.toLocaleDateString() : 'Check-out'}`}
                            />
                            {showDatePicker && (
                                <div className="date-picker-popup">
                                    <button onClick={() => setShowDatePicker(false)} className="close-button">X</button>
                                    <div className="date-picker-container">
                                        <DatePicker
                                            selected={checkInDate}
                                            onChange={(date) => setCheckInDate(date)}
                                            selectsStart
                                            startDate={checkInDate}
                                            endDate={checkOutDate}
                                            minDate={new Date()}
                                            inline
                                            // placeholderText="Check-in"
                                            // open={showDatePicker}
                                        />
                                        <DatePicker
                                            selected={checkOutDate}
                                            onChange={(date) => setCheckOutDate(date)}
                                            selectsEnd
                                            startDate={checkInDate}
                                            endDate={checkOutDate}
                                            minDate={checkInDate}
                                            inline
                                            // placeholderText="Check-out"
                                            // open={showDatePicker}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>

                        

                        {/* Guest Selector */}
                        <div ref={guestDiv} className="guest-selector">
                            <input
                                type="text"
                                placeholder="Guests"
                                onClick={() => setShowGuestSelector(!showGuestSelector)}
                                readOnly
                                value={`${guests} Guest${guests > 1 ? 's' : ''}`}
                            />
                            {showGuestSelector && (
                                <div className="guest-selector-popup">
                                    <button onClick={() => setGuests(Math.max(1, guests - 1))}>-</button>
                                    <span>{guests}</span>
                                    <button onClick={() => setGuests(guests + 1)}>+</button>
                                </div>
                            )}
                        </div>
                        <button type="button" className='btn SearchOption'> Search</button>
                    </div>
                </div>

                <div data-aos="fade-up" className="homeFooterIcons flex">
                    <div className="rightIcons">
                        <FiFacebook className="icon" />
                        <AiOutlineInstagram className="icon" />
                        <FaTripadvisor className="icon" />
                    </div>
                    <div className="leftIcons">
                        <BsListTask className="icon" />
                        <TbApps className="icon" />
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Home;
