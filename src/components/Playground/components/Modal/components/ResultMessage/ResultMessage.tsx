export interface IResultMessageProps {
  isWin: boolean
}

const ResultMessage: React.FC<IResultMessageProps> = (props) => {
  const { isWin } = props

  return isWin ? (
    <span>
      Congratulation! <br /> You Win!
    </span>
  ) : (
    <span>
      My regrets. <br /> You have lost this game!
    </span>
  )
}

export default ResultMessage
