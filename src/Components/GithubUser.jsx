const GitHubUser = ({ user, language }) => {
  return (
    <div className="user">
      <h2 className="user-name">
        <span>Github User: </span>
        {user}
      </h2>
      <h2 className="user-language">
        <span> Favourite Language: </span>
        {language}
      </h2>
    </div>
  );
};

export default GitHubUser;
