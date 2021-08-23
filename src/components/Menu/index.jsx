import { useState } from "react";
import { Container, Category } from "./styles";

const allCategories = [
  {
    color: "#ff0",
    title: "casa"
  },
  {
    color: "#0000ff",
    title: "trabalho"
  },
  {
    color: "#00ff00",
    title: "escola"
  }
]

export default function Menu(){

  const [categories, setCategories] = useState(allCategories);

  return(
    <Container>
      <ul>
        {categories.map((ct, i) => 
          <Category color={ct.color} >
            <div />
            <span>{ct.title}</span>
          </Category>
        )}
      </ul>
    </Container>
  );
}