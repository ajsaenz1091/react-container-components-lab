import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
    + `api-key=${NYT_API_KEY}`;

// // Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         reviews: []
    //     }
    // }
    state = {
        reviews: []
    }

    componentDidMount() {
        console.log("something")
        fetch(URL)
            .then(res => res.json())
            .then(reviewsData => {
                this.setState({ reviews: reviewsData.results })
            })

    }


    render() {
        return (
            <div className="latest-movie-reviews">
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}


export default LatestMovieReviewsContainer;

// class LatestMovieReviewsContainer extends Component {
//     constructor() {
//       super();
  
//       this.state = {
//         reviews: []
//       };
//     }
  
//     componentDidMount() {
//       fetch(URL)
//         .then(res => res.json())
//         .then(response => this.setState({ reviews: response.results }));
//     }
  
//     render() {
//       return (
//         <div className="latest-movie-reviews">
//           <h2>The Latest Reviews:</h2>
//           <MovieReviews reviews={this.state.reviews} />
//         </div>
//       );
//     }
//   }
  
  
//   export default LatestMovieReviewsContainer;

