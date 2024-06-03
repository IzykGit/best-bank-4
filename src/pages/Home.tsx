import { useEffect } from 'react';
import 'aos/dist/aos.css'
import AOS from 'aos';

import Navbar from '../components/Navbar'

import styles from '../styles/Home.module.css';

import lunchMeeting from '../assets/lunch-meeting.jpg'

const Home = () => {

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true
    })
  })


  return (
    <>
    <Navbar />
    <main>
      <section>
        <div className={styles.fold}> 
            <img src={lunchMeeting} alt=''/>
            
            <h1 data-aos="fade-down">Welcome To Best Bank</h1>
            <p data-aos="fade-down" data-aos-delay={100}>At Best Bank, we take pride in being more than just a bank; we are your dedicated financial partner on the journey to achieving your dreams.</p>
            
            <p data-aos="fade-down" data-aos-delay={200}><a className={styles.link} href='/'>Login</a> or <a className={styles.link} href='/'>Sign Up</a> to get started</p>
        </div>
      </section>

      <div className={styles.spacer}></div>

      <section className={styles.info_section}>
        <div>

        </div>
      </section>



    </main>
    </>
  )
}

export default Home