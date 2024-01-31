import { Suspense, useEffect, useState } from 'react';
import {
  useLocation,
  useParams,
  Link,
  Outlet,
  useNavigate,
} from 'react-router-dom';
import { getMovieDetails } from '../../services/MovieApi';
import Loader from '../../components/Loader/Loader';
import style from './MovieDetails.module.css';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  const location = useLocation();

  const from = location.state?.from || '/';

  const navigate = useNavigate();

  // const BASE_URL = 'https://image.tmdb.org/t/p/w300';

  useEffect(() => {
    const fetchMoviesDetails = async () => {
      try {
        setLoading(true);
        const { data } = await getMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMoviesDetails();
  }, [movieId]);

  const goBack = () => navigate(from);

  const { title, poster_path, overview, vote_average, genres } = movie || {};

  return (
    <div>
      {loading && <Loader />}
      {error && <p>Error: {error}</p>}
      <button className={style.btn} onClick={goBack} type="button">
        Go back
      </button>
      {movie && (
        <>
          <div className={style.moviecontainer}>
            <img
              width="300px"
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : `https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg`
              }
              alt={title}
            />
            <div>
              <h1>{title}</h1>
              <h2 className={style.title}>User Score:</h2>
              <p>{Math.round(vote_average * 10)}%</p>
              <h2 className={style.title}>Overview: </h2>
              <p>{overview}</p>
              <h2 className={style.title}>Genres:</h2>
              <p className={style.genres}>
                {genres && genres.map(i => i.name).join(', ')}
              </p>
            </div>
          </div>
          <div className={style.infocontainer}>
            <h3 className={style.title}>Additional information</h3>
            <ul className={style.addinfo}>
              <li>
                <Link className={style.infolink} to={'cast'} state={{ from }}>
                  Cast
                </Link>
              </li>
              <li>
                <Link
                  className={style.infolink}
                  to={'reviews'}
                  state={{ from }}
                >
                  Reviews
                </Link>
              </li>
            </ul>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
