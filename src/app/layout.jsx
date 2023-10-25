import { Inter } from 'next/font/google'
import './globals.css'
import Cabecalho from '../components/Cabecalho/Cabecalho'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Checkpoint 3',
  description: 'FIAP - Projeto Next.js - Artigos de moda e vestuário.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>

        <Cabecalho/>

        {children}

      </body>
    </html>
  )
}
