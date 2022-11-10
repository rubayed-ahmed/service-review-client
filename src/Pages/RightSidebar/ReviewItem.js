import React from "react";

const ReviewItem = ({ review }) => {
  const {  userName, userImage, reviewField } = review;
//   console.log(_id, userName, reviewField);
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={userImage} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{userName}</h2>
        <p>{reviewField}</p>
        <div className="card-actions justify-end">
          {/* <button className="btn btn-primary">Buy Now</button> */}
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;