const { Map } = require('immutable');

module.exports = getImmutableObject;

function getImmutableObject(object) {
  return Map(object);
}
