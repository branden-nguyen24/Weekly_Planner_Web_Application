import './App.css';
import Todo from './components/Todo/Todo'
import Header from './components/Header'
import Footer from './components/Footer'
import TaskList from './components/TaskList'
import RideYourWave from './rideCrop.gif'

function App() {

  const homepageStyle = {         /* this is to stylize homepage into a grid */
    display: "grid",
    marginTop: 50,
    maxWidth: "100%",
    // boxShadow: "0px 0px 5px #666"
  }


  return (
    <div className="App" >
          <img src={RideYourWave} alt="Logo" style={{width:"100%"}}/>
          <Header />
          <hr style={{color:"#bd9f8f", height:5, margin:50}}/>
          <div className="homepage" style={homepageStyle}>
            <Todo TaskList={TaskList}/>
          </div>
          
          <Footer />
    </div>
  );
}

export default App;
