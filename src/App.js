import "./App.css";
import { useState, useEffect } from "react";
import Header from "./Components/Header";
import GitHubUser from "./Components/GithubUser";
import GithubUserSearchForm from "./Components/GithubUserSearchForm";
import Footer from "./Components/Footer";
import FetchUserData from "./service/APIService";

function App() {
  const [language, setLanguage] = useState("");
  const [user, setUser] = useState("");
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (user) {
      getData(user);
    }
  }, [user]);

  // Make an AJAX call using the fetch interface
  const getData = async (user) => {
    await FetchUserData(user)
      .then((response) => {
        if (response !== "Error: user not found") {
          setLanguage(response);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(searchText);
    setSearchText("");
  };

  return (
    <div className="App">
      <Header />
      <GithubUserSearchForm
        handleSubmit={handleSubmit}
        inputData={searchText}
        inputDataHandler={setSearchText}
      />
      {language === "" ? (
        <GitHubUser user={user} language={language} />
      ) : (
        "user not found"
      )}
      <Footer />
    </div>
  );
}

export default App;
