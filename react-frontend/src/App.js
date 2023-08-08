import logo from './logo.svg';
import './App.css';
import ListOfEmployeeComponent from './components/ListOfEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import  {HashRouter as Router, Route, Routes} from 'react-router-dom' ;
import CreateEmployeeComponet from './components/CreateEmployeeComponet';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
        <div className='container'>
          <HeaderComponent/>
            <div className='container'>
              <Routes>
                <Route exact path="/" Component={ListOfEmployeeComponent} ></Route>
                <Route path="/employees" Component={ListOfEmployeeComponent} ></Route>
                <Route path="/add-employee/:id" Component={CreateEmployeeComponet} ></Route>
                {/* <Route path="/delete-employee/:id" Component={CreateEmployeeComponet} ></Route> */}
                <Route path="/view-employee/:id" Component={ViewEmployeeComponent} ></Route>
              </Routes>
            </div>
            <FooterComponent/>
          </div>

      </Router>
      
    </div>
  );
}

export default App;
