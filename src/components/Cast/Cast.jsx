import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCast } from '../../services/MovieApi';
import Loader from 'components/Loader/Loader';
import style from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setLoading(true);
        const castData = await getCast(movieId);
        setCast(castData);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}
      {error && <p>{error}</p>}
      <ul>
        {cast &&
          cast.map(({ id, profile_path, original_name, name, character }) => (
            <li className={style.item} key={id}>
              <img
                className={style.img}
                width="200px"
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : `https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg`
                }
                alt={original_name}
              />
              <p className={style.text}>{name}</p>
              <p className={style.text}>Character: {character}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default Cast;
