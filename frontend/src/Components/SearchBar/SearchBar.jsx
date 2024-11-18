import React, { useState, useEffect, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './searchbar.css'; 
import { HiOutlineLocationMarker } from "react-icons/hi";

const SearchBar = () => {
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

    const handleDateInputClick = () => {
        setShowDatePicker(true);
    };

    const toggleGuestSelector = () => {
        setShowGuestSelector(!showGuestSelector);
    };

    const handleDone = () => {
        setShowGuestSelector(false);
    };

    const handleClickOutside = (event) => {
        if (datePickerRef.current && !datePickerRef.current.contains(event.target)) {
            setShowDatePicker(false);
        }
        if (guestDiv.current && !guestDiv.current.contains(event.target)) {
            setShowGuestSelector(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="cardDiv grid">
            {/* Destination Input */}
            <input
                type="text"
                className='destination'
                placeholder="Enter Destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                onClick={() => setShowPopup(true)}
                onBlur={() => setShowPopup(false)}
                onFocus={() => setShowPopup(true)}
            />
            {/* {showPopup && (
                <div className="popup">
                    <h3>Popular nearby destinations</h3>
                    <ul className="nearby-destination">
                        {popularDestinations.map((item, index) => (
                            <li key={index} className="destination-item">
                                <HiOutlineLocationMarker className="icon" />
                                <div>
                                    <p className="destination-name">{item.name}</p>
                                    <p className="destination-country">{item.country}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )} */}

            {/* Date Picker */}
            <div ref={datePickerRef} className="date-picker">
                <input
                    type="text"
                    placeholder="Check-in - Check-out"
                    onClick={handleDateInputClick}
                    readOnly
                    value={`${checkInDate ? checkInDate.toLocaleDateString() : 'Check-in'} - ${
                        checkOutDate ? checkOutDate.toLocaleDateString() : 'Check-out'
                    }`}
                />
                {showDatePicker && (
                    <div className="date-picker-popup">
                        {/* <button onClick={() => setShowDatePicker(false)} className="close-button">X</button> */}
                        <div className="date-picker-container">
                            <DatePicker
                                selected={checkInDate}
                                onChange={(date) => setCheckInDate(date)}
                                selectsStart
                                startDate={checkInDate}
                                endDate={checkOutDate}
                                minDate={new Date()}
                                inline
                            />
                            <DatePicker
                                selected={checkOutDate}
                                onChange={(date) => setCheckOutDate(date)}
                                selectsEnd
                                startDate={checkInDate}
                                endDate={checkOutDate}
                                minDate={checkInDate}
                                inline
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
                    onClick={toggleGuestSelector}
                    readOnly
                    value={`${adults} adult${adults > 1 ? 's' : ''} · ${children} child${children > 1 ? 'ren' : ''} · ${rooms} room${rooms > 1 ? 's' : ''}`}
                />
                {showGuestSelector && (
                    <div className="guest-selector-popup">
                        {/* Guests */}
                        <div className="guest-selector-label flex">
                            <label>Adults</label>
                            <div className="counter">
                                <button onClick={() => setAdults(Math.max(1, adults - 1))}>-</button>
                                <span>{adults}</span>
                                <button onClick={() => setAdults(adults + 1)}>+</button>
                            </div>
                        </div>

                        {/* Children */}
                        <div className="guest-selector-label flex">
                            <label>Children</label>
                            <div className="counter">
                                <button onClick={() => setChildren(Math.max(0, children - 1))}>-</button>
                                <span>{children}</span>
                                <button onClick={() => setChildren(children + 1)}>+</button>
                            </div>
                        </div>

                        {/* Rooms */}
                        <div className="guest-selector-label flex">
                            <label>Rooms</label>
                            <div className="counter">
                                <button onClick={() => setRooms(Math.max(1, rooms - 1))}>-</button>
                                <span>{rooms}</span>
                                <button onClick={() => setRooms(rooms + 1)}>+</button>
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
                        
                    </div>
                )}
            </div>
            <button className="btn SearchOption">Search</button>
        </div>
    );
};

export default SearchBar;
