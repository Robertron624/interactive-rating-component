import React from "react";
import star from "../assets/icon-star.svg";

const RatingCard = ({selected, setSelected, handleSubmit}) => {


    function handleSelected(e) {
        setSelected(parseInt(e.target.innerText));
    }

    const possibleValues = [1, 2, 3, 4, 5];

    return (
        <>
            <div className="container">
                <div className="star-container">
                    <img src={star} alt="star icon" />
                </div>
                <h1>How did we do?</h1>
                <p className="rating-text">
                    Please let us know how we did with your support request. All
                    feedback is appreciated to help us improve our offering!
                </p>
                <div className="rating__dots">
                    {possibleValues.map((value, index) => (
                        <div
                            onClick={handleSelected}
                            key={`${value}:${index}`}
                            className={`rating__dot--container ${
                                value == selected ? "selected__dot" : ""
                            }`}
                        >
                            <span>{value}</span>
                        </div>
                    ))}
                </div>
                <button onClick={handleSubmit} className="submit-btn">Submit</button>
            </div>
        </>
    );
};

export default RatingCard;
