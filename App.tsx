import { Navigation } from '@routes/index'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import './styles/global.css'

export default function App() {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  )
}
