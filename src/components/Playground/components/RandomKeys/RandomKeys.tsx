import { useAppSelector } from "../../../../app/hooks"
import { MAP_ARROW_CODES } from "../../constants"
import { IMapArrowCodes } from "../../types"

export interface IRandomKeysProps {
  isTimerActive: boolean
}

const RandomKeys: React.FC<IRandomKeysProps> = (props) => {
  const state = useAppSelector((state) => state.playground)

  return (
    <div>
      {state.steps.map((el) => (
        <span key={el.step}>
          {MAP_ARROW_CODES[el.currentValue as keyof IMapArrowCodes]}
        </span>
      ))}
    </div>
  )
}

export default RandomKeys
