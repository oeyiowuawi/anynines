import React from 'react';

const TrendingDeveloper = ({ dev }) => {
  return(
    <div className="col-sm">
      <div className="card">
        <img src={dev.avatar} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{ dev.name }</h5>
          <p className="card-text">{dev.repo.description}</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  )
}

export default TrendingDeveloper;