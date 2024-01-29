import { useState } from 'react';

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
        type="text"
        name="query"
        autoFocus
        value={query}
        onChange={handleSearchParams}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Form;
