import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './hoteldetails.css';
import img from '../../Assets/hotel-view1.jpg';
import img1 from '../../Assets/hotel-view2.jpg';
import img2 from '../../Assets/hotel-swimmingpool1.jpg';
import img3 from '../../Assets/hotel-swimmingpool2.jpg';
import img4 from '../../Assets/hotel-swimmingpool3.jpg';
import img5 from '../../Assets/hotel-swimmingpool4.jpg';
import img6 from '../../Assets/hotel-bedroom1.jpg';
import img7 from '../../Assets/hotel-bedroom2.jpg';
import img8 from '../../Assets/hotel-bedroom3.jpg';
import SearchBar from '../SearchBar/SearchBar';
import { MdOutlineHotelClass } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import Aos, { init } from 'aos';
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiWifiOn } from "react-icons/ci";
import { CiParking1 } from "react-icons/ci";
import { TbAirConditioning } from "react-icons/tb";
import { IoRestaurantOutline } from "react-icons/io5";
import { MdKeyboardArrowUp } from "react-icons/md";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import 'aos/dist/aos.css';

const hotels = [
    {
        id: 1,
        imgSrc: img,
        type: 'Resort',
        destTitle: 'Blue Country Resort',
        Address: 'KhingarRoad Panchgani,  412805,  Mahabaleshwar,  India',
        location: 'Mahabaleshwar,  India',
        grade: 'CULTURAL RELAX',
        ratings: '4.5',
        fees: '2794',
        phone: '+91 9323881466',
        CheckIn: '12:00',
        CheckOut: '2:00',
        overviewTitle: 'Serene and Interesting, Family-Friendly and Couple-Friendly',
        overview: 'Serene and Interesting - Guests describe their stay as serene and interesting, highlighting the peaceful atmosphere.',
        description: 'Blue Country Resort provides flawless service and all the necessary facilities for visitors. Remain linked during your visit by utilizing the complimentary internet access available.Prior to your check-in date, you can arrange airport transportation services, guaranteeing a seamless and efficient experience for both arrival and departure. The resort offers complimentary parking for guests who arrive with their own mode of transport.In limited designated zones, smoking is exclusively permitted. Each morning at Blue Country Resort, a scrumptious, homemade breakfast kick-starts the day. During your visit, indulge in a range of delightful culinary choices at resort to enhance your experience.During your stay at resort, an array of engaging activities and amenities guarantees a delightful experience. Begin your holiday perfectly by taking a plunge into the swimming pool.'
    },
    {
        id: 2,
        imgSrc: img1,
        type: 'Resort',
        destTitle: 'Evershine Resort & Spa',
        Address: 'C.T.S No. 182, Gautam Road, Satara-Mehda Road,  400098,  Mahabaleshwar,  India',
        location: 'Mahabaleshwar,  India',
        grade: 'CULTURAL RELAX',
        ratings: '4.5',
        fees: '1047',
        phone: '+91 9322800100',
        CheckIn: '12:00',
        CheckOut: '2:00',
        overviewTitle: 'Colonial Charm, Variety of Dining Options Nearby',
        overview: 'Colonial Charm - The hotel features a charming colonial architecture, adding a unique and historical touch to the experience.',
        description: 'Surrounded by lush valleys dotted with strawberry fields, Evershine Resort & Spa offers accommodation in a grand pink-stone building. Along with landscaped gardens, the resort features concierge services, an outdoor pool and the full-service Sohum Spa. Executive twin/double rooms provide air conditioning, sitting areas, elegant writing desks, flat-screen TVs and luxurious shower rooms. Deluxe rooms add pool views and free standing bathtubs. Accessible rooms are available. As well as meeting and banqueting space, Evershine Resort & Spa features a fully equipped gym, a pool table and a children’s play area. Practical extras include currency exchange, laundry services and free Wi-Fi. As well as buffet breakfasts, multiple international cuisines are served at the all-day Keys Cafe. Plus, there’s the poolside Le Pizzeria and Unlock Bar, which specialises in mocktails and finger food. Guests can enjoy a memorable start to their day by heading to the Wilson Point of Sunrise, less than a mile away. The beautiful Lingmala Waterfall can be reached in around a ten-minute drive.'
    },
    {
        id: 3,
        imgSrc: img2,
        type: 'Hotel',
        destTitle: 'Gugal Residency',
        Address: 'Mahabaleshwar Panchgani Road, Metgutad Village, Near Ganesh Temple,  412806,  Mahabaleshwar,  India',
        location: 'Mahabaleshwar,  India',
        grade: 'CULTURAL RELAX',
        ratings: '4.5',
        fees: '2070',
        phone: '+91 9322800100',
        CheckIn: '12:00',
        CheckOut: '2:00',
        overviewTitle: 'Colonial Charm, Family-Friendly and Couple-Friendly',
        overview: 'Colonial Charm - The hotel features a charming colonial architecture, adding a unique and historical touch to the experience.',
        description: 'Gugal Residency Mahabaleshwar is a family-friendly budget property outside of Mahabaleshwar. The hotel features spacious rooms with balconies or terraces and lovely views of the nearby mountains. Family rooms and deluxe rooms are cleaned daily and feature satellite television, complimentary bottled water, and separate seating and dining areas. Guests can relax in the hotel garden or take in the views from the outside terrace. Open air meeting/event facilities can be booked, while indoor and outdoor games are on offer. On-site parking, complimentary Wi-Fi, luggage storage and laundry facilities are some of the other amenities available. There is a kitchen on site and meals are served during set times. Private dining and room service are available. Lingmala Pure Veg Restaurant is within a short walk. Scenic natural features abound in the area around Gugal Residency Mahabaleshwar. Popular nearby sites include Venna Lake, Elphinstone Point, and Parsi Point, all within ten kilometres of the hotel. Meanwhile, Mapro Garden is less than four kilometres away.'
    },
    {
        id: 4,
        imgSrc: img3,
        type: 'Hotel',
        destTitle: 'Treebo Trend JP Cottage',
        Address: 'Mahabaleshwar Road, Near Lingmala Water Fall, Maharashtra,  412806,  Mahabaleshwar,  India',
        location: 'Mahabaleshwar,  India',
        grade: 'CULTURAL RELAX',
        ratings: '4.8',
        fees: '1047',
        phone: '+91 9322800100',
        CheckIn: '12:00',
        CheckOut: '11:00',
        overviewTitle: 'Colonial Charm, Variety of Dining Options Nearby',
        overview: 'Colonial Charm - The hotel features a charming colonial architecture, adding a unique and historical touch to the experience.',
        description: 'Nestled in the West Ghats, Mahabaleshwar is a beautiful hill town and a popular tourist destination close to Mumbai and Pune. With an increase in tourist activity, finding quality and economical accommodation here can be a task. With Treebo Trend JP Cottages offering 18 beautiful rooms categorised as Oak (Standard), Maple (Deluxe) and Mahogany (Premium), your search for quality accommodation ends here. In terms making your way to this hotel the Pune International Airport is 3 hours and 25 minutes away (130 km) while the Satara Railway Station is around 1 hour and 25 minutes away (59 km). From here, you would have to take a bus or a cab to either the Panchgani Bus Stand which is around 13 km away or the ISBT at Mahabaleshwar which is around 5 km away from Treebo Trend JP Cottage. Complimentary vegetarian a’la carte breakfast with North Indian and South Indian options, free WiFi and branded Treebo toiletries are provided during your stay in this hotel. Treebo Trend JP Cottage offers 18 rooms that come with a TV with cable/DTH connection, air-conditioning, a study table and a chair, comfortable beds, fresh linen, a coffee table, a hot water kettle with provisions for making tea and coffee, intercom facility and an attached bathroom with running hot and cold water. The Maple rooms come with an attached balcony as well. The Mahogany rooms have a bathtub in the bathroom. When talking about the amenities provided by Treebo Trend JP Cottage, these include outsourced laundry service on a chargeable basis, the provision of an ironing board on request, on-site parking space for 10 two-wheelers and 12 four-wheelers, room service, round-the-clock security, travel desk assistance, and 24-hours power backup. Mahabaleshwar is indeed a beautiful hill town with plenty of tourist attractions to visit.'
    },
    {
        id: 5,
        imgSrc: img4,
        type: 'Hotel',
        destTitle: 'Hill Top House',
        Address: 'Panchgani Mahabaleshwar Road Near 1.5Km From Mapro Garden Bondarwadi Village,  412806,  Mahabaleshwar,  India',
        location: 'Mahabaleshwar,  India',
        grade: 'CULTURAL RELAX',
        ratings: '4.8',
        fees: '1263',
        phone: '+91 9767006699',
        CheckIn: '12:00',
        CheckOut: '12:00',
        overviewTitle: 'Colonial Charm, Family-Friendly and Couple-Friendly',
        overview: 'Colonial Charm - The hotel features a charming colonial architecture, adding a unique and historical touch to the experience.',
        description: 'Surrounded by greenery and boasting its own strawberry farm, Hill Top House is a simple three-storey hotel with budget-friendly rooms and an outdoor dining terrace near Mahabaleshwar, India. Nearby attractions include Mapro Garden, a popular tourist destination with a chocolate factory and a children’s play area. Along with private bathrooms and balconies, the colourful rooms provide cable TVs, safes, fans, wardrobes, and tea and coffee-making facilities. Upgrade rooms add air conditioning and fine valley views. Guests can take advantage of conveniences like a 24-hour reception, a shared kitchen, backup power generators, and free secure parking. There is Internet access available. Breakfast and evening meals are served in the on-site dining hall, which offers vegetarian and meat dishes. Nightly rates are offered with or without meals. Room service is available too. The Parsi Point lookout and the beautiful Lingmala Waterfall both lie within about five miles of Hill Top House. Central Mahabaleshwar, home to markets and the Hollywood Wax Museum, is a 20-minute drive away.'
    },
    {
        id: 6,
        imgSrc: img5,
        type: 'Hotel',
        destTitle: 'Gourish',
        Address: 'Plot No. 3, S. No. 22/B, Duchess Rd, Village Nakinda,  Mahabaleshwar,  India',
        location: 'Mahabaleshwar,  India',
        grade: 'CULTURAL RELAX',
        ratings: '4.8',
        fees: '1263',
        phone: '',
        CheckIn: '12:00',
        CheckOut: '12:00',
        overviewTitle: 'Colonial Charm, Variety of Dining Options Nearby',
        overview: 'Colonial Charm - The hotel features a charming colonial architecture, adding a unique and historical touch to the experience.',
        description: 'Gourish Resort provides flawless service and all the necessary facilities for visitors. Share your photos and respond to emails at your convenience, thanks to the free Wi-Fi internet access offered by hotel.Visitors can take advantage of complimentary parking directly at the hotel. The hotel maintains a completely smoke-free zone, providing a breathable atmosphere.Smoking is limited to specified smoking zones. Begin your holiday on a high note. At Gourish Resort, your mornings are greeted with a delightful, free breakfast. Should you prefer not to venture out for a meal, the enticing culinary choices at hotel are always available for your satisfaction.Indulge in the numerous pursuits available at Gourish Resort. For individuals who dont want to skip their exercise routine, visiting the hotel fitness center ensures you maintain your vitality and wellness.'
    },
    {
        id: 7,
        imgSrc: img,
        type: 'Hotel',
        destTitle: 'Treebo Trend Winter Town Venna Lake',
        Address: 'Near Venna lake, Panchgani Mahabaleshwar Road,  412806,  Mahabaleshwar,  India',
        location: 'Mahabaleshwar,  India',
        grade: 'CULTURAL RELAX',
        ratings: '4.8',
        fees: '2063',
        phone: '+91 9322800100',
        CheckIn: '12:00',
        CheckOut: '11:00',
        overviewTitle: 'Colonial Charm, Family-Friendly and Couple-Friendly',
        overview: 'Colonial Charm - The hotel features a charming colonial architecture, adding a unique and historical touch to the experience.',
        description: 'If you are travelling to Mahabaleshwar and are looking for a comfortable accommodation to complement your travel experience, then Treebo Trend Winter Town is the perfect place for you. Located near Venna Lake on the Mahabaleshwar Road, this 16-room hotel boasts a modern build. It features 13 Maple (Deluxe) and 3 Oak (Standard) rooms and welcomes one and all including unmarried couples, other than those carrying a Local ID. Surrounded by a lake, a buzzing market, a shopping mall, hospitals, ATMs, restaurants, bars and pubs, Treebo Trend Winter Town is an ideal accommodation for corporates, families, singles, and couples. The hotel offers a number of facilities to its guests such as amazing in-house multi-cuisine (North Indian and Chinese) restaurant, called ‘Food Express’. The restaurant boasts an a’ la carte and buffet menu that serves delicious vegetarian food. The hotel also provides a complimentary breakfast, free WiFi and branded toiletries to its guests. Pune Airport is at a distance of 124 km from Treebo Trend Winter Town. If you are travelling by train, Satara Railway Station is 70 km from this hotel. If you want to take a bus, Mahabaleshwar ST Station is at a distance of 3.3 km from the hotel. You can hire a car or taxi from here to get to your destination. The 16 featured rooms come with a window each, for soaking in some sun and fresh air, and offer a host of amenities which include comfortable king-size beds, a sturdy wardrobe, intercom facility, air conditioning, a TV with cable/DTH connection, bottled water, and an attached washroom with hot water and shower curtains.Facilities that the hotel provides to its guests include the provision for iron boards on request, laundry service (chargeable), a 24/7 efficient room service, power backup, a fully furnished lobby, driver quarters and a functional pantry.'
    },
    {
        id: 8,
        imgSrc: img1,
        type: 'Hotel',
        destTitle: 'Treebo Trend Winter Town Venna Lake',
        Address: 'Near Venna lake, Panchgani Mahabaleshwar Road,  412806,  Mahabaleshwar,  India',
        location: 'Mahabaleshwar,  India',
        grade: 'CULTURAL RELAX',
        ratings: '4.8',
        fees: '2063',
        phone: '+91 9322800100',
        CheckIn: '12:00',
        CheckOut: '11:00',
        overviewTitle: 'Colonial Charm, Variety of Dining Options Nearby',
        overview: 'Colonial Charm - The hotel features a charming colonial architecture, adding a unique and historical touch to the experience.',
        description: 'If you are travelling to Mahabaleshwar and are looking for a comfortable accommodation to complement your travel experience, then Treebo Trend Winter Town is the perfect place for you. Located near Venna Lake on the Mahabaleshwar Road, this 16-room hotel boasts a modern build. It features 13 Maple (Deluxe) and 3 Oak (Standard) rooms and welcomes one and all including unmarried couples, other than those carrying a Local ID. Surrounded by a lake, a buzzing market, a shopping mall, hospitals, ATMs, restaurants, bars and pubs, Treebo Trend Winter Town is an ideal accommodation for corporates, families, singles, and couples. The hotel offers a number of facilities to its guests such as amazing in-house multi-cuisine (North Indian and Chinese) restaurant, called ‘Food Express’. The restaurant boasts an a’ la carte and buffet menu that serves delicious vegetarian food. The hotel also provides a complimentary breakfast, free WiFi and branded toiletries to its guests. Pune Airport is at a distance of 124 km from Treebo Trend Winter Town. If you are travelling by train, Satara Railway Station is 70 km from this hotel. If you want to take a bus, Mahabaleshwar ST Station is at a distance of 3.3 km from the hotel. You can hire a car or taxi from here to get to your destination. The 16 featured rooms come with a window each, for soaking in some sun and fresh air, and offer a host of amenities which include comfortable king-size beds, a sturdy wardrobe, intercom facility, air conditioning, a TV with cable/DTH connection, bottled water, and an attached washroom with hot water and shower curtains.Facilities that the hotel provides to its guests include the provision for iron boards on request, laundry service (chargeable), a 24/7 efficient room service, power backup, a fully furnished lobby, driver quarters and a functional pantry.'
    },
    {
        id: 9,
        imgSrc: img2,
        type: 'Hotel',
        destTitle: 'Treebo Trend Winter Town Venna Lake',
        Address: 'Near Venna lake, Panchgani Mahabaleshwar Road,  412806,  Mahabaleshwar,  India',
        location: 'Mahabaleshwar,  India',
        grade: 'CULTURAL RELAX',
        ratings: '4.8',
        fees: '2063',
        phone: '+91 9322800100',
        CheckIn: '12:00',
        CheckOut: '11:00',
        overviewTitle: 'Colonial Charm, Family-Friendly and Couple-Friendly',
        overview: 'Colonial Charm - The hotel features a charming colonial architecture, adding a unique and historical touch to the experience.',
        description: 'If you are travelling to Mahabaleshwar and are looking for a comfortable accommodation to complement your travel experience, then Treebo Trend Winter Town is the perfect place for you. Located near Venna Lake on the Mahabaleshwar Road, this 16-room hotel boasts a modern build. It features 13 Maple (Deluxe) and 3 Oak (Standard) rooms and welcomes one and all including unmarried couples, other than those carrying a Local ID. Surrounded by a lake, a buzzing market, a shopping mall, hospitals, ATMs, restaurants, bars and pubs, Treebo Trend Winter Town is an ideal accommodation for corporates, families, singles, and couples. The hotel offers a number of facilities to its guests such as amazing in-house multi-cuisine (North Indian and Chinese) restaurant, called ‘Food Express’. The restaurant boasts an a’ la carte and buffet menu that serves delicious vegetarian food. The hotel also provides a complimentary breakfast, free WiFi and branded toiletries to its guests. Pune Airport is at a distance of 124 km from Treebo Trend Winter Town. If you are travelling by train, Satara Railway Station is 70 km from this hotel. If you want to take a bus, Mahabaleshwar ST Station is at a distance of 3.3 km from the hotel. You can hire a car or taxi from here to get to your destination. The 16 featured rooms come with a window each, for soaking in some sun and fresh air, and offer a host of amenities which include comfortable king-size beds, a sturdy wardrobe, intercom facility, air conditioning, a TV with cable/DTH connection, bottled water, and an attached washroom with hot water and shower curtains.Facilities that the hotel provides to its guests include the provision for iron boards on request, laundry service (chargeable), a 24/7 efficient room service, power backup, a fully furnished lobby, driver quarters and a functional pantry.'
    },
    {
        id: 10,
        imgSrc: img2,
        type: 'Resort',
        destTitle: 'Treebo Trend Winter Town Venna Lake',
        Address: 'Near Venna lake, Panchgani Mahabaleshwar Road,  412806,  Mahabaleshwar,  India',
        location: 'Mahabaleshwar,  India',
        grade: 'CULTURAL RELAX',
        ratings: '4.8',
        fees: '1400',
        phone: '+91 9322800100',
        CheckIn: '12:00',
        CheckOut: '11:00',
        overviewTitle: 'Colonial Charm, Variety of Dining Options Nearby',
        overview: 'Colonial Charm - The hotel features a charming colonial architecture, adding a unique and historical touch to the experience.',
        description: 'If you are travelling to Mahabaleshwar and are looking for a comfortable accommodation to complement your travel experience, then Treebo Trend Winter Town is the perfect place for you. Located near Venna Lake on the Mahabaleshwar Road, this 16-room hotel boasts a modern build. It features 13 Maple (Deluxe) and 3 Oak (Standard) rooms and welcomes one and all including unmarried couples, other than those carrying a Local ID. Surrounded by a lake, a buzzing market, a shopping mall, hospitals, ATMs, restaurants, bars and pubs, Treebo Trend Winter Town is an ideal accommodation for corporates, families, singles, and couples. The hotel offers a number of facilities to its guests such as amazing in-house multi-cuisine (North Indian and Chinese) restaurant, called ‘Food Express’. The restaurant boasts an a’ la carte and buffet menu that serves delicious vegetarian food. The hotel also provides a complimentary breakfast, free WiFi and branded toiletries to its guests. Pune Airport is at a distance of 124 km from Treebo Trend Winter Town. If you are travelling by train, Satara Railway Station is 70 km from this hotel. If you want to take a bus, Mahabaleshwar ST Station is at a distance of 3.3 km from the hotel. You can hire a car or taxi from here to get to your destination. The 16 featured rooms come with a window each, for soaking in some sun and fresh air, and offer a host of amenities which include comfortable king-size beds, a sturdy wardrobe, intercom facility, air conditioning, a TV with cable/DTH connection, bottled water, and an attached washroom with hot water and shower curtains.Facilities that the hotel provides to its guests include the provision for iron boards on request, laundry service (chargeable), a 24/7 efficient room service, power backup, a fully furnished lobby, driver quarters and a functional pantry.'
    },
    {
        id: 11,
        imgSrc: img2,
        type: 'Hotel',
        destTitle: 'Treebo Trend Winter Town Venna Lake',
        Address: 'Near Venna lake, Panchgani Mahabaleshwar Road,  412806,  Mahabaleshwar,  India',
        location: 'Mahabaleshwar,  India',
        grade: 'CULTURAL RELAX',
        ratings: '4.8',
        fees: '2000',
        phone: '+91 9322800100',
        CheckIn: '12:00',
        CheckOut: '11:00',
        overviewTitle: 'Colonial Charm, Family-Friendly and Couple-Friendly',
        overview: 'Colonial Charm - The hotel features a charming colonial architecture, adding a unique and historical touch to the experience.',
        description: 'If you are travelling to Mahabaleshwar and are looking for a comfortable accommodation to complement your travel experience, then Treebo Trend Winter Town is the perfect place for you. Located near Venna Lake on the Mahabaleshwar Road, this 16-room hotel boasts a modern build. It features 13 Maple (Deluxe) and 3 Oak (Standard) rooms and welcomes one and all including unmarried couples, other than those carrying a Local ID. Surrounded by a lake, a buzzing market, a shopping mall, hospitals, ATMs, restaurants, bars and pubs, Treebo Trend Winter Town is an ideal accommodation for corporates, families, singles, and couples. The hotel offers a number of facilities to its guests such as amazing in-house multi-cuisine (North Indian and Chinese) restaurant, called ‘Food Express’. The restaurant boasts an a’ la carte and buffet menu that serves delicious vegetarian food. The hotel also provides a complimentary breakfast, free WiFi and branded toiletries to its guests. Pune Airport is at a distance of 124 km from Treebo Trend Winter Town. If you are travelling by train, Satara Railway Station is 70 km from this hotel. If you want to take a bus, Mahabaleshwar ST Station is at a distance of 3.3 km from the hotel. You can hire a car or taxi from here to get to your destination. The 16 featured rooms come with a window each, for soaking in some sun and fresh air, and offer a host of amenities which include comfortable king-size beds, a sturdy wardrobe, intercom facility, air conditioning, a TV with cable/DTH connection, bottled water, and an attached washroom with hot water and shower curtains.Facilities that the hotel provides to its guests include the provision for iron boards on request, laundry service (chargeable), a 24/7 efficient room service, power backup, a fully furnished lobby, driver quarters and a functional pantry.'
    },

]

