import { Suspense, useEffect, useState } from 'react';
import {
  useLocation,
  useParams,
  NavLink,
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

  const from = location.state?.from ?? '/movies';

  const navigate = useNavigate();

  useEffect(() => {
    const fetchMoviesDetails = async () => {
      try {
        setLoading(true);
        const movie = await getMovieDetails(movieId);
        setMovie(movie);
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
          <div className={style.containerInfo}>
            <img
              className={style.imgTitle}
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
              <p className={style.text}>{overview}</p>
              <h2 className={style.title}>Genres:</h2>
              <p className={style.genres}>
                {genres && genres.map(i => i.name).join(', ')}
              </p>
            </div>
          </div>
          <div>
            <h3 className={style.title}>Additional information</h3>
            <ul className={style.listInfo}>
              <li>
                <NavLink className={style.link} to={'cast'} state={{ from }}>
                  Cast
                </NavLink>
              </li>
              <li>
                <NavLink className={style.link} to={'reviews'} state={{ from }}>
                  Reviews
                </NavLink>
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
