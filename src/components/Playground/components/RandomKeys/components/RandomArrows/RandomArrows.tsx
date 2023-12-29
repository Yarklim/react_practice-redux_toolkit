import { useAppSelector } from "../../../../../../app/hooks"
import { MAP_ARROW_CODES } from "../../../../constants"
import { IPlaygroundStepsStep } from "../../../../store/types"
import { IMapArrowCodes } from "../../../../types"

import styles from "./RandomArrows.module.css"

const RandomArrows: React.FC = () => {
  const state = useAppSelector((state) => state.playground)

  const getStylesRandomKeys = (el: IPlaygroundStepsStep): string => {
    if (el.success && el.success !== null) {
      return styles.iconSuccess
    }
    if (!el.success && el.success !== null) {
      return styles.iconUnsuccess
    }

    return styles.icon
  }

  return (
    <>
      {state.steps.map((el) => (
        <span key={el.step} className={getStylesRandomKeys(el)}>
          {MAP_ARROW_CODES[el.currentValue as keyof IMapArrowCodes]}
        </span>
      ))}
    </>
  )
}

export default RandomArrows
