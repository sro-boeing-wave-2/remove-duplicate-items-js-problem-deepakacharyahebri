/**
 * Removes all the duplicate items from the collection
 * @param {Array} items
 * @returns {Array}
 */
const removeDuplicateItems = (items) => {
  const set = new Set(items);
  const result = [...set];
  return result;
};

module.exports = removeDuplicateItems;
