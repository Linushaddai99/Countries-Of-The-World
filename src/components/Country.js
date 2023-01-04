import React from 'react';
import { useNavigate } from 'react-router-dom';

const Country = ({ data }) => {
  const navigate = useNavigate();

  const handleRoute = () => {
    navigate('/details/' + `${data.name}`, { state: data })
  }

  return (
    <div onClick={handleRoute}>
      <img className="country-img" src={data.flag} />
      <h2>{data.name}</h2>
      <p>Population: <span>{data.population}</span></p>
      <p>Continent: <span>{data.region}</span></p>
      <p>Capital: <span>{data.capital}</span></p>
    </div>
  )
}

export default Country
