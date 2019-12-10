import React, { Component } from 'react';
import TrendingDeveloper from './TrendingDeveloper'

class TrendingDeveloperGroup extends Component {
  render() {
    const developers = this.props.group.map((dev, index) => {
      return <TrendingDeveloper dev={dev} key={index} />
    })
    console.log('this are the devs', developers)
    return(
      <div className="row">
       { developers }
      </div>
    )
  }
}

export default TrendingDeveloperGroup;