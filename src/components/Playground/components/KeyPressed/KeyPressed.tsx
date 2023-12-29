import { useCallback, useEffect } from "react"
import { useAppDispatch } from "../../../../app/hooks"
import { setEnteredValue } from "../../store/slices"
import { MAP_ARROW_CODES } from "../../constants"

export interface IKeyPressedProps {
  isTimerActive: boolean
}

const KeyPressed: React.FC<IKeyPressedProps> = (props) => {
  const { isTimerActive } = props

  const dispatch = useAppDispatch()

  const handleKeyDown = useCallback(
    (el: KeyboardEvent) => {
      if (MAP_ARROW_CODES.hasOwnProperty(el.key) && isTimerActive) {
        dispatch(setEnteredValue(el.key))
      }
    },
    [dispatch, isTimerActive],
  )

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  })

  return <div>KeyPressed</div>
}

export default KeyPressed
