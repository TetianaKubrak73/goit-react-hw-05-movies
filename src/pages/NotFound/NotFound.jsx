import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1>404 page not found</h1>
      <Link to="/">To home page</Link>
    </div>
  );
};

export default NotFound;
