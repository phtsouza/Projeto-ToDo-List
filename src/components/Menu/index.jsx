import { useState } from "react";
import NewCategoryModal from "../NewCategoryModal";
import { Container, Category } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import Add from "../Svgs/Add";

export default function Menu(){

  const allCategories = useSelector((state) => state.categories);
  const [categories, setCategories] = useState(allCategories);
  const [isOpenNewCategoryModal, setIsOpenNewCategoryModal] = useState(false); 
  
  function handleOpenNewCategoryModal() {
    setIsOpenNewCategoryModal(true);
  }

  return (
    <Container>
      <ul>
        <div>
          {categories.map((ct, i) => 
            <Category key={i} color={ct.color} >
              <div />
              <span>{ct.title}</span>
            </Category>
          )}
        </div>
        <Add onClick={handleOpenNewCategoryModal} className="button-add"/>
        <NewCategoryModal setIsOpenNewCategoryModal={setIsOpenNewCategoryModal} isOpenNewCategoryModal={isOpenNewCategoryModal} />
      </ul>
      <iframe src="https://giphy.com/embed/l29PIblmcraLOowHnR" width="200" height="200" frameBorder="0" />
    </Container>
    
  );
}