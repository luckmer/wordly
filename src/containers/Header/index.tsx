import Header from '@components/Header'
import { FC } from 'react'

export interface IProps {
  onClickNavigate: (routeName: string) => void
}

const HeaderRoot: FC<IProps> = ({ onClickNavigate }) => {
  return (
    <Header
      onClickChart={() => {
        onClickNavigate('Stats')
      }}
      onClickQuestionMark={() => {
        onClickNavigate('HowToPlay')
      }}
      onClickSettings={() => {
        onClickNavigate('Settings')
      }}
    />
  )
}

export default HeaderRoot
