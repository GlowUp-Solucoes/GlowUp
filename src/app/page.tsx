import Image from 'next/image'
import styles from './page.module.css'
import logo from '../media/logo/Logo.svg'
import Form from '@/components/form'

export default function Home() {

  return (
    <>
    <div className={styles.utilityMenu}>
      <p className={styles.utilityText}>BEM VINDO AO NOSSO  SITE - APROVEITE DESCONTOS DE <span className={styles.utilityTextAttetion}>30%</span> EM TODO OS SERVIÇOS</p>
    </div>
    <header className={styles.header}>
      <div className={styles.imageContainer}>
        <Image
          src={logo}
          alt='Logo'
          fill
          sizes='(max-width: 66px) 100vw, 60px'
          priority
        />
      </div>
      <nav className={styles.navBar}>
        <a href="">Inicio</a>
        <a href="">Contato</a>
      </nav>
    </header>
    <main className={styles.main}>
      <Form/>
    </main>
    </>
  )
}