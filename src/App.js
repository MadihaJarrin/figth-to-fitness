import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer//Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Pricing from './Components/Pricing/Pricing';




function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/pricing">
            <Pricing></Pricing>
          </Route>

        </Switch>

        <Footer></Footer>
      </BrowserRouter>

    </div >
  );
}

export default App;
