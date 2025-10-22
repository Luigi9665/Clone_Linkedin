import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import MyNavBar from "./components/MyNavBar";
import MyHome from "./Pages/MyHome";
import MyFooter from "./components/MyFooter";
import Profile from "./Pages/Profile";
import ColCenterHomePage from "./components/ColCenterHomePage";
import DetailsExperience from "./Pages/DetailsExperience";

function App() {
  return (
    <BrowserRouter>
      <MyNavBar />
      <Routes>
        <Route path="/" element={<MyHome />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/details/experience" element={<DetailsExperience />} />
      </Routes>
      <MyFooter />
    </BrowserRouter>
  );
}

export default App;
