export default async function (filePath: string) {
  const username = 'tanguyhardion';
  const repo = 'tanguyhardion.github.io';
  const url = `https://api.github.com/repos/${username}/${repo}/commits?path=${filePath}`;

  try {
    const response = await fetch(url);
    const commits = await response.json();
    if (commits.length > 0) {
      const lastCommitDate = commits[0].commit.author.date;
      console.log(new Date(lastCommitDate).toLocaleDateString());
      return new Date(lastCommitDate).toLocaleDateString();
    }
    return null;
  } catch (error) {
    console.error('Error fetching commit date:', error);
    return null;
  }
}
