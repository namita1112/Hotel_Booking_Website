import React, { useEffect, useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './home.css';
import video from '../../Assets/Sea_video.mp4';
import { FiFacebook } from 'react-icons/fi';
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { BsListTask } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { TbApps } from "react-icons/tb";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    const [destination, setDestination] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showGuestSelector, setShowGuestSelector] = useState(false);
    const [adults, setAdults] = useState(2);
    const [children, setChildren] = useState(0);
    const [rooms, setRooms] = useState(1);
    const [withPets, setWithPets] = useState(false);
    const datePickerRef = useRef(null);
    const guestDiv = useRef(null);
    const popularDestinations = [
        { name: "Goa", country: "India" },
        { name: "Lonavala", country: "India" },
        { name: "Mumbai", country: "India" },
        { name: "North Goa", country: "India" },
        { name: "Alibaug", country: "India" },
    ];
    const toggleGuestSelector = () => {
        setShowGuestSelector(!showGuestSelector);
    };
    const handleDone = () => {
        setShowGuestSelector(false);
    };
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
                        Our Hotels
                    </span>
                    <h1 data-aos="fade-up" className="homeTitle">
                        Search Your Next Stay
                    </h1>
                </div>

                <div data-aos="fade-up" className="cardDiv grid">
                    <div className="search-bar">
                        {/* Destination Input */}
                        <input
                            type="text"
                            placeholder="Enter Destination"
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                            onClick={() => setShowPopup(true)}
                            onBlur={() => setShowPopup(false)}
                            onFocus={() => setShowPopup(true)}
                        />
                        {showPopup && (
                            <div className="popup">
                            <h3>Popular nearby destinations</h3>
                            <ul className='nearby-destination'>
                                {popularDestinations.map((item, index) => (
                                <li key={index} className="destination-item">
                                    <HiOutlineLocationMarker className='icon'/>
                                    <div>
                                    <p className="destination-name">{item.name}</p>
                                    <p className="destination-country">{item.country}</p>
                                    </div>
                                </li>
                                ))}
                            </ul>
                            </div>
                        )}
                        



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
                                className='guests-input'
                                type="text"
                                placeholder="Guests"
                                onClick={toggleGuestSelector}
                                readOnly
                                value={`${adults} adult${adults > 1 ? 's' : ''} · ${children} child${children > 1 ? 'ren' : ''} · ${rooms} room${rooms > 1 ? 's' : ''}`}
                            />
                            {showGuestSelector && (
                                <div className="guest-selector-popup">
                                    <div className='guest-selector-label flex'>
                                        <div className='guest-label'>
                                            <label>Adults</label>
                                        </div>
                                        <div className="counter">
                                            
                                            <button className='button-group' onClick={() => setAdults(Math.max(1, adults - 1))}>-</button>
                                            <span>{adults}</span>
                                            <button className='button-group' onClick={() => setAdults(adults + 1)}>+</button>
                                        </div>
                                    </div>

                                    <div className='guest-selector-label flex'>
                                        <div className='guest-label'>
                                            <label>Children</label>
                                        </div>
                                        <div className="counter">
                                            <button className='button-group' onClick={() => setChildren(Math.max(0, children - 1))}>-</button>
                                            <span>{children}</span>
                                            <button className='button-group' onClick={() => setChildren(children + 1)}>+</button>
                                        </div>
                                    </div>

                                    <div className='guest-selector-label flex'>
                                        <div className='guest-label'>
                                            <label>Rooms</label>
                                        </div>
                                        <div className="counter">
                                            <button className='button-group' onClick={() => setRooms(Math.max(1, rooms - 1))}>-</button>
                                            <span>{rooms}</span>
                                            <button className='button-group' onClick={() => setRooms(rooms + 1)}>+</button>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="toggle flex">
                                        <div className='petsLabel'>
                                            <label>Travelling with pets?</label>
                                        </div>
                                        <div className='petsInput'>
                                            <input
                                                type="checkbox"
                                                checked={withPets}
                                                onChange={() => setWithPets(!withPets)}
                                            />
                                        </div>
                                        
                                        
                                    </div>
                                    <p className="note">
                                        Assistance animals aren’t considered pets.<br />
                                        <a href="https://example.com">Read more about travelling with assistance animals</a>
                                    </p>
                                    <button className="done-button" onClick={handleDone}>Done</button>
                                    {/* <button onClick={() => setGuests(Math.max(1, guests - 1))}>-</button>
                                    <span>{guests}</span>
                                    <button onClick={() => setGuests(guests + 1)}>+</button> */}
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