const amenities = [
    {
        'id': 1,
        'Title': 'Strawberry farm views',
        'Type': "Location",
        'Desc': "Some rooms offer stunning views of the nearby strawberry farm, adding a touch of local charm."
    },
    {
        'id': 2,
        'Title': 'Family-Friendly Atmosphere',
        'Type': "Room and accommodation",
        'Desc': "Welcoming families and couples, with comfortable rooms and a range of amenities."
    },
    {
        'id': 3,
        'Title': 'Convenient Location',
        'Type': "Dining and cuisine",
        'Desc': "Located near Venna Lake, Mahabaleshwar Road, and a variety of restaurants, shops, and attractions."
    },

    {
        'id': 4,
        'Title': 'Multi-Cuisine Restaurant',
        'Type': "Dining and cuisine",
        'Desc': "Indulge in delicious North Indian and Chinese cuisine at the hotel's in-house restaurant, Food Express."
    },
    {
        'id': 5,
        'Title': 'Relaxing Amenities',
        'Type': "Services",
        'Desc': "Enjoy amenities like a 24-hour front desk, room service, and a functional pantry."
    },
    {
        'id': 6,
        'Title': 'Venna Lake Views',
        'Type': "Views",
        'Desc': "Enjoy a scenic stay just a 2-minute drive from Venna Lake, a popular spot for boating and relaxation."
    },
    {
        'id': 7,
        'Title': "Explore Mahabaleshwar's Attractions",
        'Type': "Activities",
        'Desc': "Discover nearby attractions like Lingmala Falls, Mahabaleshwar Temple, and the bustling Mahabaleshwar market."
    },
    {
        'id': 8,
        'Title': "Easy Access to Transportation",
        'Type': "Location",
        'Desc': "Conveniently located near Mahabaleshwar ST Station, making it easy to explore the surrounding area."
    },
    {
        'id': 9,
        'Title': "Budget-friendly option",
        'Type': "Experience",
        'Desc': "Guests appreciate the hotel's affordability, offering a good value for the amenities provided."
    },
    {
        'id': 10,
        'Title': "Excellent value for money",
        'Type': "Comfort",
        'Desc': "Guests consistently mention the hotel's excellent value for money, offering a comfortable stay at an affordable price."
    },
]

