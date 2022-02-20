import React from "react";

export default class ReviewForm extends React.Component{
    render() {
        return(
            <div className="card">
                <div className="card-body">
                    <h3>Review</h3>
            <div className="form-group">
                    <input type="text" className="form-control" placeholder="Leave a review"></input>
                    <button className="btn btn-primary">Submit</button>
                </div>
                </div>
                </div>
        )
    }
}
