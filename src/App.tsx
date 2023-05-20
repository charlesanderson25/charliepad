import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Banner />
      <h1 className="text-3xl font-bold underline">Ohhhhh Yeah!</h1>
    </>
  );
}

export default App;
