import React from 'react';
import './ResultsItem.css';

// Cut the description at 80 chars if it's too long
const getShortDescription = desc => {
  if (desc) {
    return desc.length < 80
    ? desc
    : `${desc.substring(0, 80)}...`;
  }
  return null;
}

const ResultsItem = ({ hit }) =>
  <article className="ResultsItem">
    <div className="ResultsItem-imgContainer">
      <img
        className="ResultsItem-img"
        src={hit.image}
        alt={`${hit.name} - ${hit.type}`}
      />
    </div>
    <h3 className="ResultsItem-title">
      {hit.name}
    </h3>
    <p className="ResultsItem-type">
      {hit.type}
    </p>
    <p className="ResultsItem-description">
      {getShortDescription(hit.shortDescription)}
    </p>
    <a
      target="_blank"
      rel="noopener"
      href={hit.url}
      className="ResultsItem-link">
      See product
    </a>
  </article>;

export default ResultsItem;
