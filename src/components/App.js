import "./App.css";
import { Header } from "./Header/Header";
import { Nav } from "./Nav/Nav";
import { Main } from "./Main/Main";
import { Footer } from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
