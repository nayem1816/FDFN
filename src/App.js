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
import { createContext, useEffect, useState } from "react";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import MyOrder from "./components/MyOrder/MyOrder";
import firebase from "firebase/app";
import "firebase/auth";
export const userContext = createContext({});

function App() {
    const [loggedInUser, setLoggedInUser] = useState({});

    const auth = firebase.auth();

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            const { displayName, email, photoURL } = user;
            const userInfo = {
                name: displayName,
                email,
                photo: photoURL,
            };
            setLoggedInUser(userInfo);
            // console.log(user);
        });
    }, []);

    console.log(loggedInUser);

    return (
        <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
            <div className="App">
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/home">
                            <Home />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/signup">
                            <Signup />
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
                        <PrivateRoute path="/buyProducts/:id">
                            <BuyProduct />
                        </PrivateRoute>
                        <Route path="/dashboard">
                            <Dashboard />
                        </Route>
                        <Route path="/registration">
                            <RegisterForm />
                        </Route>
                        <Route path="/myOrder">
                            <MyOrder />
                        </Route>

                        <Route path="*">
                            <NotFound />
                        </Route>
                    </Switch>
                    <FbMessenger />
                </Router>
            </div>
        </userContext.Provider>
    );
}

export default App;
