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

        console.log('Fetching movies by query:', currentQuery);
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
      <Form onSubmit={setSearchParams} />
      {loading && <Loader />}

      {movies.length > 0 && <MovieList movies={movies} />}
    </main>
  );
};

export default Movies;
// const Movies = () => {
//   const [searchFilms, setSearchFilms] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [noMoviesText, setNoMoviesText] = useState(false);

//   const searchMovies = queryMovie => {
//     setLoading(true);

//     fetchSearchByKeyword(queryMovie)
//       .then(searchResults => {
//         setSearchFilms(searchResults);
//         setNoMoviesText(searchResults.length === 0);
//       })
//       .catch(error => {
//         console.log(error);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   };

//   return (
//     <main>
//       <Form searchMovies={searchMovies} />
//       {loading && <Loader />}
//       {noMoviesText && (
//         <p>There is no movies with this request. Please, try again</p>
//       )}
//       {searchFilms && <MovieList films={searchFilms} />}
//     </main>
//   );
// };

// export default Movies;
