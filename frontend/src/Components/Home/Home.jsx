import React, { useEffect, useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './home.css';
import video from '../../Assets/greenery_fogg.mp4';
import SearchBar from '../SearchBar/SearchBar';
import { FiFacebook } from 'react-icons/fi';
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { BsListTask } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { TbApps } from "react-icons/tb";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
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
                <div data-aos="fade-up" className="textDiv">
                    <span data-aos="fade-up" className="smallText">
                        Our Hotels
                    </span>
                    <h1 data-aos="fade-up" className="homeTitle">
                        Search Your Next Stay
                    </h1>
                </div>
                <SearchBar />
                

                {/* <div data-aos="fade-up" className="homeFooterIcons flex">
                    <div className="rightIcons">
                        <FiFacebook className="icon" />
                        <AiOutlineInstagram className="icon" />
                        <FaTripadvisor className="icon" />
                    </div>
                    <div className="leftIcons">
                        <BsListTask className="icon" />
                        <TbApps className="icon" />
                    </div>
                </div> */}
            </div>

        </section>
    );
};

export default Home;
