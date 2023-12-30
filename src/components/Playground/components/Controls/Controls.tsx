import Button from "../../../UI/Button"

export interface IControlProps {
  isTimerActive: boolean
  setIsTimerActive: React.Dispatch<React.SetStateAction<boolean>>
}

const Controls: React.FC<IControlProps> = (props) => {
  const { isTimerActive, setIsTimerActive } = props
  return (
    <div>
      <Button onClick={() => setIsTimerActive(true)} disabled={isTimerActive}>
        Play
      </Button>
      <Button onClick={() => setIsTimerActive(false)} disabled={!isTimerActive}>
        Pause
      </Button>
    </div>
  )
}

export default Controls
