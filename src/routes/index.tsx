import Header from '@containers/Header'
import Home from '@containers/Home'
import HowToPlay from '@containers/HowToPlay'
import Settings from '@containers/Settings'
import Stats from '@containers/Stats'
import { createStaticNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const RootStack = createNativeStackNavigator({
  screenOptions: {
    header: (props) => {
      return <Header onClickNavigate={props.navigation.navigate} />
    },
  },
  screens: {
    Home: {
      screen: Home,
    },
    Stats: {
      screen: Stats,
      options: {
        headerShown: false,
        presentation: 'formSheet',
        sheetAllowedDetents: [0.95],
        sheetCornerRadius: 12,
        sheetGrabberVisible: true,
      },
    },
    Settings: {
      screen: Settings,
      options: {
        headerShown: false,
        presentation: 'formSheet',
        sheetAllowedDetents: [0.95],
        sheetCornerRadius: 12,
        sheetGrabberVisible: true,
      },
    },
    HowToPlay: {
      screen: HowToPlay,
      options: {
        headerShown: false,
        presentation: 'formSheet',
        sheetAllowedDetents: [0.95],
        sheetCornerRadius: 12,
        sheetGrabberVisible: true,
      },
    },
  },
})

export const Navigation = createStaticNavigation(RootStack)
