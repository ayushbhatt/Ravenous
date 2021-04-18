import React from 'react.js';
import './SearchBar.css';

var sortByOptions={
    'Best Match':'best_match',
    'Highest Rated':'rating',
    'Most Reviewed':'review_count'
};

class SearchBar extends React.Component
{
   renderSortByOptions()
   {
       return Object.keys(sortByOptions);
   } 
}