import Link from "next/link"

export default function Shirt(){
    return (
        <div>
            <h1>Camisa - R$ 19,99</h1>
            <Link href="/products">Voltar</Link>
        </div>
    )
}