const top_amenities = {
    top: ["Free WiFi", "Parking", "A/C", "Restaurant"], 
    property: [
        "Airport shuttle",
        "Arcade/Video games",
        "Breakfast",
        "Car hire",
        "Cashless payment",
        "Daily housekeeping",
        "Doctor on site",
        "Express check-in",
        "Free WiFi in public areas",
        "Housekeeping",
        "Luggage storage",
        "Restaurant",
        "Safe distance",
    ],
    room: [
        "Air conditioning",
        "Cable TV",
        "Fan",
        "Fireplace",
        "Free WiFi (rooms)",
        "Satellite TV",
        "Television",
        "Shower",
        "WiFi",
    ],
    accessibility: ["Accessible parking"],
};


const ITEMS_PER_PAGE = 6;

const google_api_key = 'AIzaSyANdye4mgXgKpTvO8-ec3aJshLALV-rAL4'

const Map = () => {
    const mapStyles = {
        height: "300px",
        width: "100%",
    };
    const defaultCenter = {
        lat: 17.9249, 
        lng: 73.6578, 
    };
    return (
        <LoadScript googleMapsApiKey="AIzaSyANdye4mgXgKpTvO8-ec3aJshLALV-rAL4">
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={14}
                center={defaultCenter}
            >
                <Marker position={defaultCenter} />
            </GoogleMap>
        </LoadScript>
    );
};

