import Link from "next/link";
import Navbar from "../../components/Navbar";

export default function Products() {
  return (
    <div>
      <h1>Página de Produtos</h1>
      {/* <Navbar href={["/products/pants/bluepants", "/products/pants/redpants", "/products/shirt"]}
        title={["Calça Azul", "Calça Vermelha", "Camisa"]}
      /> */}
      <Link href="/">Voltar</Link>
    </div>
  );
}
