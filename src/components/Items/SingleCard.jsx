import { useEffect, useState } from 'react';
import Check from "../Svgs/Check"
import { Card, Title, Text, Categories, Colors } from './styles';

export default function SingleCard({item, index}) {

  const [checkboxIsCheck, setCheckboxIsCheck] = useState(false);

  useEffect(() => {
    localStorage.getItem(`@check_${index}`) == "true" 
    ? setCheckboxIsCheck(true)
    : setCheckboxIsCheck(false);
  }, [])

  useEffect(() => {
    localStorage.setItem("@check_"+index, checkboxIsCheck);
  }, [checkboxIsCheck])
  
  function handleCheckbox() {
    setCheckboxIsCheck(!checkboxIsCheck);
  } 
  
  return (
    <Card>
      <Title checkboxIsCheck={checkboxIsCheck}>{item.title}</Title>
      <Text checkboxIsCheck={checkboxIsCheck}>{item.text}</Text>
      <div className="footer">
        <Categories>{item.categories.map((ct, i) => 
          <Colors color={ct.color}></Colors>
        )}
        </Categories>
        <label htmlFor={item.title + index} onClick={handleCheckbox} >
          <div className={checkboxIsCheck ? "checkbox checked" : "checkbox"} checkboxIsCheck={checkboxIsCheck}>
            <Check />
          </div>
        </label>
        <input type="checkbox" name={item.title + index} id={item.title + index} /> 
      </div>

    </Card>
  );
}