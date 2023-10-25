import Image from "next/image";
import Card from "/src/components/Card/Card.jsx";

export default function ProdutoSlug({ params }) {
  return (
    <div>
      {params.slug == "camisa" ? (
        <Card
          titulo="CAMISA"
          fonte="https://fideli.vtexassets.com/arquivos/ids/158668/R011607986_916_1-CAMISA-SOCIAL-COLCLASSICO-S-PM-REGULAR.jpg?v=637667858346870000"
          alt="Camisa"
        />
      ) : params.slug == "calca" ? (
        <Card
          titulo="CALÇA"
          fonte="https://fideli.vtexassets.com/arquivos/ids/180670/CR93400662_970_1-CALCA-JEANSWEAR-REGULAR-FIDELI-UFFICIO.jpg"
          alt="Calça"
        />
      ) : params.slug == "sapato" ? (
        <Card
          titulo="SAPATO"
          fonte="https://cdn.dooca.store/57/products/sapato-couro-derby-ventura-nero-site-1_1600x2000+fill_ffffff.jpg?v=1687386283"
          alt="Sapato"
        />
      ) : params.slug == "bone" ? (
        <Card
          titulo="BONÉ"
          fonte="https://cdn.pixabay.com/photo/2012/04/05/01/45/hat-25758_1280.png"
          alt="Boné"
        />
      ) : params.slug == "oculos" ? (
        <Card
          titulo="ÓCULOS"
          fonte="https://media.istockphoto.com/id/1158779078/pt/foto/optician-optometrist-oculist-or-eye-doctor-holding-glasses-and-specs-with-new-lenses.jpg?s=1024x1024&w=is&k=20&c=sVsA8POTLNCLwXD0RJr64lerNoVaA3s01kCfnYQqWp8="
          alt="Óculos"
        />
      ) : (
        <Image
          className="mx-auto w-75"
          src="https://img.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg?w=1380&t=st=1698188171~exp=1698188771~hmac=68ba6e5cd75c5438cb91c9e0aecdaf04e5c8c64258b9013f2faff3f1b72d90e0"
          alt="404"
          width={550}
          height={400}
        />
      )}
    </div>
  );
}
