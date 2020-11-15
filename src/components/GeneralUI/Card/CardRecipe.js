import React from "react";
import "./card.css";

const CardRecipe = (props) => {
  const { img, title, date, viewers, alt } = props.recipe;

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
      <div className="card">
        <img src={img} className="image" alt={alt} />
        <div className="card-body">
          <a href="#">
            <h5 className="card-title">{title}</h5>
          </a>
          <p className="card-date">{date}</p>
          <p className="card-viewers">viewers: {viewers}</p>
        </div>
        {
          /*isSignedIn &&*/
          <div className="card-footer text-center edit">
            <a href="#" class="btn btn-primary">
              Edit
            </a>
          </div>
        }
      </div>
    </div>
  );
};

export default CardRecipe;
