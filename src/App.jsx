import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import MyNavBar from "./components/MyNavBar";
import MyHome from "./Pages/MyHome";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <BrowserRouter>
      <MyNavBar />
      <Routes>
        <Route path="/" element={<MyHome />} />
      </Routes>
      <MyFooter />
    </BrowserRouter>
  );
}

export default App;
