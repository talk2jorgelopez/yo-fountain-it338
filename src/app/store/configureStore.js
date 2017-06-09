var createStore = require('redux').createStore;
var rootReducer = require('../reducers/index');

function configureStore(initialState) {
  var store = createStore(rootReducer, initialState);
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', function () {
      var nextReducer = require('../reducers').default;
      store.replaceReducer(nextReducer);
    });
  }
  return store;
}

module.exports = configureStore;
