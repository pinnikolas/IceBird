import {Provider} from 'react-redux';
import store from '../store';

export default function Home() {
  return (
    <Provider store={store}>
      <h1>Hello, it is IceBird</h1>
    </Provider>
  )
}
