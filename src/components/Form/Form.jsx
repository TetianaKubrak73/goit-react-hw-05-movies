import { useState } from 'react';
import style from './Form.module.css';
const Form = ({ setSearchParams }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    setSearchParams({ query });
  };

  const handleSearchParams = ({ target: { value } }) => {
    setQuery(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={style.inputForm}
        type="text"
        name="query"
        autoFocus
        value={query}
        onChange={handleSearchParams}
      />
      <button className={style.buttonForm} type="submit">
        Search
      </button>
    </form>
  );
};

export default Form;
