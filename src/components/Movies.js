import React, { Component } from 'react'
import {movies} from './getMovie'

export default class Movies extends Component {
    render() {
        let movie=movies.results
        return (
            <>
              {
                  movie.length==0?
              <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    :
                    <div>
                        <h3 className="text-center"><strong>Trending</strong></h3>
                        </div>
              } 
            </>
        )
    }
}
