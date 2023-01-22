import Header from './components/header/Header';
import { callAPI } from './request';

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
      <Header />
    </div>
  );
}

export default App;
