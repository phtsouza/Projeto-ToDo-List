import { useState } from "react";
import { CategoryContent } from "./styles";
export default function Category({color, ct}) {

  const [isSelected, setIsSelected] = useState(false);

  function handleSelected() {
    setIsSelected(!isSelected);
  }

  return (
    <CategoryContent onClick={handleSelected} color={color} isSelected={isSelected} >
      <div />
      <span>{ct.title}</span>
    </CategoryContent>
  );
}

