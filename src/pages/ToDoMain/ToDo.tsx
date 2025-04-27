import { useEffect, useState } from "react";
import ToDoInput from "../../ui/ToDoInput/ToDoInput";
import ToDoList, { ToDoListItem } from "../../components/ToDoList/ToDoList";
import ToDoButton from "../../ui/ToDoButton/ToDoButton";

import styles from "./ToDo.module.scss";
import ToggleTheme from "../../components/ToggleTheme/ToggleTheme";

const ToDo = () => {
  const [toDoData, setToDoData] = useState<ToDoListItem[]>([]);
  const [inputData, setInputData] = useState("");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    console.log('const fethedData = localStorage.getItem("toDoList");');
    const fethedData = localStorage.getItem("toDoList");
    if (fethedData) {
      const data = JSON.parse(fethedData);
      setToDoData(data); // Ініціалізація стану з локального сховища
    }
  }, []);

  useEffect(() => {
    if (toDoData.length > 0) {
      // Уникаємо зайвого запису при першому рендері
      console.log('localStorage.setItem("toDoList", JSON.stringify(toDoData))');
      localStorage.setItem("toDoList", JSON.stringify(toDoData));
    }
  }, [toDoData]);

  const addToDoHandler = () => {
    if (inputData) {
      setToDoData((prev) => [
        ...prev,
        { id: Date.now().toString(), isComplyted: false, text: inputData },
      ]);
      setError("");
      setInputData("");
    } else {
      setError("*Empty input");
    }
  };

  const deleteToDoHandler = (id: string) => {
    setToDoData((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };

  const checkToDoHandler = (id: string) => {
    console.log("App.tsx - f checkToDoHandler");
    const filteredItem = toDoData.find((item) => item.id === id);
    if (filteredItem) {
      filteredItem.isComplyted = !filteredItem.isComplyted;
      setToDoData((prev) => [...prev]);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.createToDo}>
          <ToDoInput
            className={styles.input}
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
          <ToDoButton className={styles.button} onClick={addToDoHandler}>
            Add ToDo
          </ToDoButton>
        </div>
        <div className={styles.error}>{error}</div>
        <ToDoList
          data={toDoData}
          onDelete={deleteToDoHandler}
          onCheck={checkToDoHandler}
        />
      </div>
      <ToggleTheme />
    </div>
  );
};

export default ToDo;
