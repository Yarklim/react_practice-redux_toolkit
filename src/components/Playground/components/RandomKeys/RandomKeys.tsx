import { useAppSelector } from "../../../../app/hooks"
import { TypographyHeader } from "../../../UI"
import RandomArrows from "./components/RandomArrows"
import WelcomeText from "./components/RandomArrows/WelcomeText"

import styles from "./RandomKeys.module.css"

export interface IRandomKeysProps {
  isTimerActive: boolean
}

const RandomKeys: React.FC<IRandomKeysProps> = (props) => {
  const state = useAppSelector((state) => state.playground)
  const { isTimerActive } = props

  return (
    <div>
      <TypographyHeader>Random keys</TypographyHeader>

      {state.steps.length === 0 ? (
        <WelcomeText isTimerActive={isTimerActive} />
      ) : (
        <RandomArrows />
      )}
    </div>
  )
}

export default RandomKeys
