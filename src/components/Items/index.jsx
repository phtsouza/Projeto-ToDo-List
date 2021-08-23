import { useState } from "react";
import SingleCard from "./SingleCard";
import { Container } from './styles';
import { useSelector, useDispatch } from "react-redux";


export default function Item() {
  const allItems = useSelector((state) => state.items);
  const [items, setItems] = useState(allItems);

  return (
    <Container>
      {items.map((item, i) => <SingleCard key={i} item={item}/>)}
    </Container>
  );
}