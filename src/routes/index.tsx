import GameOver from '@containers/GameOver'
import Header from '@containers/Header'
import Home from '@containers/Home'
import HowToPlayRoot from '@containers/HowToPlay'
import ModalHeader from '@containers/ModalHeader'
import Settings from '@containers/Settings'
import { createStaticNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const RootStack = createNativeStackNavigator({
  screenOptions: {
    header: (props) => {
      return <Header onClickNavigate={props.navigation.navigate} />
    },
  },
  screens: {
    Home: { screen: Home },
    Settings: {
      screen: Settings,
      options: {
        header: (props) => (
          <ModalHeader
            title='Settings'
            onClose={() => {
              props.navigation.goBack()
            }}
          />
        ),
        presentation: 'formSheet',
        sheetCornerRadius: 12,
        sheetGrabberVisible: true,
        contentStyle: { backgroundColor: '#000' },
      },
    },
    HowToPlay: {
      screen: HowToPlayRoot,
      options: {
        header: (props) => (
          <ModalHeader title='How to play' onClose={() => props.navigation.goBack()} />
        ),
        presentation: 'formSheet',
        sheetCornerRadius: 12,
        sheetGrabberVisible: true,
        contentStyle: { backgroundColor: '#000' },
      },
    },
    GameOver: {
      screen: GameOver,
      options: {
        header: () => <ModalHeader title='Game over' />,
        presentation: 'formSheet',
        sheetCornerRadius: 12,
        sheetGrabberVisible: true,
        contentStyle: { backgroundColor: '#000' },
      },
    },
  },
})

export const Navigation = createStaticNavigation(RootStack)
