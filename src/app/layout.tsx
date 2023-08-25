import './globals.css'
import { Space_Grotesk, Oswald } from 'next/font/google'
const spaceGrotesk = Space_Grotesk({ 
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-family-main'
})
  

export const metadata = {
  title: 'GlowUp',
  description: 'Faremos um glowup na sua empresa!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="PT-BR">
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  )
}
