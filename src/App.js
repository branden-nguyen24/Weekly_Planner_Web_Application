import './App.css';
import Todo from './components/Todo/Todo'
import Header from './components/Header'
import Footer from './components/Footer'
import Tips from './components/Tips/tips'
import Plant from './components/Plant/plant'


function App() {
  return (
    <div className="App">
          <Header />
          <div className="homepage">
            <Todo />
            <Plant />
            <Tips />
          </div>
          
          <Footer />
    </div>
  );
}

export default App;
