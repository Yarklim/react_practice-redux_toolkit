import { Button as MUIButton, ButtonProps } from "@mui/material"

import styles from "./Button.module.css"

export interface IButtonProps extends ButtonProps {
  //
}

const Button: React.FC<IButtonProps> = (props) => {
  const { children, className = "" } = props

  return (
    <MUIButton
      variant="contained"
      size="small"
      className={styles.button}
      {...props}
    >
      {children}
    </MUIButton>
  )
}

export default Button
