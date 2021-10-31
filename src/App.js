import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import AuthProvider from './context/AuthProvider';
import UserLogin from './components/userlogin/UserLogin';
import ContactUs from './components/ContactUs/ContactUs';
import Error from './components/Error/Error';
import AboutUs from './components/AboutUs/AboutUs';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import OrderReview from './components/OrderReview/OrderReview';
import Shipping from './components/Shipping/Shipping';
import AddPackage from './components/AddPackage/AddPackage';
import ManageAllOrder from './components/ManageAllOrder/ManageAllOrder';
import Admin from './components/Admin/Admin';
import Header from './components/Header/Header';
import MyOrder from './components/MyOrder/MyOrder';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>


            <Route path="/userlogin">
              <UserLogin></UserLogin>
            </Route>

            <PrivateRoute path='/myOrder'>
              <MyOrder></MyOrder>
            </PrivateRoute>

            <Route path="/contact">
              <ContactUs></ContactUs>
            </Route>

            <Route path="/about">
              <AboutUs></AboutUs>
            </Route>

            <PrivateRoute path='/orderReview/:orderId'>
              <OrderReview></OrderReview>
            </PrivateRoute>

            <PrivateRoute path='/shipping'>
              <Shipping></Shipping>
            </PrivateRoute>

            <Route path='/addpackage'>
              <AddPackage></AddPackage>
            </Route>

            <Route path='/allOrder'>
              <ManageAllOrder></ManageAllOrder>
            </Route>

            <PrivateRoute path="/admin">
              <Admin></Admin>
            </PrivateRoute>

            <Route path="*">
              <Error></Error>
            </Route>

          </Switch>
           <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
