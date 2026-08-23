import ModalHeader from '@components/ModalHeader'
import GameOver from '@containers/GameOver'
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
    Home: { screen: Home },
    Stats: {
      screen: Stats,
      options: {
        header: (props) => <ModalHeader title='Stats' onClose={() => props.navigation.goBack()} />,
        presentation: 'formSheet',
        sheetCornerRadius: 12,
        sheetGrabberVisible: true,
        contentStyle: { backgroundColor: '#000' },
      },
    },
    Settings: {
      screen: Settings,
      options: {
        header: (props) => (
          <ModalHeader title='Settings' onClose={() => props.navigation.goBack()} />
        ),
        presentation: 'formSheet',
        sheetCornerRadius: 12,
        sheetGrabberVisible: true,
        contentStyle: { backgroundColor: '#000' },
      },
    },
    HowToPlay: {
      screen: HowToPlay,
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
        header: (props) => (
          <ModalHeader title='Game over' onClose={() => props.navigation.goBack()} />
        ),
        presentation: 'formSheet',
        sheetCornerRadius: 12,
        sheetGrabberVisible: true,
        contentStyle: { backgroundColor: '#000' },
      },
    },
  },
})

export const Navigation = createStaticNavigation(RootStack)
