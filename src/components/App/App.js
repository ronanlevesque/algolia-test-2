import React from 'react';
import {InstantSearch} from 'react-instantsearch/dom';
import './App.css';
import Header from '../Header/Header';
import Search from '../Search/Search';
import Results from '../Results/Results';

const App = ({ theme }) =>
  <div className={`App App--${theme}`}>
    <Header
      title="FastSearch !"
    />
    <InstantSearch
      appId="latency"
      apiKey="3d9875e51fbd20c7754e65422f7ce5e1"
      indexName="bestbuy">
      <Search />
      <Results />
    </InstantSearch>
  </div>;

export default App;
