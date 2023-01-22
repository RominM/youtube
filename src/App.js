import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/header/Header';
import Sidebar from './components/layout/sidebar/Sidebar';
import { callAPI } from './request';

import './style/style.css';

function App() {
  const MOVIES = 'movies';
  const LIST = 'list';

  const getMovies = async () => {
    const data = await callAPI(`${MOVIES}/${LIST}`);
    console.log(data);
  };
  getMovies();
  return (
    <div className="App">
      <Router>
        <div className="mainNav">
          <Sidebar />
          <Header />
          <Routes>
            <Route path={''} component=""></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
