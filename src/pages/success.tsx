import Link from "next/link";
import { ImageContainer, SuccessContainer } from "../styles/pages/success";

export default function Success() {
  return (
    <SuccessContainer>
      <h1>Compra efetuada com sucesso!</h1>

      <ImageContainer>

      </ImageContainer>

      <p>
        Uhuu! <strong>Arthur Madureira</strong>, sua <strong>Camiseta Ignite Lab</strong> já está a caminho de sua casa.
      </p>

      <Link href='/'>
        Voltar ao catálogo
      </Link>
    </SuccessContainer>
  )
}