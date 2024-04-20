import {Component} from 'react'
import { IoChatbubbles } from "react-icons/io5";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { FaUserDoctor } from "react-icons/fa6";
import { FaFilePrescription } from "react-icons/fa6"
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header';
import './index.css'

class HomePage extends Component{
    render(){
        return(
            <div className='home-container'>
                <div className='header-container'>
                    <Header/>
                    <div className='image-heading-container'>
                        <p className='welcome'>Namaste, Welcome to Amrutam</p>
                        <h1 className='main-heading'>Step into Holistic Healing with Ayurveda <br/>  Book Consultation with certified Experts.</h1>
                        <p className='des'>Dive into the world of ayurveda and Experience Personalized Health Solutions and Holistic Guidance from Trusted Ayurvedic Doctors Anytime, anywhere.</p>
                        <button className='book-button'>Book an Appointment</button>
                    </div>
                    <div className='different-icons-details'>
                        <div className='icon-des-container'>
                            <div className='icon-container'>
                             <IoChatbubbles size={30}/>
                            </div>
                            <p className='des'>Convenient Online & <br/> In-Clinic Consultations</p>
                        </div>
                        <div className='icon-des-container'>
                            <div className='icon-container'>
                             <IoShieldCheckmarkSharp size={30}/>
                            </div>
                            <p className='des'>Safe And Effective <br/> Treatment</p>
                        </div>
                        <div className='icon-des-container'>
                            <div className='icon-container'>
                             <FaUserDoctor size={30}/>
                            </div>
                            <p className='des'>Experience Ayurvedic <br/> Practitioners</p>
                        </div>
                        <div className='icon-des-container'>
                            <div className='icon-container'>
                             <FaFilePrescription size={30}/>
                            </div>
                            <p className='des'>Personalized Treatment <br/> Plans & Guidance</p>
                        </div>
                    </div>
                </div>


                <div className='different-treatments-container'>
                    <h1 className='heading'>Discover Ayurveda’s magic with us</h1>
                    <p className='description'>Ayurvedic treatment aims to balance your body and mind, bringing harmony and vitality. It's like a journey to better health using ancient wisdom,<br/> a totally effective approach for a better life.</p>
                    <div className='treatment-image-container'>
                        <div className='treatment-container'>
                            <div className='treaments'>
                                <div className='heading-des-container'>
                                    <h1 className='treat-name'>Personalized Wellness</h1>
                                    <p className='treat-des'>Get treatments made just for you based on your individual doshes </p>
                                </div>
                                <img src='http://surl.li/stmng' className='treat-image' alt='img'/>
                             </div>
                            <div className='treaments'>
                                <div className='heading-des-container'>
                                    <h1 className='treat-name'>Focus on prevention</h1>
                                    <p className='treat-des'>Stop problems even before they start </p>
                                </div>
                                <img src='http://surl.li/stmqf' className='treat-image' alt='img'/>
                            </div>
                            <div className='treaments'>
                                <div className='heading-des-container'>
                                    <h1 className='treat-name'>Mind-Body Connection</h1>
                                    <p className='treat-des'>Keep your mind and body in sync for a happy life</p>
                                </div>
                                <img src='http://surl.li/stmrj' className='treat-image' alt='img'/>
                            </div>
                        </div>
                        <img src='https://thewholeu.uw.edu/wp-content/uploads/yoga-gettyimages-1142820079-promo-copy.jpg' className='yoga-image' alt='img'/>
                        <div className='treatment-container'>
                            <div className='treaments'>
                                <div className='heading-des-container'>
                                    <h1 className='treat-name'>Holistic Healing</h1>
                                    <p className='treat-des'>Fix the root problem for long-lasting health. </p>
                                </div>
                                <img src='https://www.shutterstock.com/image-vector/vector-illustration-hands-palm-plus-260nw-2128961594.jpg' className='treat-image' alt='img'/>
                             </div>
                            <div className='treaments'>
                                <div className='heading-des-container'>
                                    <h1 className='treat-name'>Natural Remedies</h1>
                                    <p className='treat-des'>Using herbs and natural therapies for healing.</p>
                                </div>
                                <img src='http://surl.li/stmtj' className='treat-image' alt='img'/>
                            </div>
                            <div className='treaments'>
                                <div className='heading-des-container'>
                                    <h1 className='treat-name'>Boosting immunity</h1>
                                    <p className='treat-des'>Stay strong and healthy for life, not just for today.</p>
                                </div>
                                <img src='http://surl.li/stmtt' className='treat-image' alt='img'/>
                            </div>
                        </div>
                    </div>

                <div className='mobile-treatment-image-container'>
                    <img src='https://thewholeu.uw.edu/wp-content/uploads/yoga-gettyimages-1142820079-promo-copy.jpg' className='yoga-image' alt='img'/>
                    <div className='mobile-treatment-container'>
                        <div className='treatment-container'>
                            <div className='treaments'>
                            <img src='http://surl.li/stmng' className='treat-image' alt='img'/>
                                    <h1 className='treat-name'>Personalized Wellness</h1>
                                    <p className='treat-des'>Get treatments made just for you based on your individual doshes </p>
                             </div>
                            <div className='treaments'>
                            <img src='http://surl.li/stmqf' className='treat-image' alt='img'/>
                                    <h1 className='treat-name'>Focus on prevention</h1>
                                    <p className='treat-des'>Stop problems even before they start </p>
                            </div>
                            <div className='treaments'>
                            <img src='http://surl.li/stmrj' className='treat-image' alt='img'/>
                                    <h1 className='treat-name'>Mind-Body Connection</h1>
                                    <p className='treat-des'>Keep your mind and body in sync for a happy life</p>
                                
                               
                            </div>
                        </div>
                        <div className='treatment-container'>
                            <div className='treaments'>
                            <img src='https://www.shutterstock.com/image-vector/vector-illustration-hands-palm-plus-260nw-2128961594.jpg' className='treat-image' alt='img'/>
                                    <h1 className='treat-name'>Holistic Healing</h1>
                                    <p className='treat-des'>Fix the root problem for long-lasting health. </p>
                             </div>
                            <div className='treaments'>
                            <img src='http://surl.li/stmtj' className='treat-image' alt='img'/>
                                    <h1 className='treat-name'>Natural Remedies</h1>
                                    <p className='treat-des'>Using herbs and natural therapies for healing.</p>
                            </div>
                            <div className='treaments'>
                            <img src='http://surl.li/stmtt' className='treat-image' alt='img'/>
                                    <h1 className='treat-name'>Boosting immunity</h1>
                                    <p className='treat-des'>Stay strong and healthy for life, not just for today.</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

                <div className='consultations-container'>
                    <h1 className='heading'>What sets Ayurvedic consultations apart?</h1>
                    <div className='different-consultations'>
                        <div className='des-consult-container'>
                            <h1 className='consult-head'>स्वस्थस्य स्वास्थ्य रक्षणं, आतुरस्य विकार प्रशमनं ।"</h1>
                            <p className='consult-des'>[ Meaning: The Goal of Ayurveda is to maintain the health of a healthy person and to cure the disease of a diseased person. ]</p>
                        </div>
                        <img src='http://surl.li/stnka' className='consult-image' alt='img'/>
                        <div className='des-consult-container'>
                            <h1 className='consult-head'>precise diagnosis</h1>
                            <p className='consult-des'>Ayurveda's core principles revolve around Vata, Pitta, and Kapha doshas, guiding you with precise diagnosis and treatment.</p>
                        </div>
                        <div className='des-consult-container'>
                            <h1 className='consult-head'>Zero side-effects</h1>
                            <p className='consult-des'>Ayurvedic treatments are devoid of chemicals, and are based completely on natural herbs.</p>
                        </div>
                        <img src='http://surl.li/stnll' className='consult-image' alt='img'/>
                        <div className='des-consult-container'>
                            <h1 className='consult-head'>Individual Treatment</h1>
                            <p className='consult-des'>all Treatments are personalized based on a person's unique constitution and health concerns.</p>
                        </div>
                        <img src='http://surl.li/stnly' className='consult-image' alt='img'/>
                    </div>
                </div>
                
                <div className='book-consultation-container'>
                    <h1 className='book-heading'>Ready to restore harmony in your mind, body and spirit?</h1>
                    <button type='button' className='book-button'>Book a consultation</button>
                </div>

            {/* OUR AYURVEDA APROACH */}

                <div className='approaches-container'>
                    <h1 className='heading'>Our ayurvedic approach</h1>
                    <p className='description'>At Amrutam we follow a unique and personalized approach to healing. Our expert practitioners begin each treatment process by conducting a <br/>thorough analysis of the patient’s body type, medical history, and current health conditions.</p>
                    <div className='different-approches'>
                        <div className='approch-container'>
                            <h1 className='number'>1</h1>
                            <p className='approach-heading'>Make Appointment</p>
                            <p className='approach-des'>You must make an appointment in advance, to choose the service and date.</p>
                        </div>
                        <div className='approch-container'>
                            <h1 className='number'>2</h1>
                            <p className='approach-heading'>Consultations</p>
                            <p className='approach-des'>The next stage involves a thorough consultation with an Ayurveda practitioner.</p>
                        </div>
                        <div className='approch-container'>
                            <h1 className='number'>3</h1>
                            <p className='approach-heading'>Treatment Planning</p>
                            <p className='approach-des'>The Ayurvedic practitioner creates a personalized treatment plan for you</p>
                        </div>
                        <div className='approch-container'>
                            <h1 className='number'>4</h1>
                            <p className='approach-heading'>Maintenance</p>
                            <p className='approach-des'>These visits allow for assessment of progress, adjustments to the treatment.</p>
                        </div>
                    </div>
                </div>

                {/* mobile view our ayurveda approcah */}

                <div className='mobile-view-approach-container'>
                    <div className='mobile-different-approches'>
                    <Carousel >
                        <Carousel.Item >
                        <div className='approch-container'>
                            <h1 className='number'>1</h1>
                            <p className='approach-heading'>Make Appointment</p>
                            <p className='approach-des'>You must make an appointment in advance, to choose the service and date.</p>
                        </div>
                        </Carousel.Item>
                        <Carousel.Item>
                        <div className='approch-container'>
                            <h1 className='number'>2</h1>
                            <p className='approach-heading'>Consultations</p>
                            <p className='approach-des'>The next stage involves a thorough consultation with an Ayurveda practitioner.</p>
                        </div>
                        </Carousel.Item>
                        <Carousel.Item>
                        <div className='approch-container'>
                            <h1 className='number'>3</h1>
                            <p className='approach-heading'>Treatment Planning</p>
                            <p className='approach-des'>The Ayurvedic practitioner creates a personalized treatment plan for you</p>
                        </div>
                        </Carousel.Item>
                        <Carousel.Item>
                        <div className='approch-container'>
                            <h1 className='number'>4</h1>
                            <p className='approach-heading'>Maintenance</p>
                            <p className='approach-des'>These visits allow for assessment of progress, adjustments to the treatment.</p>
                        </div>
                        </Carousel.Item>
                    </Carousel>
                    </div>
            </div>

                {/* stories customes container */}

                <div className='stories-customers-container'>
                    <h1 className='heading'>STORIES FROM OUR VALUED CUSTOMERS!</h1>
                    <div className='stories-container'>
                        <div className='story-container'>
                            <p className='consulted'>Consulted for Skin</p>
                            <div className='avatar-container'>
                                <img src='http://surl.li/sttsu' className='avatar' alt='img'/>
                                <div className='name-place-container'>
                                    <p className='name'>Sophie Moore</p>
                                    <p className='location'>Chennai</p>
                                </div>
                                <p className='date'>07/12/2023</p>
                            </div>
                            <img src='http://surl.li/sttsf' className='ratingImg' alt='img'/>
                            <h1 className='quote'>"One of a kind service"</h1>
                            <p className='story-des'>Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.</p>
                        </div>
                        <div className='story-container'>
                            <p className='consulted'>Consulted for hair</p>
                            <div className='avatar-container'>
                                <img src='http://surl.li/sttsu' className='avatar' alt='img'/>
                                <div className='name-place-container'>
                                    <p className='name'>Sophie Moore</p>
                                    <p className='location'>Chennai</p>
                                </div>
                                <p className='date'>07/12/2023</p>
                            </div>
                            <img src='http://surl.li/sttsf' className='ratingImg' alt='img'/>
                            <h1 className='quote'>"One of a kind service"</h1>
                            <p className='story-des'>Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.</p>
                        </div>
                        <div className='story-container'>
                            <p className='consulted'>Consulted for body</p>
                            <div className='avatar-container'>
                                <img src='http://surl.li/sttsu' className='avatar' alt='img'/>
                                <div className='name-place-container'>
                                    <p className='name'>Sophie Moore</p>
                                    <p className='location'>Chennai</p>
                                </div>
                                <p className='date'>07/12/2023</p>
                            </div>
                            <img src='http://surl.li/sttsf' className='ratingImg' alt='img'/>
                            <h1 className='quote'>"One of a kind service"</h1>
                            <p className='story-des'>Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.</p>
                        </div>
                    </div>
                </div>

                 {/*mobile view stories customes container */}

                 <div className='mobiles-stories-customers-container'>
                    <h1 className='heading'>STORIES FROM OUR VALUED CUSTOMERS!</h1>
                    <div className='mobiles-stories-container'>
                    <Carousel >
                        <Carousel.Item >
                        <div className='story-container'>
                            <p className='consulted'>Consulted for Skin</p>
                            <div className='avatar-container'>
                                <img src='http://surl.li/sttsu' className='avatar' alt='img'/>
                                <div className='name-place-container'>
                                    <p className='name'>Sophie Moore</p>
                                    <p className='location'>Chennai</p>
                                </div>
                                <p className='date'>07/12/2023</p>
                            </div>
                            <img src='http://surl.li/sttsf' className='ratingImg' alt='img'/>
                            <h1 className='quote'>"One of a kind service"</h1>
                            <p className='story-des'>Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.</p>
                        </div>
                        </Carousel.Item>
                        <Carousel.Item>
                        <div className='story-container'>
                            <p className='consulted'>Consulted for hair</p>
                            <div className='avatar-container'>
                                <img src='http://surl.li/sttsu' className='avatar' alt='img'/>
                                <div className='name-place-container'>
                                    <p className='name'>Sophie Moore</p>
                                    <p className='location'>Chennai</p>
                                </div>
                                <p className='date'>07/12/2023</p>
                            </div>
                            <img src='http://surl.li/sttsf' className='ratingImg' alt='img'/>
                            <h1 className='quote'>"One of a kind service"</h1>
                            <p className='story-des'>Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.</p>
                        </div>
                        </Carousel.Item>
                        <Carousel.Item>
                        <div className='story-container'>
                            <p className='consulted'>Consulted for body</p>
                            <div className='avatar-container'>
                                <img src='http://surl.li/sttsu' className='avatar' alt='img'/>
                                <div className='name-place-container'>
                                    <p className='name'>Sophie Moore</p>
                                    <p className='location'>Chennai</p>
                                </div>
                                <p className='date'>07/12/2023</p>
                            </div>
                            <img src='http://surl.li/sttsf' className='ratingImg' alt='img'/>
                            <h1 className='quote'>"One of a kind service"</h1>
                            <p className='story-des'>Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.</p>
                        </div>
                        </Carousel.Item>
                    </Carousel>
                    </div>
                </div>

        {/* ayurveda experts container*/}
                 
                <div className='ayurveda-experts-container'>
                    <h1 className='heading'>Meet our Ayurveda experts</h1>
                    <div className='experts-container'>
                        <BsFillArrowLeftCircleFill size={40} className='icons-arrow'/>
                        <div className='expert-cont'>
                            <img src='http://surl.li/sttsu' className='image-avatar' alt='img'/>
                            <h1 className='expert-name'>Dr. Vaishali sharma</h1>
                            <p className='details'>Ayurveda Practitioners (BAMS, MD)</p>
                            <p className='details'>25 years of experience</p>
                            <p className='details'>Skin Specialist</p>
                            <botton className='book-session-button'>Book a session</botton>
                        </div>
                        <div className='expert-cont'>
                            <img src='http://surl.li/sttsu' className='image-avatar' alt='img'/>
                            <h1 className='expert-name'>Dr. Vaishali sharma</h1>
                            <p className='details'>Ayurveda Practitioners (BAMS, MD)</p>
                            <p className='details'>25 years of experience</p>
                            <p className='details'>Skin Specialist</p>
                            <botton className='book-session-button'>Book a session</botton>
                        </div>
                        <div className='expert-cont'>
                            <img src='http://surl.li/sttsu' className='image-avatar' alt='img'/>
                            <h1 className='expert-name'>Dr. Vaishali sharma</h1>
                            <p className='details'>Ayurveda Practitioners (BAMS, MD)</p>
                            <p className='details'>25 years of experience</p>
                            <p className='details'>Skin Specialist</p>
                            <botton className='book-session-button'>Book a session</botton>
                        </div>
                        <BsArrowRightCircleFill size={40}/>
                    </div>
                    <button className='expertsBtn'>Find more experts</button>
                </div>

        {/* mobile ayurveda expert container */}

        <div className='mobile-ayurveda-experts-container'>
                    <h1 className='heading'>Meet our Ayurveda experts</h1>
                    <div className='experts-container'>
                    <Carousel >
                        <Carousel.Item >
                        <div className='expert-cont'>
                            <img src='http://surl.li/sttsu' className='image-avatar' alt='img'/>
                            <h1 className='expert-name'>Dr. Vaishali sharma</h1>
                            <p className='details'>Ayurveda Practitioners (BAMS, MD)</p>
                            <p className='details'>25 years of experience</p>
                            <p className='details'>Skin Specialist</p>
                            <botton className='book-session-button'>Book a session</botton>
                        </div>
                        </Carousel.Item>
                        <Carousel.Item>
                        <div className='expert-cont'>
                            <img src='http://surl.li/sttsu' className='image-avatar' alt='img'/>
                            <h1 className='expert-name'>Dr. Vaishali sharma</h1>
                            <p className='details'>Ayurveda Practitioners (BAMS, MD)</p>
                            <p className='details'>25 years of experience</p>
                            <p className='details'>Skin Specialist</p>
                            <botton className='book-session-button'>Book a session</botton>
                        </div>
                        </Carousel.Item>
                        <Carousel.Item>
                        <div className='expert-cont'>
                            <img src='http://surl.li/sttsu' className='image-avatar' alt='img'/>
                            <h1 className='expert-name'>Dr. Vaishali sharma</h1>
                            <p className='details'>Ayurveda Practitioners (BAMS, MD)</p>
                            <p className='details'>25 years of experience</p>
                            <p className='details'>Skin Specialist</p>
                            <botton className='book-session-button'>Book a session</botton>
                        </div>
                        </Carousel.Item>
                        
                    </Carousel> 
                    </div>
                    <button className='expertsBtn'>Find more experts</button>
                </div>

                {/* about details container */}

                <div className='about-details-container'>
                    <div className='details-container'>
                        <h1 className='app-name'>Amrutam home App</h1>
                        <p className='app-des'>The Amrutam Home App is your one-stop app for all things Ayurveda! Apart from mimicking the significant characteristics of our website, this app offers a wide range of additional features.</p>
                        <p className='app-quote'>Get a diet & lifestyle consultation with ayurvedic experts across the globe</p>
                        <h1 className='app-get'>Get The App Now</h1>
                        <div className='store-container'>
                            <img src='http://surl.li/stugn' className='storesImg' alt='img'/>
                            <img src='http://surl.li/stuhc' className='storesImg' alt='img'/>
                        </div>
                    </div>
                    <img src='http://surl.li/stufx' className='phone-img' alt='img'/>
                </div>

                <div className='mobile-view-about-details-container'>
                    <div className='details-container'>
                        <h1 className='app-name'>Amrutam home App</h1>
                        <p className='app-des'>The Amrutam Home App is your one-stop app for all things Ayurveda! Apart from mimicking the significant characteristics of our website, this app offers a wide range of additional features.</p>
                        <img src='http://surl.li/stufx' className='phone-img' alt='img'/>
                        <p className='app-quote'>Get a diet & lifestyle consultation with ayurvedic experts across the globe</p>
                        <h1 className='app-get'>Get The App Now</h1>
                        <img src='http://surl.li/stugn' className='storesImg' alt='img'/>
                        <img src='http://surl.li/stuhc' className='storesImg' alt='img'/>
                    </div>
                </div>

                <div className='contact-information-container'>
                    <p className='information'>Information</p>
                    <p className='contact-details'>About Us</p>
                    <p className='contact-details'>Terms and Conditions</p>
                    <p className='contact-details'> Privacy Policy </p>
                    <p className='contact-details'>Privacy Policy for Mobile Apps </p>
                    <p className='contact-details'>Shipping and Returns Policy </p>
                    <p className='contact-details'>International Delivery </p>
                    <p className='contact-details'>For Businesses, Hotels and Resorts</p>
                </div>


                

            </div>
        )
    }
}
export default HomePage