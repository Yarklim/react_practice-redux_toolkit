import { useAppSelector } from "../../../../app/hooks"
import { TypographyHeader, TypographyText } from "../../../UI"
import { Chip, Stack } from "@mui/material"

import styles from "./Score.module.css"

const Score: React.FC = () => {
  const state = useAppSelector((state) => state.playground)

  return (
    <div className={styles.container}>
      <TypographyHeader>Score</TypographyHeader>
      <TypographyText>
        On error, the "Consecutive successful hits" value is reset to zero
      </TypographyText>

      <Stack direction="row" spacing={1}>
        <Chip
          label={<span>Errors: {state.totalUnsuccessful}</span>}
          variant="outlined"
          className={styles.chipUnsuccess}
        />
        <Chip
          label={<span>Successful: {state.totalSuccessful}</span>}
          variant="outlined"
          className={styles.chipSuccessful}
        />
      </Stack>
    </div>
  )
}

export default Score
