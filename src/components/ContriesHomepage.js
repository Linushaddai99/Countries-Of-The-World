import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getCountries from '../redux/api';
import CountriesList from './ContriesList'

const ContriesHomepage = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.countries);

  console.log(countries)

  useEffect(() => {
    if (countries.length === 0) {
      dispatch(getCountries());
    }
  }, [dispatch, countries.length]);

  return (
    <div>
      <h1>Where in the World</h1>
      <CountriesList countries={countries}/>
    </div>
  )
}

export default ContriesHomepage

