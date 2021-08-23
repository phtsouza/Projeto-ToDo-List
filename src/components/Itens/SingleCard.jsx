import { useState } from 'react';
import Check from "../Svgs/Check"
import { Card, Title, Text, Categories } from './styles';

export default function SingleCard({item, key}) {

  const [checkboxIsCheck, setCheckboxIsCheck] = useState(false);
  
  function handleCheckbox() {
    setCheckboxIsCheck(!checkboxIsCheck);
  } 
  
  return (
    <Card>
      <Title checkboxIsCheck={checkboxIsCheck}>{item.title}</Title>
      <Text checkboxIsCheck={checkboxIsCheck}>{item.text}</Text>
      <div className="footer">
        <Categories>{item.categories}</Categories>
        <label htmlFor={item.title + key} onClick={handleCheckbox} >
          <div className={checkboxIsCheck ? "checkbox checked" : "checkbox"} checkboxIsCheck={checkboxIsCheck}>
            <Check />
          </div>
        </label>
        <input type="checkbox" name={item.title + key} id={item.title + key} /> 
      </div>

    </Card>
  );
}