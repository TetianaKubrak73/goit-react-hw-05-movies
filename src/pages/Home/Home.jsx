import React, { useEffect, useState } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import { fetchTrending } from '../../services/MovieApi';
import Loader from 'components/Loader/Loader';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTrendingFilms = () => {
      setLoading(true);

      fetchTrending()
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
      <h1>Trending today</h1>
      <MovieList movies={movies} />

      {loading && <Loader />}
    </main>
  );
};

export default Home;
