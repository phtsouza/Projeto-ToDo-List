const allItems = [
    {
      title: "Ir ao sacolão",
      text: "Comprar pão, carne, salada, maçã, uva e café",
      categories: [
        {
          color: "#ff0",
          title: "compras"
        },
        {
            color: "#00ff00",
            title: "escola"
        }
      ]
    }
]


export default function categoriesReducer(state = allItems, action) {
  switch (action.type) {
    case 'ADD':
      return 0;
    case 'REMOVE':
      return 0;
    default:
      return state;
  }
}

