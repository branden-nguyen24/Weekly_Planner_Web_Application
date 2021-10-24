import './App.css';
import Todo from './components/Todo/Todo'
import Header from './components/Header'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './components/About'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import { BrowserRouter as Router, Route, } from 'react-router-dom'


function App() {

  const homepageStyle = {         /* this is to stylize homepage into a grid */
    display: "grid",
    marginTop: 50,
    maxWidth: "100%",
    
    // boxShadow: "0px 0px 5px #666"
  }

  return (
    <div className="App" >
      <Router>
        <Navbar />
        <Route exact path='/'>
          <Header />
          <div className="homepage" style={homepageStyle}>
            <Todo />
          </div>
        </Route>
        <Route exact path='/about' component={About} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
