import { StatusBar } from 'react-native';
import Dashboard from './src/pages/Dashboard';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#1d1d2e" barStyle="light-content" translucent={false} />
      <Dashboard />
    </>
  );
}

