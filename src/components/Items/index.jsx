import { useState } from "react";
import SingleCard from "./SingleCard";
import { Container } from './styles';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";


export default function Item() {
  const allItems = useSelector((state) => state.items);
  let dispatch = useDispatch();
  const [items, setItems] = useState(allItems);

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("@todo_items"));
    dispatch({type: "INITIALIZE_ITEMS", payload: savedItems});
  }, []);

  useEffect(() => {
    setItems(allItems);
    localStorage.setItem("@todo_items", JSON.stringify(allItems));
  }, [allItems]);

  return (
    <Container>
      {items.map((item, i) => <SingleCard key={i} index={i} item={item}/>)}
    </Container>
  );
}