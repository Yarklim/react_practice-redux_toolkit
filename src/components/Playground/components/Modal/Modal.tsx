import { useAppDispatch } from "../../../../app/hooks"
import { resetStore } from "../../store/slices"
import ResultMessage from "./components/ResultMessage"

export interface IModalProps {
  setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>
  isWin: boolean
}

const Modal: React.FC<IModalProps> = (props) => {
  const { setIsShowModal, isWin } = props

  const dispatch = useAppDispatch()

  const handleClose = () => {
    dispatch(resetStore())
    setIsShowModal(false)
  }

  return (
    <div>
      <h3>Modal</h3>
      <ResultMessage isWin={isWin} />
      <button onClick={handleClose}>Start New Game</button>
    </div>
  )
}

export default Modal
