import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./AccountItem.module.scss";
import { Link } from "react-router-dom";

function AccountItem({ data }) {
  return (
    <Link to={`/@${data.nickname}`} className={styles["wrapper"]}>
      <img
        className={styles["avatar"]}
        src={data.avatar}
        alt={data.full_name}
      />
      <div className={styles["info"]}>
        <div className={styles["name"]}>
          <span>{data.full_name}</span>
          {data.tick && (
            <FontAwesomeIcon icon={faCheckCircle} className={styles["check"]} />
          )}
        </div>
        <span className={styles["username"]}>{data.nickname}</span>
      </div>
    </Link>
  );
}

export default AccountItem;
