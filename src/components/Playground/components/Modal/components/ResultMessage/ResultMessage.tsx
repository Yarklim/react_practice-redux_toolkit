import { TypographyText } from "../../../../../UI"

export interface IResultMessageProps {
  isWin: boolean
}

const ResultMessage: React.FC<IResultMessageProps> = (props) => {
  const { isWin } = props

  return isWin ? (
    <TypographyText>
      Congratulation! <br /> You Win!
    </TypographyText>
  ) : (
    <TypographyText>
      My regrets. <br /> You have lost this game!
    </TypographyText>
  )
}

export default ResultMessage
