import { useState, useEffect } from "react";
import { CategoryContent } from "./styles";
import { useSelector, useDispatch } from "react-redux";
export default function Category({color, ct}) {
  
  const categoriesSelected = useSelector((state) => state.selected);
  const [categories, setCategories] = useState(categoriesSelected);
  const [isSelected, setIsSelected] = useState(false);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log(categoriesSelected)
  // }, [categoriesSelected])

  useEffect(() => {
    if(isSelected)
      dispatch({type: 'ADD_SELECTED_CATEGORY', payload: ct});
    else {
      dispatch({type: 'REMOVE_SELECTED_CATEGORY', payload: ct.title});
    }
  }, [isSelected]);

  function handleSelected() {
    setIsSelected(!isSelected);
  }

  return (
    <CategoryContent onClick={handleSelected} color={color} isSelected={isSelected} >
      <div/>
      <span>{ct.title}</span>
    </CategoryContent>
  );
}