const photos = [img, img1, img2, img3, img4, img5, img6, img7, img8]

const PhotosSection = ({ photos }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

    const openModal = (index) => {
        setCurrentPhotoIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const showPreviousPhoto = () => {
        setCurrentPhotoIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
    };

    const showNextPhoto = () => {
        setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
    };

    return (
        <div className="photosSection">
            {/* Thumbnails */}
            <div className="thumbnails">
                {photos.map((photo, index) => (
                    <img
                        key={index}
                        src={photo}
                        alt={`Thumbnail ${index + 1}`}
                        className="thumbnail"
                        onClick={() => openModal(index)}
                    />
                ))}
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="photoModal">
                    <div className="modalContent">
                        <button className="closeModal" onClick={closeModal}>
                            &times;
                        </button>
                        <button className="prevPhoto" onClick={showPreviousPhoto}>
                            &lt;
                        </button>
                        <img src={photos[currentPhotoIndex]} alt={`Photo ${currentPhotoIndex + 1}`} className="modalPhoto" />
                        <button className="nextPhoto" onClick={showNextPhoto}>
                            &gt;
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};



const HotelDetails = ({ hotels }) => {
    const { id } = useParams();
    const navigate = useNavigate();

    const handleCardClick = (id) => {
        navigate(`/hotel/reservation/${id}`);
    };

    // For Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
    const currentItems = hotels.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(hotels.length / ITEMS_PER_PAGE);

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handlePrev = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    // For Good to know section In Info tab
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerSlide = 3;
    const handleNextAmenities = () => {
        if (currentIndex + itemsPerSlide < amenities.length) {
            setCurrentIndex(currentIndex + itemsPerSlide);
        }
    };
    const handlePrevAmenities = () => {
        if (currentIndex - itemsPerSlide >= 0) {
            setCurrentIndex(currentIndex - itemsPerSlide);
        }
    };
    const visibleAmenities = amenities.slice(currentIndex, currentIndex + itemsPerSlide);

   

    // const [activeTab, setActiveTab] = useState('info');
    const [activeTab, setActiveTab] = useState('');
    const [isTabOpen, setIsTabOpen] = useState(false);

    const handleOpenTab = (tab) => {
        setActiveTab(tab); 
        setIsTabOpen(true); 
    };

    const handleCloseTab = () => {
        setIsTabOpen(false); 
    };

    // For Info expandable cards
    const [isAmenitiesExpanded, setIsAmenitiesExpanded] = useState(false);
    const [isAboutExpanded, setIsAboutExpanded] = useState(false);

    useEffect(() =>{
        Aos.init({duration: 2000})
    }, []);

    const hotel = hotels.find(hotel => hotel.id === parseInt(id));

    if (!hotel) return <h2>Hotel not found</h2>;

    return (
        <div className="hotelDetails">
            <div data-aos="fade-up" className="SearchBar"><SearchBar /></div>
            
            {/* Top Card */}
            <div data-aos="fade-up" className="hotelCard">
                {/* Left Section - Image */}
                <div className="hotelImage" onClick={(e) => {
                        e.stopPropagation(); 
                        handleOpenTab('photos');
                    }}>
                    <img src={hotel.imgSrc} alt={hotel.destTitle} />
                </div>

                {/* Middle Section - Details */}
                <div className="hotelInfo">
                    <h2 onClick={(e) => {
                            e.stopPropagation();
                            handleOpenTab('info');
                        }}>{hotel.destTitle}</h2>
                    <div className="hotelType flex">
                        <MdOutlineHotelClass className='icon'/><p> {hotel.type}</p>  
                    </div>
                    <p>{hotel.overviewTitle}</p>
                    <p>{hotel.distance} km to City Centre</p>
                    <p className="hotelRating" onClick={(e) => {
                            e.stopPropagation();
                            handleOpenTab('reviews');
                        }}>{hotel.ratings} ★ ( reviews)</p>
                </div>

                {/* Right Section - Price */}
                <div className="hotelPrice">
                    <p className="priceInfo">From <strong>₹ 2,234{hotel.price}</strong></p>
                    <button onClick={() => handleCardClick(id)} className="seePricesBtn btn">Reserve</button>
                </div>
            </div>

            {/* Tabbed Interface */}
            {isTabOpen && (
            <div className="tabContainer">
                <div className="tabs">
                    <button 
                        className={activeTab === 'info' ? 'active' : ''}
                        onClick={() => setActiveTab('info')}
                    >
                        Info
                    </button>
                    <button 
                        className={activeTab === 'photos' ? 'active' : ''}
                        onClick={() => setActiveTab('photos')}
                    >
                        Photos
                    </button>
                    <button 
                        className={activeTab === 'reviews' ? 'active' : ''}
                        onClick={() => setActiveTab('reviews')}
                    >
                        Reviews
                    </button>
                    <button className='closeContainer' onClick={handleCloseTab}><IoMdClose className='icon'/></button>
                </div>

                <div className="tabContent">
                    {activeTab === 'info' && (
                        <div className="infoTab">
                            <h3>Good to Know</h3>
                            <div className='carousel'>
                                {/* Left Arrow */}
                                {currentIndex > 0 && (
                                    <button className="arrow left" onClick={handlePrevAmenities}>
                                       <MdKeyboardArrowLeft />
                                    </button>
                                )}

                                {/* Visible Amenities */}
                                <div className="amenities">
                                    {visibleAmenities.map((amenity, index) => (
                                        <div key={index} className="card">
                                            <small>{amenity.Type}</small>
                                            <h4>{amenity.Title}</h4>
                                            <p>{amenity.Desc}</p>
                                        </div>
                                    ))}
                                </div>

                                 {/* Right Arrow */}
                                 {currentIndex + itemsPerSlide < amenities.length && (
                                    <button className="arrow right" onClick={handleNextAmenities}><MdKeyboardArrowRight/></button>
                                )}

                            </div>

                            <div className="expandableCards">
                                {/* Top Amenities Card */}
                                <div className="card">
                                    <h4>Top Amenities</h4>
                                    <div className="amenitiesList">
                                        <p><CiWifiOn /> Free WiFi</p>
                                        <p><CiParking1 /> Parking</p>
                                        <p><TbAirConditioning /> A/C</p>
                                        <p><IoRestaurantOutline /> Restaurant</p>
                                    </div>
                                    {isAmenitiesExpanded ? (
                                        <div className="expandedContent">
                                            <div className='amenitiesCategories'>
                                                {/* Property Amenities */}
                                                <div className="amenitiesCategory">
                                                    <h5>Property amenities</h5>
                                                    <ul>
                                                    {top_amenities.property.map((property, index) => (
                                                        <li key={index}>{property}</li>
                                                    ))}
                                                    </ul>
                                                </div>

                                                 {/* Room Amenities */}
                                                <div className="amenitiesCategory">
                                                    <h5>Room amenities</h5>
                                                    {top_amenities.room.map((room, index) => (
                                                        <li key={index}>{room}</li>
                                                    ))}
                                                </div>
                                                <div className="amenitiesCategory">
                                                    <h5>Accessibility</h5>
                                                    {top_amenities.accessibility.map((accessibility, index) => (
                                                        <li key={index}>{accessibility}</li>
                                                    ))}
                                                </div>
                                            </div>
                                            <button className="toggleBtn" onClick={() => setIsAmenitiesExpanded(false)}>Hide all amenities <MdKeyboardArrowUp /></button>
                                        </div>
                                    ) : (
                                        <button className="toggleBtn flex" onClick={() => setIsAmenitiesExpanded(true)}>Show all amenities <MdKeyboardArrowDown /></button>
                                    )}
                                </div>

                                {/* About Section Card */}
                                <div className="card">
                                    <h4>About Gugal Residency Mahabaleshwar</h4>
                                    <p>
                                    Gugal Residency Mahabaleshwar is a family-friendly budget property outside of Mahabaleshwar. The hotel features spacious rooms with balconies or terraces and lovely views of the nearby mountains. Family rooms and deluxe rooms are cleaned daily and feature satellite television, complimentary bottled water, and separate seating and dining areas. Guests can relax in the hotel garden or take in the views from the outside terrace. Open air meeting/event facilities can be booked, while indoor and outdoor games are on offer. On-site parking, complimentary Wi-Fi, luggage storage and laundry facilities are some of the other amenities available. 
                                    </p>
                                    {isAboutExpanded ? (
                                        <div className="expandedContent">
                                            <p>
                                            There is a kitchen on site and meals are served during set times. Private dining and room service are available. Lingmala Pure Veg Restaurant is within a short walk. Scenic natural features abound in the area around Gugal Residency Mahabaleshwar. Popular nearby sites include Venna Lake, Elphinstone Point, and Parsi Point, all within ten kilometres of the hotel. Meanwhile, Mapro Garden is less than four kilometres away.
                                            </p>
                                            <h5>Arrival / Departure</h5>
                                            <p>Check in: 12:00</p>
                                            <p>Check out: 11:00</p>
                                            <h5>Contact</h5>
                                            <p>Mahabaleshwar Panchgani Road, Metgutad Village, Near Ganesh Temple,  412806,  Mahabaleshwar,  India</p>
                                            <p>Telephone: +91 8097809705</p>
                                            <div className="mapCard">
                                                <h5>Location</h5>
                                                <Map />
                                                {/* <iframe
                                                    title="Hotel Location"
                                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.7110659198055!2d73.65567847617446!3d17.92492028232464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc230df312a59e1%3A0x1e86a5caba3a50f9!2sMahabaleshwar%20Temple!5e0!3m2!1sen!2sin!4v1690200000000!5m2!1sen!2sin"
                                                    width="100%"
                                                    height="300"
                                                    style={{
                                                        border: "0",
                                                        borderRadius: "8px",
                                                    }}
                                                    allowFullScreen
                                                    loading="lazy"
                                                    referrerPolicy="no-referrer-when-downgrade"
                                                ></iframe> */}
                                            </div>
                                            
                                            <button className="toggleBtn" onClick={() => setIsAboutExpanded(false)}>Show less <MdKeyboardArrowUp /></button>
                                        </div>
                                    ) : (
                                        <button className="toggleBtn" onClick={() => setIsAboutExpanded(true)}>Show all info <MdKeyboardArrowDown /></button>
                                    )}
                                </div>
                            </div>


                            <ul>
                                {/* {hotel.amenities.map((amenity, index) => (
                                    <li key={index}>{amenity}</li>
                                ))} */}
                            </ul>
                        </div>
                    )}
                    {activeTab === 'photos' && (
                        <div className="photosTab">
                            <PhotosSection photos={photos}/>

                           
                            {/* {hotel.photos.map((photo, index) => (
                                <img key={index} src={photo} alt={`Hotel Photo ${index + 1}`} />
                            ))} */}
                        </div>
                    )}
                    {activeTab === 'reviews' && (
                        <div className="reviewsTab">

                            {/* Overall Review */}
                            <h3 className="overallReview">9.8 Excellent</h3>

                            {/* Guest Reviews Title */}
                            <h4 className="guestReviewsTitle">Guest Reviews</h4>

                            {/* Individual Review Cards */}
                            <div className="reviewCards">
                                {/* Example card 1 */}
                                <div className="reviewCard">
                                    <div className="reviewContent">
                                        <h4 className="reviewScore">10/10 Exceptional</h4>
                                        <p className="reviewDesc">
                                            Amazing resort and a beautiful location. Very helpful staff.
                                        </p>
                                    </div>
                                    <div className="reviewDate">25 Nov 2024</div>
                                </div>

                                {/* Example card 2 */}
                                <div className="reviewCard">
                                    <div className="reviewContent">
                                        <h4 className="reviewScore">9/10 Wonderful</h4>
                                        <p className="reviewDesc">
                                            Great experience overall. The food could have been better.
                                        </p>
                                    </div>
                                    <div className="reviewDate">24 Nov 2024</div>
                                </div>

                                {/* Add more cards as needed */}
                            </div>

                            {/* {hotel.reviews.map((review, index) => (
                                <div key={index} className="review">
                                    <p><strong>{review.user}:</strong> {review.comment}</p>
                                </div>
                            ))} */}
                        </div>
                    )}
                </div>
            </div>
            )}

            {/* Pagination Controls */}
            <div data-aos="fade-up" className="pagination">
                <button onClick={handlePrev} disabled={currentPage === 1}>Previous</button>
                <span>Page {currentPage} of {totalPages}</span>
                <button onClick={handleNext} disabled={currentPage === totalPages}>Next</button>
            </div>


        </div>
    );
};

export default HotelDetails;
