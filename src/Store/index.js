import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
// Middlewares
import createSagaMiddleware from 'redux-saga';

// Reducers
import rootReducer from './reducers';
import appSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  const middlewares = [sagaMiddleware];
  const enhancers = [
    applyMiddleware(...middlewares),
  ];
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // TODO Try to remove when `react-router-redux` is out of beta, LOCATION_CHANGE should not be fired more than once after hot reloading
        // Prevent recomputing reducers for `replaceReducer`
        shouldHotReload: false,
      })
      : compose;
  const store = createStore(
    rootReducer,
    composeEnhancers(...enhancers),
  );

  sagaMiddleware.run(appSaga);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers');
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
