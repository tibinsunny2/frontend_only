import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Homescreen from "./screens/Homescreen";
import Bookingscreen from "./screens/Bookingscreen";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
import LandingScreen from "./screens/LandingScreen";
import Tourscreen from "./screens/Tourscreen";
import TourBookingscreen from "./screens/TourBookingscreen";
// import ErrorPage from "./screens/ErrorPage";
import Footer from "./components/Footer";
import Productscreen from "./screens/Productscreen";
import ProductBuyscreen from "./screens/ProductBuyscreen";
import MyBookingScreen from "./screens/MyBookingScreen";
import Demo from "./screens/Demo";
import MyTourBookingScreen from "./screens/MyTourBookingScreen";
import { useEffect } from "react";
import { useState } from "react";
import AdminPowers from "./screens/GadgetsShow";
import Admindashboard2 from "./screens/Admindashboard";
import Currency from "./screens/CurrencyConverter/Currency";
import AdminAddPackage from "./screens/adminAddPackage.js";
import Weather from "./screens/weather/Weather.jsx"
import { useParams } from "react-router-dom";
import Emergency from "./screens/Emergency/Emergency.jsx";
import Adminpackagemodifications from "./screens/Adminpackagemodifications.jsx";
// import PackageIndividual from "./screens/PackageIndividual.jsx";
import PackageSingle from "./screens/PackageSingle.jsx";
import { Stripe } from "./stripe-sample-code/Stripe.jsx";
import Cart from "./components/Cart.jsx";
import Success from "./stripe-sample-code/Success.jsx";
import PackageUpdate from "./components/package_crud/PackageUpdate.jsx";
import PackageSales from "./components/packagesales/PackageSales.jsx";
function App() {
  const { username } = useParams();
  const [Currentuser, setCurrentUser] = useState("");
  useEffect(() => {
    setCurrentUser(localStorage.getItem("key"));
  }, [username]);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
            <Route path="/" exact element={<Demo />} />
            <Route path="/home" exact element={<LandingScreen />} />
            <Route path="/journal" element={<Homescreen />} />
            <Route path="/destinations" element={<Tourscreen />} />
            <Route path="/product" element={<Productscreen />} />
            <Route path="/addpackage" element={<AdminAddPackage />} />
            <Route path="/booking" element={<MyTourBookingScreen />} />
            {/* <Route path="/demo" element={<Demo />} /> */}
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/bookings" element={<ProfileScreen />} />
            <Route path="/admindash" element={<AdminPowers />} />
            <Route path="/admindashbord" element={<Admindashboard2 />} />
            <Route path="/converter" element={<Currency />} />
            <Route path="/wheather" element={<Weather/>} />
            <Route path="/emergency" element={<Emergency />} />
            <Route path="/success" element={<Success />} />
            <Route
              path="/packagemodifications"
              element={<Adminpackagemodifications />}
            />
            <Route path="/packageupdtation" element={<PackageUpdate/>}/>
            <Route path="/bookingpage/:id" element={<Bookingscreen/>}/>
            <Route path="/cart/:id" element={<Cart/>}/>
            <Route path="/packageSingle/:id" element={<PackageSingle />} />
            <Route path="/pay" element={<Stripe/>}/>
            <Route path="/sales" element={<PackageSales/>}/>
          </Routes>
        
        <Footer />
      </Router>
    </div>
  );
}

export default App;