const {
  convertISODateToAEST,
} = require('../utilities/format-iso-date-to-AEST');
const { sortByDateAsc, sortByDateDsc } = require('./episodes.sort.service');

/**
 * formatting rssData to payload we need
 *
 * @param {Object[]} rssData
 * @param {string} order
 * @returns {Object} payload in the format we want
 */
const formatPayload = (rssData, order) => {
  // destructure the data we need from rssData
  const { title, description, items } = rssData;

  // when no order required, keep the original order in rss data
  let episodes = items;

  // when order=dsc
  if (order === 'dsc') {
    episodes = sortByDateDsc(items);
  }

  // when order=asc
  if (order === 'asc') {
    episodes = sortByDateAsc(items);
  }

  // get the first 10 episodes in array as we need
  episodes = getFirstTenEpisodes(episodes);

  // restructure episodes to the expected format
  episodes = episodes.map((el) => {
    return {
      title: el.title,
      audioUrl: el.enclosure?.url,
      publishedDate: getAESTTime(el.pubDate),
    };
  });

  // construct and response the expected payload
  return {
    title,
    description,
    episodes,
  };
};

/**
 * Convert time to AEST format
 *
 * @param {string} time
 * @returns {string} date string in AEST format
 */
const getAESTTime = (time) =>
  convertISODateToAEST(new Date(time).toISOString());

/**
 * Get the first 10 episodes in given array
 *
 * @param {Object[]} episodes
 * @returns {Object[]} the first 10 episodes
 */
const getFirstTenEpisodes = (episodes) => episodes.slice(0, 10);

module.exports = { formatPayload };
