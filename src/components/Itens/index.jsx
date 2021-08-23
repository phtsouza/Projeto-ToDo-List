import { useState } from "react";
import SingleCard from "./SingleCard";
import { Container } from './styles';


const allItens = [
  {
    title: "Ir ao sacolão",
    text: "Comprar pão, carne, salada, maçã, uva e café",
    categories: ["compras"]
  },
  {
    title: "Lavar o carro",
    text: "Lavar e aspirar a minha ferrari",
    categories: ["pessoal"]
  },
  {
    title: "Lavar o carro",
    text: "Lavar e aspirar a minha ferrari",
    categories: ["pessoal"]
  },
  {
    title: "Lavar o carro",
    text: "Lavar e aspirar a minha ferrari",
    categories: ["pessoal"]
  },
  {
    title: "Lavar o carro",
    text: "Lavar e aspirar a minha ferrari",
    categories: ["pessoal"]
  },
  {
    title: "Lavar o carro",
    text: "Lavar e aspirar a minha ferrari",
    categories: ["pessoal"]
  },
  {
    title: "Lavar o carro",
    text: "Lavar e aspirar a minha ferrari",
    categories: ["pessoal"]
  }
]



export default function Item() {

  const [itens, setItems] = useState(allItens);

  return (
    <Container>
      {itens.map((item, i) => <SingleCard key={i} item={item}/>)}
    </Container>
  );
}