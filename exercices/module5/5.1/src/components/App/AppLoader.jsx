import { ProviderWrapper as CounterProvider } from 'contexts/countersContext'
import App from './App';

const AppLoader = () => {
  return (
    <CounterProvider>
      <App />
    </CounterProvider>
  );
};

export default AppLoader;
