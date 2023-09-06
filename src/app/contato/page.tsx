import Image from 'next/image'
import styles from './page.module.css'
import Form from '@/components/form'
import ValidateIcon from '../../media/icons/validate.svg'
import PersonIcon from '../../media/icons/personIcon.svg'
import TechIcon from '../../media/icons/techIcon.svg'
import SuportIcon from '../../media/icons/suportIcon.svg'
import { Oswald, Space_Grotesk } from 'next/font/google'


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

export default function Contact(){
    return(
        <>
        <main className={styles.main}>
          <div className={styles.containerPrymary}>
              <div className={styles.validateParagraph}>
                  <p>Contato</p>
              </div>
              <p className={styles.title}>Preencha seus dados abaixo</p>
              <span className={styles.subTitle}>Iremos retornar o seu contato em no máximo 24hrs</span>
          </div>
          <Form/>
        </main>
        </>
    )
}