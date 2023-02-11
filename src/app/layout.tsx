import './globals.css'
import { Inter, Eczar } from '@next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'optional'
})

const eczar = Eczar({
  subsets: ['latin'],
  variable: '--font-eczar',
  display: 'optional'
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={`${inter.variable} ${eczar.variable}`}>
      <head />
      <body className='p-2'>{children}</body>
    </html>
  )
}
