import Image from "next/image";
import styles from './index.module.css'
import Logo from '../../media/logo/Logo.svg'

export default function Header() {
    return(
    <>
    <div className={styles.utilityMenu}>
        <p className={styles.utilityText}>APROVEITE DESCONTOS DE <span className={styles.utilityTextAttetion}>30%</span> EM TODO OS SERVIÇOS</p>
    </div>
    <header className={styles.header}>
        <div className={styles.imageContainer}>
            <Image
            src={Logo}
            alt='Logo'
            fill
            sizes='(max-width: 66px) 100vw, 60px'
            priority
            />
        </div>
        <nav className={styles.navBar}>
            <a href="/">Inicio</a>
            <a href="/contato">Contato</a>
        </nav>
    </header>
    </>
    )
}