import React from 'react';
import { Link } from 'react-router-dom';

function TripArticleTemplate(props) {
  return (
    <div className="card">
      <div className="picture">
        <Link to={`/articles/${props.articleId}`} className="card-link">
          <img src={props.picture} alt="picture" />
        </Link>
      </div>
      <div className="content">
        <h4>{props.heading}</h4>
        <p>{props.text}</p>
        <h6>Continue reading...</h6>
      </div>
    </div>
  );
}

export default TripArticleTemplate;
