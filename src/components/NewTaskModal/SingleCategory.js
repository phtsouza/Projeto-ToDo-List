import React from 'react';

// import { Container } from './styles';

export default function SingleCategory({category}) {
  return (
    <>
      <input type="checkbox" value={category.title} /> 
      {category.title}
    </>
  );
}