import { useState } from "react";
import NewCategoryModal from "../NewCategoryModal";
import Category from "./Category";
import { Container } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import Add from "../Svgs/Add";
import Delete from "../Svgs/Delete"
import { useEffect } from "react";

export default function Menu(){

  const allCategories = useSelector((state) => state.categories);
  const selectedCategories = useSelector((state) => state.selected);
  const dispatch = useDispatch();
  const [categories, setCategories] = useState(allCategories);
  const [isOpenNewCategoryModal, setIsOpenNewCategoryModal] = useState(false); 

  useEffect(() => {
    if(localStorage.getItem("@todo_categories")) {
      const savedCategories = JSON.parse(localStorage.getItem("@todo_categories"));
      dispatch({type: "INITIALIZE_CATEGORIES", payload: savedCategories});
    }
  }, []);
  
  useEffect(() => {
    if(allCategories) {
      localStorage.setItem("@todo_categories", JSON.stringify(allCategories));
      setCategories(allCategories);
    }
  }, [allCategories]);

  function handleOpenNewCategoryModal() {
    setIsOpenNewCategoryModal(true);
  }

  function handleDelete() {    

  }

  return (
    <Container>
      <ul>
        <div>
          {categories !== null ? categories.map((ct, i) => 
            <Category key={i} ct={ct} color={ct.color} />
          ) : ""}
        </div>
        <div className="category-container">
          <Add onClick={handleOpenNewCategoryModal} className="button-add"/>
          <Delete className="delete" onClick={handleDelete} />
        </div>
        <NewCategoryModal setIsOpenNewCategoryModal={setIsOpenNewCategoryModal} isOpenNewCategoryModal={isOpenNewCategoryModal} />
      </ul>
      <iframe src="https://giphy.com/embed/l29PIblmcraLOowHnR" width="200" height="200" frameBorder="0" />
    </Container>
    
  );
}