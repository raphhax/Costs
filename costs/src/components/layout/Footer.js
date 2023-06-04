<<<<<<< HEAD
import styles from '../layout/Footer.module.css'

import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'



function Footer(){
    return(
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <FaFacebook/>
                </li>
                <li>
                    <FaInstagram/>
                </li>
                <li>
                    <FaLinkedin/>
                </li>
            </ul>
            <p className={styles.copy_right}><span>Costs</span> &copy; 2021</p>
        </footer>
=======
function Footer(){
    return(
        <p>Footer</p>
>>>>>>> e4292547d3d946ce80a7ff1a57b90549cf1f4917
    )
}

export default Footer