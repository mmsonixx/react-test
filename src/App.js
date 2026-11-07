import "./App.css";
import { Header } from "./components/Header/Header.jsx";
import { Hero } from "./components/Hero/Hero.jsx";
import { Benefits } from "./components/Benefits/Benefits.jsx";
import { Footer } from "./components/Footer/Footer.jsx";

function App() {
  const message = "Hello Im Sonya";

  const testMethod = () => {
    console.log("Test")
  }
  return (
    <div className="App">
      <Header />
      <main>
        <Hero testMethod={testMethod}/>
        <Benefits info={message} test="Test message" />
      </main>
      <Footer />
    </div>
  );
}

export default App;
