import ReactDOM from 'react-dom';

import './application.scss';
import { View } from './components/View';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.createRoot(document.querySelector('#app')).render(<View />);
});
