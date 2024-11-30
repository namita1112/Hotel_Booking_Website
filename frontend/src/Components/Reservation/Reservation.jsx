import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './reservation.css';
import { FaCircleCheck } from "react-icons/fa6";
import { PiNumberCircleTwoFill } from "react-icons/pi";
import img from '../../Assets/hotel-view1.jpg';
import img1 from '../../Assets/hotel-view2.jpg';
import img2 from '../../Assets/hotel-swimmingpool1.jpg';
import img3 from '../../Assets/hotel-swimmingpool2.jpg';
import img4 from '../../Assets/hotel-swimmingpool3.jpg';
import img5 from '../../Assets/hotel-swimmingpool4.jpg';
import img6 from '../../Assets/hotel-bedroom1.jpg';
import img7 from '../../Assets/hotel-bedroom2.jpg';
import img8 from '../../Assets/hotel-bedroom3.jpg';

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

function ReservationPage() {
    const { id } = useParams();
    const hotel = hotels.find(hotel => hotel.id === parseInt(id));
    return (
        <div className="reservationPage">
            {/* Progress Header */}
            <div className="progressHeader">
                <div className="step active">
                    <span className='stepIcon'><FaCircleCheck /></span>
                    <span className='stepText'>Your selection</span>
                    <div className='line'></div>  
                    </div>
                <div className="step">
                    <span className='stepIcon'><PiNumberCircleTwoFill /></span>
                    <span className='stepText'>Your details</span>
                    <div className='line'></div>  
                </div>
                {/* <div className="step">Final step</div> */}
            </div>

            {/* Main Content */}
            <div className="reservationContent">
                {/* Left Section */}
                <div className="hotelDetails">
                    <h3>{hotel.destTitle}</h3>
                    <p>{hotel.overviewTitle}</p>
                    <p>{hotel.Address}</p>
                    <p>{hotel.location}</p>
                    <h4>Price: {hotel.fees}</h4>

                    <div className="bookingSummary">
                        <h4>Your booking details</h4>
                        <p><strong>Check-in:</strong> Tue 10 Dec 2024 (from {hotel.CheckIn})</p>
                        <p><strong>Check-out:</strong> Wed 11 Dec 2024 (until {hotel.CheckOut})</p>
                        <p><strong>Total length of stay:</strong> 1 night</p>
                        <p><strong>You selected:</strong> 1 room for 2 adults</p>
                    </div>
                </div>

                {/* Right Section */}
                <div className="userDetails">
                    <h3>Enter your details</h3>
                    <p className="note">Almost done! Just fill in the <strong>*</strong> required info</p>

                    <form>
                        <div className="formGroup">
                            <label>First name *</label>
                            <input type="text" required />
                        </div>
                        <div className="formGroup">
                            <label>Last name *</label>
                            <input type="text" required />
                        </div>
                        <div className="formGroup">
                            <label>Email address *</label>
                            <input type="email" required />
                        </div>
                        <div className="formGroup">
                            <label>Phone number *</label>
                            <input type="tel" required />
                        </div>
                        <button type="submit" className="submitBtn">Reserve</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ReservationPage;