import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import Home from "./components/Home/Home/Home";
import About from "./components/About/About/About";
import Contact from "./components/Contact/Contact/Contact";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import Login from "./components/Login/Login";
import Signup from "./components/Login/Signup";
import MovieDetails from "./components/Home/HomeMovies/MovieDetails/MovieDetails";
import OnlineStoreDetails from "./components/Home/OnlineStore/OnlineStoreDetails/OnlineStoreDetails";
import BuyProduct from "./components/BuyProduct/BuyProduct";
import FbMessenger from "./components/FbMessenger/FbMessenger";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/movies/:id">
              <MovieDetails />
            </Route>
            <Route path="/product/:id">
              <OnlineStoreDetails />
            </Route>
            <Route path="/buyProducts/:id">
              <BuyProduct />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/registration">
              <RegisterForm />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
        <FbMessenger />
      </Router>
    </div>
  );
}

export default App;
