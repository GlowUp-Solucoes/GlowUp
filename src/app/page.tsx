import Image from 'next/image'
import styles from './page.module.css'
import Logo from '../media/logo/Logo.svg'
import Form from '@/components/form'
import ValidateIcon from '../media/icons/validate.svg'
import PersonIcon from '../media/icons/personIcon.svg'
import TechIcon from '../media/icons/techIcon.svg'
import SuportIcon from '../media/icons/suportIcon.svg'
import { Oswald, Space_Grotesk } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'

const spaceGrotesk = Space_Grotesk({ 
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-family-main'
})
  
const oswald = Oswald({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-family-secondary'
})

export default function Home() {
  return (
    <>
    <Header/>
    <main className={styles.main}>
      <div className={styles.containerPrymary}>
        <div className={styles.validateParagraph}>
        <Image
          src={ValidateIcon}
          alt='validate'
          width={24}
          height={24}
          sizes='(max-width: 24px) 100vw, 20px'
          priority
        />
          <p>Metodo válidado</p>
        </div>
        <p className={styles.title}>Sites otimizados para alta conversão</p>
        <span className={styles.subTitle}>Somos um time especializado em ferramentas profissionais para construção de sites para o mercado digital.</span>
        <span className={styles.subTitle}>Controle seus anúncios e rastreie seu público de maneira profissional.</span>
        <a href="#formId" className={styles.contactButton} style={spaceGrotesk.style}>CONTATO</a>
      </div>
      <div className={styles.containerSecondary}>
        <p className={styles.subTitle2}>O que você receberá com nossos serviços?</p>
        <div className={styles.insider}>
          <div className={styles.insiderContainer}>
            <Image
            src={TechIcon}
            alt='Tecnologia'
            width={24}
            height={24}
            sizes='(max-width: 24px) 100vw, 20px'
            priority
            />
            <p className={styles.insiderContainerTitle}>Tecnologia</p>
            <span className={styles.insiderSpan}>Site construído com as tecnologias mais atuais do mercado, segurança, velocidade e alta conversão.</span>
          </div>
          <div className={styles.separator}></div>
          <div className={styles.insiderContainer}>
            <Image
            src={SuportIcon}
            alt='Suporte'
            width={24}
            height={24}
            sizes='(max-width: 24px) 100vw, 20px'
            priority
            />
            <p className={styles.insiderContainerTitle}>Suporte Dedicado</p>
            <span className={styles.insiderSpan}>Você terá acesso a todo nosso time. Vamos te auxiliar no que for preciso para que você alcance seus objetivos financeiros no mercado digital.</span>
          </div>
          <div className={styles.separator}></div>
          <div className={styles.insiderContainer}>
            <Image
            src={PersonIcon}
            alt='Personalidade'
            width={24}
            height={24}
            sizes='(max-width: 24px) 100vw, 20px'
            priority
            />
            <p className={styles.insiderContainerTitle}>Personalidade</p>
            <span className={styles.insiderSpan}>Sem páginas prontas, tudo construído do zero para que você tenha uma página única no mercado.</span>
          </div>
        </div>
      </div>
      <Form/>
    </main>
    <Footer/>
    </>
  )
}