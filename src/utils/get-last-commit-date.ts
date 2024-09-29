export default async function (filePath: string): Promise<string | null> {
  const username = 'tanguyhardion';
  const repo = 'tanguyhardion.github.io';
  const url = `https://api.github.com/repos/${username}/${repo}/commits?path=src/public${filePath}`;

  try {
    const response = await fetch(url);
    const commits = await response.json();
    if (commits.length > 0) {
      const lastCommitDate = commits[0].commit.author.date;
      return getDuration(new Date(lastCommitDate));
    }
    return null;
  } catch (error) {
    console.error('Error fetching commit date:', error);
    return null;
  }
}

function getDuration(date: Date) {
  // return day, month, or year depending on the duration
  // if 0 then return 'today'
  const now = new Date();
  const duration = now.getTime() - date.getTime();
  const seconds = duration / 1000;
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;
  const months = days / 30;
  const years = days / 365;

  if (days < 30) {
    return days < 1 ? 'today' : days < 2 ? 'yesterday' : `${Math.floor(days)} days ago`;
  } else if (months < 12) {
    return `${Math.floor(months)} months ago`;
  } else {
    return `${Math.floor(years)} years ago`;
  }
}
