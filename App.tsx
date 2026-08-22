import Home from '@containers/Home'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import './styles/global.css'

export default function App() {
  return (
    <SafeAreaProvider>
      <Home />
    </SafeAreaProvider>
  )
}
