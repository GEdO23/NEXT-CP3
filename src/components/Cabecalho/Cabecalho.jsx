import Link from 'next/link'

export default function Cabecalho() {
  return (
    <header className='bg-white h-50 text-red-500 mt-4'>
        <nav>
            <h1 className='text-6xl font-extrabold flex items-center justify-center'>SHOP</h1>

            <ul className='font-extrabold mt-4 flex items-center justify-center space-x-4'>
                <li><Link href="/">HOME</Link></li>
                <li><Link href="/produtos/camisa">CAMISA</Link></li>
                <li><Link href="/produtos/calca">CALÇA</Link></li>
                <li><Link href="/produtos/sapato">SAPATO</Link></li>
                <li><Link href="/produtos/bone">BONÉ</Link></li>
                <li><Link href="/produtos/oculos">ÓCULOS</Link></li>
            </ul>
        </nav>
    </header>
  )
}