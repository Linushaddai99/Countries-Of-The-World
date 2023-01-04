import React from 'react';
import { useNavigate } from 'react-router-dom';

const Country = ({ data }) => {
  const navigate = useNavigate();

  const handleRoute = () => {
    navigate(`/details/${data.name}`, { state: data });
  };

  return (
    <button type="button" onClick={handleRoute} className="country">
      <img className="country-img" src={data.flag} alt="Country Flag" />
      <h2>{data.name}</h2>
      <p>
        Population:
        <span>{data.population}</span>
      </p>
      <p>
        Continent:
        <span>{data.region}</span>
      </p>
      <p>
        Capital:
        <span>{data.capital}</span>
      </p>
      {/* <p>.</p>
      <p>.</p>
      <p>click for more details</p> */}
    </button>
  );
};

export default Country;
