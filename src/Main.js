import { Route, Routes } from "react-router-dom";
import AllMeetUps from "./pages/AllMeetUps";
import NewMeetUps from "./pages/NewMeetUps";
import Favourites from "./pages/Favourites";
import MainNavigation from "./components/layout/MainNavigation";

function Main() {
  return (
    <div>
    <MainNavigation></MainNavigation>
    
    <Routes>
        <Route path="/" element={<AllMeetUps />} />
          
        <Route path="/new-meetups" element={<NewMeetUps />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </div>

  );
}

export default Main;
//react code having a single h1 tag
