import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Search from './pages/Search/SearchPage';
import Header from './components/Header/Header';
import BrowsePage from './pages/BrowsePage/BrowsePage';
import EmployeeDetailsPage from './pages/EmployeeDetailsPage/EmployeeDetailsPage';
import './App.scss';

function App() {
  	return (
    	<div className="App">
      		<BrowserRouter>
			  	<Header/>
				<Routes>
					<Route path="/" element={<BrowsePage/>}/>
					<Route path='/search' element={<Search/>}/>
					<Route path="/employees/:id" element={<EmployeeDetailsPage/>}/>
				</Routes>
      		</BrowserRouter>
    	</div>
  	);
}

export default App;
