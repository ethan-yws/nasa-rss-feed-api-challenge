/**
 * get the latest 10 episodes
 * @param episodes
 * @returns
 */
const getLatestTenEpisodes = (episodes) => {
  // sort by date in dsc order
  const sortedEpisodes = episodes.sort(
    (a, b) => new Date(b.pubDate) - new Date(a.pubDate)
  );
  // get 10 episodes
  const latestTenEpisodes = sortedEpisodes.slice(0, 10);

  return latestTenEpisodes;
};

/**
 * get the first 10 episodes
 * @param episodes
 * @returns
 */
const getFirstTenEpisodes = (episodes) => {
  // sort by date in asc order
  const sortedEpisodes = episodes.sort(
    (a, b) => new Date(a.pubDate) - new Date(b.pubDate)
  );
  // get 10 episodes
  const firstTenEpisodes = sortedEpisodes.slice(0, 10);

  return firstTenEpisodes;
};

module.exports = { getLatestTenEpisodes, getFirstTenEpisodes };
