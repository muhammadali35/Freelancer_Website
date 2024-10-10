import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./component/home/Home";
// import Footer from "./component/Footer/Footer";
import NavBar from "./component/NavBar/NavBar";
import Contact from "./component/Contact/Contact";
import About from "./component/About/About";
import FreelancerDetail from "./component/home/FreelancerCard/FreelancerDetail";
import Profile from "./createProfile/ProfileSettings/Profile/Profile";
import Sidebar from "./createProfile/ProfileSettings/ProfileSideBar/Sidebar"; // Adjust the path according to your project structure
import MyServices from "./createProfile/ProfileSettings/MyServices/MyServices";
import Logout from "./createProfile/ProfileSettings/Logout/Logout";
import Dashboard from "./createProfile/ProfileSettings/Dashboard/Dashboard";
import Scroll from "./component/Scroll/Scroll";
import ProductDisplay from "./component/home/ProductDisplay";

const App = () => {
  const location = useLocation();

  // Define the paths where the sidebar should be shown
  const sidebarPaths = ['/dashboard' ,'/profile' , '/dashboard','/myservices','/logout'];

  return (
    <div className="flex">
      {/* Render Sidebar only for specific paths */}
      {sidebarPaths.includes(location.pathname) && <Sidebar />}
      
      <div className="flex-grow">
        <Scroll/>
        <NavBar />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile/:id" element={<FreelancerDetail />} />
          <Route path="/product/:id" element={<ProductDisplay />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/myservices" element={<MyServices />} />
          <Route path="/logout" element={<Logout/>} />
        </Routes>
        
      </div>
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
