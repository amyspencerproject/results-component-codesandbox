import "./styles.css";

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
      <div className="category reaction">
        <div className="category-wrapper">
          <img src="icon-reaction.svg" alt="" className="icon" />
          <h4>Reaction</h4>
        </div>
        <p className="score">
          <span className="darken">80</span> / 100
        </p>
      </div>
      <div className="category memory">
        <div className="category-wrapper">
          <img src="icon-memory.svg" alt="" className="icon" />
          <h4>Memory</h4>
        </div>
        <p className="score">
          <span className="darken">92</span> / 100
        </p>
      </div>
      <div className="category verbal">
        <div className="category-wrapper">
          <img src="icon-verbal.svg" alt="" className="icon" />
          <h4>Verbal</h4>
        </div>
        <p className="score">
          <span className="darken">61</span> / 100
        </p>
      </div>
      <div className="category visual">
        <div className="category-wrapper">
          <img src="icon-visual.svg" alt="" className="icon" />
          <h4>Visual</h4>
        </div>
        <p className="score">
          <span className="darken">72</span> / 100
        </p>
      </div>
      <button className="btn-continue">Continue</button>
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
