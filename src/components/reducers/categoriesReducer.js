const allCategories = [
  {
    color: "#FFD700",
    title: "compras"
  },
  {
    color: "#B0E0E6",
    title: "casa"
  },
  {
    color: "#D8BFD8",
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