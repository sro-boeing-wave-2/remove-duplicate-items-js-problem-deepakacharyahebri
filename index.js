/**
 * Removes all the duplicate items from the collection
 * @param {Array} items
 * @returns {Array}
 */
const removeDuplicateItems = items => [...new Set(items)];

module.exports = removeDuplicateItems;
