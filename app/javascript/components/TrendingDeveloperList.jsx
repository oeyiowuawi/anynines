import React, { Component } from 'react';
import TrendingDeveloperGroup from './TrendingDeveloperGroup';
import lodash from 'lodash';
import Pagination from './Pagination';


class TrendingDeveloperList extends Component {

  state = {
    developers: [],
    perPage: 8,
    currentPage: 1,
  }


  fetchTrendingDeveloper =  () => {
    const response = fetch("/trending").then(response => { 
      if(response.ok) {
        return response.json();
      } else {
        throw new Error(response.statusText);
      }
       })
    .then(devs =>  this.setState({ developers: devs}))
    .catch(error => console.log(error));
  }

  componentDidMount() {
    this.fetchTrendingDeveloper();
  }

  getIndexOfLastDev = () => {
    return this.state.currentPage * this.state.perPage; 
  }

  getIndexOfFirstDev = () => {
    return this.getIndexOfLastDev() - this.state.perPage;
  }

  getCurrentDevs = () => {
    const firstIndex = this.getIndexOfFirstDev();
    const lastIndex = this.getIndexOfLastDev();
    return this.state.developers.slice(firstIndex, lastIndex)
  }

  paginate = (number, event) => {
    event.preventDefault();
    this.setState({
      currentPage: number
    })
  }


  render() {
    let groupedDeveloperList = [];
    let result = [];
    let pagination = null
    if(this.state.developers.length > 0) {
      let currentDevs = this.getCurrentDevs();
      groupedDeveloperList = lodash.chunk(currentDevs, 4);
      result = groupedDeveloperList.map((groupedList, index) => {
        return <TrendingDeveloperGroup group={groupedList} key={index} />
      })
      pagination = <Pagination perPage={this.state.perPage}
                               totalDevs={this.state.developers.length}
                               paginate={this.paginate}
                               currentPage={this.state.currentPage} />
    }
    return(
      <div className='container'>
       <h1> Trending Ruby Developer</h1>
       <hr />
       { result }
       { pagination }
      </div>
    )
  }

}

export default TrendingDeveloperList