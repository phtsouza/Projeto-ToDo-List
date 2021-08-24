const allItems = [
    {
      title: "Ir ao sacolão",
      text: "Comprar pão, carne, salada, maçã, uva e café",
      categories: [
        {
          color: "#FFD700",
          title: "compras"
        },
        {
            color: "#D8BFD8",
            title: "escola"
        }
      ]
    }
]


export default function itemsReducer(state = allItems, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.payload];
    case 'REMOVE_ITEM':
      return 0;
    default:
      return state;
  }
}

