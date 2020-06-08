import React from "react";
import "./rating.scss";

type RatingProps = {
  note: number;
  total: number;
};

export const Rating = (props: RatingProps) => {
  const note = Math.floor(props.note / 2);

  return (
    <div className="d-flex">
      {[0, 1, 2, 3, 4].map((i: number) => (
        <i key={i} className={`material-icons md-24 ${i < note ? "rating-active" : "rating-inactive"}`}>
          grade
        </i>
      ))}

      <span className="rating-summary">
        {note} / 5 ({props.total})
      </span>
    </div>
  );
};
