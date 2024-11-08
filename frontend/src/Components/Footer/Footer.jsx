import React, {useEffect} from 'react'
import './footer.css'
import { FiSend } from "react-icons/fi";
import video2 from '../../Assets/tree_video.mp4'
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import { FaRegCopyright } from "react-icons/fa";
import Aos, { init } from 'aos';
import 'aos/dist/aos.css'

const Footer = () => {
    useEffect(() =>{
        Aos.init({duration: 2000})
    }, [])

    return (
        <section className='footer'>
            <div className="videoDiv">
                <video src={video2} loop autoPlay muted type="video/mp4"></video>
            </div>
            <div className="secContent container">
                <div className="contactDiv flex">
                    <div data-aos="fade-up" className="text">
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel with us</h2>
                    </div>

                    <div className="inputDiv flex">
                        <input data-aos="fade-up" type='text' placeholder='Enter Email Address'/>
                        <button data-aos="fade-up" className='btn flex' type='submit'>
                            SEND <FiSend className="icon"/>
                        </button>
                    </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div data-aos="fade-up" className="logoDiv">
                            <a href="#" className='logo flex'>
                            <MdOutlineTravelExplore className='icon'/>
                             Travel.
                            </a>
                        </div>

                        <div data-aos="fade-up" className="footerParagraph">
                        Lorem ipsum dolor sit amet” is a Latin-like placeholder text used in graphic design and publishing to demonstrate the visual form of a document or typeface. It is also known as lipsum
                        </div>

                        <div data-aos="fade-up" className="footerSocials flex">
                            <AiOutlineTwitter className='icon'/>
                            <AiFillYoutube className='icon'/>
                            <AiFillInstagram className='icon'/>
                            <FaTripadvisor className='icon'/>
                        </div>
                    </div>

                    <div className="footerLinks grid">
                        <div data-aos="fade-up" className="linkGroup">
                            <span className="groupTitle">
                                OUR AGENCY
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Services
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Agency
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Tourism
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Payment
                            </li>

                            
                        </div>
                    </div>

                    <div className="footerDiv flex">
                        <small>BEST TRAVEL WEBSITE  </small>
                        <small><FaRegCopyright className="icon"/> 2024 Travel Ltd.</small>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Footer