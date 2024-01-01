import { TypographyText } from "../../../../UI"

import styles from "./ResultMessage.module.css"

export interface IResultMessageProps {
  isWin: boolean
}

const ResultMessage: React.FC<IResultMessageProps> = (props) => {
  const { isWin } = props

  return (
    <div className={styles.wrapper}>
      {isWin ? (
        <TypographyText className={styles.text}>
          Congratulation! <br /> You Win!
        </TypographyText>
      ) : (
        <TypographyText className={styles.text}>
          My regrets. <br /> You have lost this game!
        </TypographyText>
      )}
    </div>
  )
}

export default ResultMessage
