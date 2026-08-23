import HowToPlay from '@pages/HowToPlay'
import { useNavigation } from '@react-navigation/native'

const HowToPlayRoot = () => {
  const navigation = useNavigation()

  return <HowToPlay onClose={() => navigation.goBack()} />
}

export default HowToPlayRoot
