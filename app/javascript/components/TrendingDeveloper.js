import React from 'react';
import './styles.scss';

const TrendingDeveloper = ({ dev }) => {
  return(
    <div className="col-sm-3 dev">
      <div className="card">
        <img src={dev.avatar} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{ dev.name }</h5>
          <p className="card-text dev-description">{dev.repo.description}</p>
          <a href={dev.url} target="_blank" className="btn btn-primary">View on Github</a>
        </div>
      </div>
    </div>
  )
}

export default TrendingDeveloper;