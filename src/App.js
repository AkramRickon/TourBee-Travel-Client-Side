import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Component/Home/Home/Home';
import Login from './Component/Login/Login/Login';
import NotFound from './Component/NotFound/NotFound';
import AuthProvider from './ContextApi/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import AddPackage from './Component/AddPackage/AddPackage';
import Booking from './Component/Booking/Booking/Booking';
import MyBookings from './Component/MyBookings/MyBookings';
import ManageBookings from './Component/ManageBookings/ManageBookings';
import AllPackages from './Component/AllPackages/AllPackages';
import ContactUs from './ContactUs/ContactUs';



function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>

            <Route exact path='/'>
              <Home></Home>
            </Route>

            <Route path='/home'>
              <Home></Home>
            </Route>

            <Route path='/login'>
              <Login></Login>
            </Route>

            <Route path='/packages'>
              <AllPackages></AllPackages>
            </Route>
            <Route path='/contact'>
              <ContactUs></ContactUs>
            </Route>
            
            <PrivateRoute path='/addPackage'>
              <AddPackage></AddPackage>
            </PrivateRoute>


            <PrivateRoute path='/booking/:packageId'>
              <Booking></Booking>
            </PrivateRoute>

            <PrivateRoute path='/MyBookings'>
              <MyBookings></MyBookings>
            </PrivateRoute>

            <PrivateRoute path='/manageBookings'>
              <ManageBookings></ManageBookings>
            </PrivateRoute>
        

            <Route exact path='*'>
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </Router>

      </AuthProvider>
    </div>
  );
}
export default App;
