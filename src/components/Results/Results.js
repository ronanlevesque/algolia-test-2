import React from 'react';
import {Hits} from 'react-instantsearch/dom';
import ResultsItem from '../ResultsItem/ResultsItem';
import './Results.css';

const Results = () =>
  <main className="Results">
    <Hits hitComponent={ResultsItem} />
  </main>;

export default Results;
