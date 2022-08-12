const GitHubUser = ({ user, language }) => {
  return user.length > 0 ? (
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
  ) : (
    <div className="user">
      <h2>Spying into other developers most used language starts here. Punch in a name!</h2>
    </div>
  );
};

export default GitHubUser;
