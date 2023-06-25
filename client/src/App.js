import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Search from './pages/Search/SearchPage';
import Header from './components/Header/Header';
import BrowsePage from './pages/BrowsePage/BrowsePage';
import EmployeeDetailsPage from './pages/EmployeeDetailsPage/EmployeeDetailsPage';
import './App.scss';
import AddEmployeePage from './pages/AddEmployeePage/AddEmployeePage';

function App() {
  	return (
    	<div className="App">
      		<BrowserRouter>
			  	<Header/>
				<Routes>
					<Route path="/employees/browse" element={<BrowsePage/>}/>
					<Route path='/employees/search' element={<Search/>}/>
					<Route path="/employees/:id" element={<EmployeeDetailsPage/>}/>
					<Route path='/employees/add' element={<AddEmployeePage/>}/>
				</Routes>
      		</BrowserRouter>
    	</div>
  	);
}

export default App;
