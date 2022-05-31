const fetch = require("node-fetch");

const getGithubUser = async (user: string) => {
  const response = await fetch(`https://api.github.com/users/${user}`);
  return await response.json();
};

export { getGithubUser };
