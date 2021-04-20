import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component
{
  constructor(props){
    super(props);
    this.state={
      'term':'',
      'location':'',
      'sortBy':'best_match'
    };
    this.sortByOptions={
      'Best Match':'best_match',
      'Highest Rated':'rating',
      'Most Reviewed':'review_count'
  };
  }
  getSortByClass(sortByOption){
    if(this.sortBy==this.sortByOption)
    {
      return 'active';
    }
    else{
      return '';
    }
  }
  handleSortByChange(sortByOption){
    this.setState(this.sortBy=sortByOption);
  }
   renderSortByOptions()
   {
       return Object.keys(this.sortByOptions).map( sortByOption =>
        {
            var sortByOptionValue = this.sortByOptions[sortByOption];
            return <li key={sortByOptionValue}></li>;
        });
   } 
   render()
   {
       return(
        <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" />
          <input placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a href='#'>Let's Go</a>
        </div>
        </div>
       );
   }
}

export default SearchBar;