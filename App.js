import "./App.css";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import AddOrder from "./components/order/AddOrder";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/add-order" element={<AddOrder />}></Route>
    </Routes>
  );
}

export default App;
