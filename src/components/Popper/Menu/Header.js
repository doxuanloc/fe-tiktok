import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "~/components/Button";
import styles from "./Menu.module.scss";

function Header({ title, onBack }) {
  return (
    <header className={styles["header-menu"]}>
      <Button className={styles["back-btn"]} onClick={onBack}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </Button>
      <p className={styles["header-title"]}>{title}</p>
    </header>
  );
}

export default Header;
