import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';
import ReactotronReduxSaga from 'reactotron-redux-saga';

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure()
    .use(reactotronRedux())
    .use(ReactotronReduxSaga())
    .connect();

  tron.clear();
  console.tron = tron;
}
