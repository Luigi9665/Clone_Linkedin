import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import MyNavBar from "./components/MyNavBar";
import MyHome from "./Pages/MyHome";
import MyFooter from "./components/MyFooter";
import Profile from "./Pages/Profile";
import DetailsExperience from "./Pages/DetailsExperience";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import { useDispatch } from "react-redux";
import { addAllProfileAction } from "./redux/action";

function App() {
  const [viewLoader, setLoader] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addAllProfileAction());
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);

  return (
    <BrowserRouter>
      {viewLoader && <Loader />}
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
