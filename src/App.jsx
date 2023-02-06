import { useState } from "react";
import RatingCard from "./components/RatingCard";
import "./App.css";
import ThanksCard from "./components/ThanksCard";

function App() {
    const [selected, setSelected] = useState(null);
    const [rating, setRating] = useState(null);
    // const [setRIsVisible, setIsRatingCardVisible] = useState(true);
    // const [isThanksgCardIsVisible, setIsThanksCardIsVisible] = useState(false);

    function handleSubmit() {
        setRating(selected)
    }

    return (
        <div className="App">
            {rating == null? (
                <RatingCard
                    handleSubmit={handleSubmit}
                    selected={selected}
                    setSelected={setSelected}
                />
            ) : (
                <ThanksCard rating={rating} setRating={setRating} setSelected={setSelected}/>
            )}
        </div>
    );
}

export default App;
