import { useState } from "react";
import { Container, Category } from "./styles";
import { useSelector, useDispatch } from "react-redux";

export default function Menu(){

  const allCategories = useSelector((state) => state.categories);
  const [categories, setCategories] = useState(allCategories);

  return(
    <Container>
      <ul>
        {categories.map((ct, i) => 
          <Category key={i} color={ct.color} >
            <div />
            <span>{ct.title}</span>
          </Category>
        )}
      </ul>
      <iframe src="https://giphy.com/embed/l29PIblmcraLOowHnR" width="200" height="200" frameBorder="0" />
    </Container>
    
  );
}