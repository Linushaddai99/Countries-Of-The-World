import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getCountries from '../redux/api';
import CountriesList from './ContriesList';

const ContriesHomepage = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.countries);

  const [searchItem, setSearchItem] = useState('');

  console.log(countries);

  useEffect(() => {
    if (countries.length === 0) {
      dispatch(getCountries());
    }
  }, [dispatch, countries.length]);

  const newCountries = countries.filter((country) => (
    country.name.toLowerCase().includes(searchItem.toLowerCase())
    || country.region.toLowerCase().includes(searchItem.toLowerCase())));

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchItem(e.target.value);
  };

  return (
    <div>
      <h1>Where in the World</h1>
      <input type="text" name="searchItem" placeholder="search for a country" value={searchItem} onChange={handleSearch} />
      {searchItem.length ? <CountriesList countries={newCountries} />
        : <CountriesList countries={countries} />}

    </div>
  );
};

export default ContriesHomepage;
