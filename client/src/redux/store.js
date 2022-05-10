import { Provider } from 'react-redux';
import { configureStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './root-reducer'; 

const sagaMiddleware = createSagaMiddleware();
const store = configureStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga)

export default store;