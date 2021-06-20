
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import RecentAds from "./Components/RecentAds/RecentAds";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import Slide from '@material-ui/core/Slide';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/product_details">
            <ProductDetails />
          </Route>
          <Route exact path="/">
            <Banner />
            <RecentAds />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
