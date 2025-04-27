import { FC } from "react";
import clsx from "clsx";
import styles from "./ToDoButton.module.scss";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const ToDoButton: FC<Props> = ({ className, ...props }) => {
  return (
    <button className={clsx(styles.button, className)} {...props}>
      {props.children}
    </button>
  );
};

export default ToDoButton;
