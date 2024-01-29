import React, { useEffect, useState } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import { getTrending } from '../../services/MovieApi';
import Loader from 'components/Loader/Loader';
import style from './Home.module.css';
const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTrendingFilms = () => {
      setLoading(true);

      getTrending()
        .then(trendingFilms => {
          setMovies(trendingFilms);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchTrendingFilms();
  }, []);

  return (
    <main>
      <h1 className={style.titleHome}>Trending today</h1>
      <MovieList movies={movies} />

      {loading && <Loader />}
    </main>
  );
};

export default Home;
