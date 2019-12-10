import React, { Component } from 'react';
import TrendingDeveloperGroup from './TrendingDeveloperGroup';
import lodash from 'lodash';


class TrendingDeveloperList extends Component {

  state = {
    developers: []
  }


  fetchTrendingDeveloper = async () => {
    const response = await fetch("/trending").then(response => response.json())
    .then(devs =>  this.setState({ developers: devs}));
  }

  componentDidMount() {
    this.fetchTrendingDeveloper();
  }


  render() {
    let groupedDeveloperList;
    let result = [];
    if(this.state.developers.length > 0) {
      groupedDeveloperList = lodash.chunk(this.state.developers, 4);
      result = groupedDeveloperList.map((groupedList, index) => {
        return <TrendingDeveloperGroup group={groupedList} key={index} />
      })
    }
    return(
      <div className='container'>
       <h1> Trending Ruby Developer</h1>
       <hr />
       { result }
       
      </div>
    )
  }

}

export default TrendingDeveloperList