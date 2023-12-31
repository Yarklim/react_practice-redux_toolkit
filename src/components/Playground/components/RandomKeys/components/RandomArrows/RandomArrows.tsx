import cn from "classnames"
import { useAppSelector } from "../../../../../../app/hooks"
import { MAP_ARROW_CODES } from "../../../../constants"
import { IPlaygroundStepsStep } from "../../../../store/types"
import { IMapArrowCodes } from "../../../../types"

import stylesCommon from "../../RandomKeys.module.css"
import styles from "./RandomArrows.module.css"

const RandomArrows: React.FC = () => {
  const state = useAppSelector((state) => state.playground)

  const getStylesRandomKeys = (el: IPlaygroundStepsStep): string => {
    return cn(
      el.success && el.success !== null && styles.iconSuccess,
      !el.success && el.success !== null && styles.iconUnsuccess,
      stylesCommon.icon,
    )
  }

  return (
    <div className={stylesCommon.wrapper}>
      {state.steps.map((el) => (
        <span key={el.step} className={getStylesRandomKeys(el)}>
          {MAP_ARROW_CODES[el.currentValue as keyof IMapArrowCodes]}
        </span>
      ))}
    </div>
  )
}

export default RandomArrows
