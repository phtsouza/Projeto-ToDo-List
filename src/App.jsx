import { GlobalStyle, Content } from "./global";
import Header from "./components/Header";
import Items from "./components/Items";
import Menu from "./components/Menu";
import { createStore, combineReducers } from "redux";
import categoriesReducer from "./components/reducers/categoriesReducer";
import itemsReducer from "./components/reducers/itemsReducer";
import selectedCategoriesReducer from "./components/reducers/selectedCategoriesReducer"
import { Provider } from "react-redux";

export default function App() {
  
  const allReducers = combineReducers({
    categories: categoriesReducer,
    items: itemsReducer,
    selected: selectedCategoriesReducer
  });
  const store = createStore(allReducers);

  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <Header />
        <Content>
          <Menu />
          <Items />
        </Content>
      </Provider>
    </>

  );
}