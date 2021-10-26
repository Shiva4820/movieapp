import React, { Component } from 'react'

export default class Favourite extends Component {
    render() {
        return (
            <>
           <div className="main">
  <div className="row">
    <div className="col-3">
    <ul class="list-group favourites-genres">
  <li class="list-group-item">An generas</li>
  <li class="list-group-item">Action</li>
  <li class="list-group-item">Action</li>
  <li class="list-group-item">Action</li>
  <li class="list-group-item">Action</li>
</ul>
    </div>
    <div className="col-9">
        <div className="row">
        <input type="text" className="input-group-text"></input>
        <input type="text" className="input-group-text"></input>
        </div>
    </div>
  </div>
           </div> 
           </> 
        )
    }
}
