/**
 * sort episodes by pubDate in dsc order
 * @param {Object[]} episodes
 * @returns {Object[]} sorted array of episode objects
 */
const sortByDateDsc = (episodes) => {
  // sort by date in dsc order
  const sortedEpisodes = episodes.sort(
    (a, b) => new Date(b.pubDate) - new Date(a.pubDate)
  );

  return sortedEpisodes;
};

/**
 * sort episodes by pubDate in asc order
 * @param {Object[]} episodes
 * @returns {Object[]} sorted array of episode objects
 */
const sortByDateAsc = (episodes) => {
  // sort by date in asc order
  const sortedEpisodes = episodes.sort(
    (a, b) => new Date(a.pubDate) - new Date(b.pubDate)
  );

  return sortedEpisodes;
};

module.exports = { sortByDateAsc, sortByDateDsc };
