import { BrowserRouter as Router } from 'react-router-dom';
import App from 'components/App/App';

const AppLoader = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppLoader;