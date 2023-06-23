import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Search from './pages/Search/SearchPage';
import Header from './components/Header/Header';
import './App.scss';

function App() {
  	return (
    	<div className="App">
      		<BrowserRouter>
			  	<Header/>
				<Routes>
					<Route path="/" element={<Search/>}/>
				</Routes>
      		</BrowserRouter>
    	</div>
  	);
}

export default App;
