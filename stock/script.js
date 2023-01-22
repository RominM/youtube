import { callAPI } from "./request.js";

const SECRET_KEY = 'e11177b083205eb05d96bdf163e23b76';

const API_KEY = 'c06328b87f91';
const ADD_API_KEY = `?key=${API_KEY}`;

const BASE_URL = 'https://api.betaseries.com/';
const MOVIES = 'movies'
const LIST = 'list'

const URL = `${BASE_URL}${MOVIES}/${LIST}${ADD_API_KEY}`;
//=====================================================//

const album = document.querySelector('#album');
const getMovies = async () => {
  const data = await callAPI(URL);

  const movies = data.movies;
  movies.forEach((movie) => {
    if (movie.poster) {
      const content1 = document.createElement('div');
      content1.classList.add('content');
      const imgBG = document.createElement('img');
      imgBG.classList.add('imgBG');
      imgBG.src = movie.poster;
      
      const content2 = document.createElement('div');
      content2.classList.add('content_poster');

      const poster = document.createElement('img')
      poster.classList.add('poster')
      poster.src = movie.poster

      content1.append(imgBG,content2)
      content2.append(poster)

      album.append(content1)
    }
  });
};
getMovies()
