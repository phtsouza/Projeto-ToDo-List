const allCategories = [
  {
    color: "#ff0",
    title: "compras"
  },
  {
    color: "#0000ff",
    title: "casa"
  },
  {
    color: "#00ff00",
    title: "escola"
  }
]

export default function categoriesReducer(state = allCategories, action) {
  switch (action.type) {
    case 'ADD':
      return 0;
    case 'REMOVE':
      return 0;
    default:
      return state;
  }
}