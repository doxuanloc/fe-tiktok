import styles from "./search.module.scss";
import * as http from "~/utils/http";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import TippyHeadless from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import { Wrapper as WrapperPopper } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import { useEffect, useState, useRef } from "react";
import { useDebounce } from "~/hooks";

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [showSearch, setShowSearch] = useState(true);
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const ref = useRef();

  const debounced = useDebounce(searchValue, 500);

  const handleClear = () => {
    setSearchValue("");
    ref.current.focus();
  };
  const handleClickOutside = () => {
    setShowSearch(false);
  };

  useEffect(() => {
    if (!debounced.trim()) {
      setSearchResult([]);
      return;
    }
    setLoading(true);

    const fetchApi = async () => {
      try {
        const res = await http.get(`users/search`, {
          params: {
            q: debounced,
            type: "less",
          },
        });
        setSearchResult(res.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchApi();
  }, [debounced]);

  return (
    <TippyHeadless
      onClickOutside={handleClickOutside}
      visible={showSearch && searchResult.length > 0}
      interactive
      render={(attrs) => (
        <div className={styles["search-result"]} tabIndex="-1" {...attrs}>
          <WrapperPopper>
            <div className={styles["search-title"]}>Accounts</div>
            {searchResult.map((result) => (
              <AccountItem key={result.id} data={result} />
            ))}
          </WrapperPopper>
        </div>
      )}
    >
      <div className={styles["search"]}>
        <input
          onFocus={() => setShowSearch(true)}
          ref={ref}
          value={searchValue}
          placeholder="Search accounts and video"
          spellCheck={false}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        {!!searchValue && !loading && (
          <button onClick={handleClear} className={styles["clear-btn"]}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}
        {loading && (
          <FontAwesomeIcon className={styles["loading"]} icon={faSpinner} />
        )}

        <button className={styles["search-btn"]}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </TippyHeadless>
  );
}

export default Search;
