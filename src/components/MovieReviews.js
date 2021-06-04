// Code MovieReviews Here
import React from 'react'



const MovieReviews = ({reviews}) => {

    let genReview = () => {
        return reviews.map((review, idx) => {
            return <div key={idx} className="card">
                        <img src={review.multimedia.src} alt="Avatar" style={{ width: '100%' }} />
                        <div className="container">
                            <h4>By:{review.byline} --- <b>{review.headline}</b></h4>
                            <h5>Posted on: {review.date_updated}</h5>
                            <p>{review.summary_short}</p>
                        </div>
                    </div>
        })
    }

    return (
        <div className="review-list">
            {genReview()}
        </div>
    )
}

export default MovieReviews;

