import { GlobalStyle, Content } from "./global";
import Header from "./components/Header";
import Itens from "./components/Itens";
import Menu from "./components/Menu";

export default function App() {
  
  return (
    <>
      <GlobalStyle />
      <Header />
      <Content>
        <Menu />
        <Itens />
      </Content>
    </>

  );
}