import { FC } from "react";
import clsx from "clsx";
import styles from "./ToDoInput.module.scss";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

const ToDoInput: FC<Props> = ({ className, ...props }) => {
  return <input className={clsx(styles.input, className)} {...props} />;
};

export default ToDoInput;
