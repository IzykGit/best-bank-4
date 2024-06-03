import React from 'react'

import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <section className={styles.nav_section}>
        <a href='/'>Best Bank&trade;</a>

        <nav className={styles.navbar}>
            <a>Insurance</a>
            <a>Business</a>
            <a>Cards</a>
            <a>Automotive</a>
        </nav>
    </section>
  )
}

export default Navbar