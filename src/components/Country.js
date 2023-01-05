import React from 'react';
import { useNavigate } from 'react-router-dom';

const Country = ({ data }) => {
  const navigate = useNavigate();

  const handleRoute = () => {
    navigate(`/details/${data.name}`, { state: data });
  };

  return (
    <button type="button" onClick={handleRoute} className="country">
      <div className="img-holder">
        <img className="country-img" src={data.flag} alt="Country Flag" />
      </div>
      <div className="section-2">
        <h2>{data.name}</h2>
        <p>
          Population:
          <span className="lighter">{data.population}</span>
        </p>
        <p>
          Continent:
          <span className="lighter">{data.region}</span>
        </p>
        <p>
          Capital:
          <span className="lighter">{data.capital}</span>
        </p>
      </div>
    </button>
  );
};

export default Country;
