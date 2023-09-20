import { createRoot } from 'react-dom/client';
import App from '~/app';
import { store } from './app/store';
import { Provider } from 'react-redux';

const anchor = document.getElementById('root');

if (anchor) {
  createRoot(anchor).render(
    <Provider store={store}>
      <App />
    </Provider>
  );
}
