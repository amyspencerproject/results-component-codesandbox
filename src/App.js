import "./styles.css";

import data from "./data.json";

export default function App() {
  return (
    <div className="App">
      <ResultCard />
      <SummaryCard />
      <Footer />
    </div>
  );
}

const ResultCard = () => {
  return (
    <div className="result-card">
      <h1>Your Result</h1>
      <div className="result-score-container">
        <p className="result-score">
          <span className="highlight">76</span> of 100
        </p>
      </div>
      <h2 className="result-rank">Great</h2>
      <p className="result-message">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
};

const SummaryCard = () => {
  return (
    <div className="summary-card">
      <h3>Summary</h3>
      {data.map((category) => (
        <Score categoryObject={category} key={category.id} />
      ))}

      <button className="btn-continue">Continue</button>
    </div>
  );
};

const Score = (props) => {
  return (
    <div className={props.categoryObject.class}>
      <div className="category-wrapper">
        <img src={props.categoryObject.icon} alt="" className="icon" />
        <h4>{props.categoryObject.category}</h4>
      </div>
      <p className="score">
        <span className="darken">{props.categoryObject.score}</span> / 100
      </p>
    </div>
  );
};

const Footer = () => {
  return (
    <footer>
      <p className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Frontend Mentor
        </a>
        .
      </p>

      <p>
        Coded by
        <a
          href="https://www.frontendmentor.io/profile/amyspencerproject"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Amy Spencer
        </a>
        .
      </p>
    </footer>
  );
};
