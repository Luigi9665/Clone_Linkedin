import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import MyNavBar from "./components/MyNavBar";
import MyHome from "./Pages/MyHome";
import MyFooter from "./components/MyFooter";
import Profile from "./Pages/Profile";
import RowCol1 from "./components/RowCol1";

function App() {
  return (
    <BrowserRouter>
      <MyNavBar />
      <RowCol1 />
      <Routes>
        <Route path="/" element={<MyHome />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
      <MyFooter />
    </BrowserRouter>
  );
}

export default App;
