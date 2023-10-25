import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center mt-10">
        <Image src="https://img.freepik.com/free-vector/rose-bouquet-illustration_1284-20872.jpg?w=826&t=st=1698197240~exp=1698197840~hmac=baa9bc176a76a8175e5fd5b394191048329a28ff0c269b1c9b5c82947f285d1e"
        alt=""
        width={500}
        height={500}
        />
      </div>
    </>
  )
}