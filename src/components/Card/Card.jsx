import Image from "next/image"

export default function Card({titulo, fonte, alt, altura, largura}) {

    const cardProps = (tit, fonte, alt, altura, largura)=> {
        return {
            tit: tit ? tit : 'Titulo Padrão',
            fonte: fonte ? fonte : "https://img.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg?w=1380&t=st=1698188171~exp=1698188771~hmac=68ba6e5cd75c5438cb91c9e0aecdaf04e5c8c64258b9013f2faff3f1b72d90e0",
            alt: alt ? alt : 'Alt Padrão',
            altura: altura ? altura : 200,
            largura: largura ? largura : 200
        }
    }

    let cp = cardProps(titulo, fonte, alt, altura, largura);

    return (
        <div className="w-auto h-auto my-0 mx-auto flex items-center justify-center mt-10">
            <div className="flex-col items-center justify-center rounded-md w-1/3 h-96 bg-slate-300 shadow-lg shadow-inner">
                <h1 className="font-extrabold text-4xl text-slate-800 text-center mt-2 mb-2">{cp.tit}</h1>
                <Image
                    className="mx-auto"
                    src={cp.fonte}
                    alt={cp.alt}
                    width={cp.largura}
                    height={cp.altura}
                />

            </div>
        </div>
    )
}
