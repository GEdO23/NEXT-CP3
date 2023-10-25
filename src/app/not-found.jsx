import Image from 'next/image'

export default function NotFound() {
  return (
    <div className="bg-red-500 font-extrabold h-full w-full fixed">
        <h1 className="text-6xl text-white text-center mb-7 mt-7">404</h1>

        <Image className="mx-auto w-75"
          src="https://img.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg?w=1380&t=st=1698188171~exp=1698188771~hmac=68ba6e5cd75c5438cb91c9e0aecdaf04e5c8c64258b9013f2faff3f1b72d90e0"
          alt="404"
          width={550}
          height={400}
        />

        <p className="text-white text-center text-3xl mt-7">Página não encontrada</p>
    </div>
  )
}