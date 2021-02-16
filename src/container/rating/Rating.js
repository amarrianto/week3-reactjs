import React, { Component } from 'react';
import './Rating.css';
import { Icon } from 'react-icons-kit';

import { star, chevronUp, thumbsOUp, heart } from 'react-icons-kit/fa/';

export default class Rating extends Component {
        // handleUpVote & handleLike adalah method yang akan
        //mentrigger method di RatingList agar bisa mengubah
        // state di RatingList (Parent)
        handleUpVote = () => {
        this.props.onVote(this.props.id);
        };
        handleLike = () => {
        this.props.onLike(this.props.id);
        };
    render() {
        return (
          <div className="top-popular">
            <div className="logo">
              <img src={this.props.poster} alt="poster" />
            </div>
            <div className="description">
              <div className="title-rating">
                <h2>{this.props.title}</h2>
                <p>{this.props.overview}</p>
              </div>
              <div className="vote">
                <span style={{ color: "#fff68f", opacity: 0.5 }}>
                  <Icon size={18} icon={star} />
                  <span>{this.props.rating}</span>
                </span>
                <span style={{ color: "#fff68f", opacity: 0.5 }}>
                  <a onClick={this.handleLike}>
                    <Icon size={18} icon={heart} />
                  </a>
                  <span>{Math.round(this.props.popular)}</span>
                </span>
                <span style={{ color: "#fff68f", opacity: 0.5 }}>
                  <a onClick={this.handleUpVote}>
                    <Icon size={18} icon={thumbsOUp} />
                  </a>
                  <span>{this.props.vote}</span>
                </span>
              </div>
            </div>
          </div>
        );
}
}