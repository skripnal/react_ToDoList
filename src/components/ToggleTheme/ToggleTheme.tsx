import styles from "./ToggleTheme.module.scss";
import useTheme from "../../hooks/useTheme";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

const ToggleTheme = () => {
  const [theme, changeTheme] = useTheme();

  return (
    <button className={styles.button} onClick={changeTheme}>
      {theme === "light" ? <IoSunnyOutline /> : <IoMoonOutline />}
    </button>
  );
};

export default ToggleTheme;
