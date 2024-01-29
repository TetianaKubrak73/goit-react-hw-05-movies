import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import MovieList from 'components/MovieList/MovieList';
import Form from 'components/Form/Form';
import { getMovieByQuery } from 'services/MovieApi';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const currentQuery = searchParams.get('query');
    if (!currentQuery) return;

    const fetchMovieByQuery = async () => {
      try {
        setLoading(true);

        const movieByQuery = await getMovieByQuery(currentQuery);
        setMovies(movieByQuery);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieByQuery();
  }, [searchParams]);

  return (
    <main>
      <Form setSearchParams={setSearchParams} />
      {loading && <Loader />}

      {movies.length > 0 && <MovieList movies={movies} />}
    </main>
  );
};

export default Movies;
