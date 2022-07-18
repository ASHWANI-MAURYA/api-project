import Navigation from './Component/navigation';
import { Text } from 'react-native';
import { AuthProvider } from './Component/context/AuthContext';
import HomeScreen from "./Screen/homeScreen";
import './Cross-origi'

export default function App() {
  return (
    <>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </>
  );
}

