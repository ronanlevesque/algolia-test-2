import React from 'react';
import {SearchBox} from 'react-instantsearch/dom';
import './Search.css';

const Search = () =>
  <aside className="Search">
    <div className="Search-content">
      <SearchBox />
    </div>
  </aside>;

export default Search;
