import React from 'react';
import Country from './Country'

const ContriesList = ({ countries }) => {
  return (
    <div className='countries-grid'>
     { countries.map(countryData => <Country data={countryData}/>) }
    </div>
  )
}

export default ContriesList
