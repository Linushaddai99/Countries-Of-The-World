import React from 'react'

const Country = ({ data }) => {
  return (
    <div>
      <h2>{data.name.common}</h2>
      <p>Population: <span>{data.population}</span></p>
      <p>Region: <span>{data.region}</span></p>
      <p>Capital: <span>{data.capital}</span></p>
    </div>
  )
}

export default Country
