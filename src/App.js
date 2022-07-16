
import './App.css';
import Header from './views/Header/Header';
import Home from './views/Home/Home';
import Checkout from './views/Checkout/Checkout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './views/Auth/Login/Login';
import AuthRoute from './AuthRoute';
import Payment from './views/Payment/Payment';
import Register from './views/Auth/Register/Register';
function App() {

  return (
    <Router>
      <div className="app">

        {/* <Header/>  Keep the Header only once throughout app lifetime */}

        <Routes>
          <Route exact path='/' element={ <><Header/> <Home/></> } />
          <Route exact path='/login' element={<Login/>} />
          <Route exact path='/register' element={<Register/>} />
          <Route exact path='/checkout' element={ <AuthRoute><Header/> <Checkout/></AuthRoute> }/>
          <Route exact path='/payment' element={ <AuthRoute><Header/> <Payment/></AuthRoute> }/>
          <Route path='*' element={<> <Header/> <h1>Oops! Page not found.</h1> </>}/>
        </Routes>
         
      </div>
    </Router>
  );
}

export default App;
