import cn from "classnames"
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
      {...props}
      className={cn(styles.button, className)}
    >
      {children}
    </MUIButton>
  )
}

export default Button
