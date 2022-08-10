import './App.css';

const Header = () => {
  return (
    <header>
      <div  className="header-container">
        <h1>Github User Favourite Language </h1>
        <ul className="contacts">
          <li className="contact-dev">
            <a href="https://selchuk-karakus.vercel.app/">Get In Touch</a>
          </li>
          <li className="contact-mvf">
            <a href="https://portal.mvfglobal.com/" title="">
              MVF
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

function App() {
  return (
    <div className="App">
     <Header/>
    </div>
  );
}

export default App;
