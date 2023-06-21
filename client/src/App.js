import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Search from './pages/Search/SearchPage';
import './App.scss';

function App() {
  	return (
    	<div className="App">
      		<BrowserRouter>
				<Routes>
					<Route path="/" element={<Search/>}/>
				</Routes>
      		</BrowserRouter>
    	</div>
  	);
}

export default App;
