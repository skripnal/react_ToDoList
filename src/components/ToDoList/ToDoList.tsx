import { FC } from "react";
import { FaCheck } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";

import styles from "./ToDoList.module.scss";

export type ToDoListItem = {
  id: string;
  text: string;
  isComplyted: boolean;
};

interface Props {
  data: ToDoListItem[];
  onDelete: (id: string) => void;
  onCheck: (id: string) => void;
}

const ToDoList: FC<Props> = ({ data, onDelete, onCheck }) => {
  return (
    <div className={styles.wrapper}>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <div>{item.text}</div>
            <div className={styles.actionButtons}>
              <button onClick={() => onCheck(item.id)}>
                {item.isComplyted ? (
                  <FaCheck color="green" />
                ) : (
                  <FaCheck color="grey" />
                )}
              </button>
              <button onClick={() => onDelete(item.id)}>
                <MdDeleteOutline color="red" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
