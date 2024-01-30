import { useLocation, Link } from 'react-router-dom';

import style from './MovieList.module.css';
const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={style.movieList}>
      {movies.map(({ id, original_title, title }) => (
        <li className={style.item} key={id}>
          <Link state={{ from: location }} to={`/movies/${id}`}>
            {original_title || title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default MovieList;
