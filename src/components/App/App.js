// import logo from '../../logo.svg';
import './App.css';
import React from 'react';
import BusinessList from '../BusinessList/BusinessList';
// const BusinessList = require('../BusinessList')
import SearchBar from '../SearchBar/SearchBar';
// const SearchBar = require('../SearchBar');

var business = {
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
}

var businesses = [
  business,
  business,
  business,
  business,
  business,
  business
];

class App extends React.Component {
  render()
  {
    return (
    <div className="App">
    <h1>ravenous</h1>
      <SearchBar />
      <BusinessList propName={businesses} />
    </div>
    );
  }
}

export default App;
