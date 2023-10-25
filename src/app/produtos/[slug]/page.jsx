import Image from "next/image";
import Card from '/src/components/Card/Card.jsx';


export default function ProdutoSlug({ params }) {

  return (
    <div>

      {
        params.slug == 'camisa' ?
        <Card
          titulo='Camiseta daora'
          fonte='https://fideli.vtexassets.com/arquivos/ids/158668/R011607986_916_1-CAMISA-SOCIAL-COLCLASSICO-S-PM-REGULAR.jpg?v=637667858346870000'
          alt='Camisa'
        />:
        params.slug == 'calca' ?
        <Card titulo='Calça daora'/>:
        params.slug == 'sapato' ?
        <Card titulo='Sapato daora'/>:
        params.slug == 'bone' ?
        <Card titulo='Boné daora'/>:
        params.slug == 'oculos' ?
        <Card titulo='Óculos daora'/>:
        <Image className="mx-auto w-75"
          src="https://img.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg?w=1380&t=st=1698188171~exp=1698188771~hmac=68ba6e5cd75c5438cb91c9e0aecdaf04e5c8c64258b9013f2faff3f1b72d90e0"
          alt="404"
          width={550}
          height={400}
        />
      }
    </div>
  );
}
