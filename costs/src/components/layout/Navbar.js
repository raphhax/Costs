import { Link } from "react-router-dom"
import Container from "./Container"
import styles from './Navbar.module.css'
import logo from '../../img/costs_logo.png'


function Navbar(){
    return(
        <nav class={styles.navbar}>
            <Container>
                <Link to="/">
                    <img src={logo} alt="logo"/>
                </Link>

<<<<<<< HEAD
                <ul className={styles.list}>

                    <li className={styles.item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/projects">Projetos</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/contact">Contato</Link>                        
                    </li>
                    <li className={styles.item}>
=======
                <ul class={styles.list}>

                    <li class={styles.item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li class={styles.item}>
                        <Link to="/projects">Projetos</Link>
                    </li>
                    <li class={styles.item}>
                        <Link to="/contact">Contato</Link>                        
                    </li>
                    <li class={styles.item}>
>>>>>>> e4292547d3d946ce80a7ff1a57b90549cf1f4917
                        <Link to="/company">Empresa</Link>        
                    </li>   

                </ul>  

            </Container>
        </nav>
    )
}

export default Navbar