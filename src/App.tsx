import "./App.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import RoutesApp from "./routes/routes";

function App() {
  return (
    <>
      <Banner />
      <RoutesApp/>
      <div className="block bg-green-500">
        <Footer />
      </div>
    </>
  );
}

export default App;
