import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Nav">
        <nav>
          <img src={reactLogo} className="nav--icon" />
          <h3 className="nav--logo_text">ReactFacts</h3>
          <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
      </div>
      <div className="Main">
        <main>
          <h1 className="main--title">Fun facts about React</h1>
          <ul className="main--facts">
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
          </ul>
        </main>
      </div>
      <div className="footer">
        <footer>
          <p>made with ☕ and ❤️ by roudra323</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
