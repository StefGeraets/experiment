import fetch from "node-fetch";

const getGithubUser = async (user: string) =>
  await fetch(`https://api.github.com/users/${user}`);

export { getGithubUser };
