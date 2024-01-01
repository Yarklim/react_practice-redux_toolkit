import cn from "classnames"
import { Modal as MaterialModal } from "@mui/material"
import { useAppDispatch } from "../../../../app/hooks"
import { Button } from "../../../UI"
import { resetStore } from "../../store/slices"
import ResultMessage from "./ResultMessage"

import styles from "./Modal.module.css"

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
    <MaterialModal open onClose={handleClose} className={styles.wrapper}>
      <div
        className={cn(
          styles.container,
          isWin ? styles.modalSuccess : styles.modalUnsuccess,
        )}
      >
        <ResultMessage isWin={isWin} />
        <Button onClick={handleClose}>Start New Game</Button>
      </div>
    </MaterialModal>
  )
}

export default Modal
