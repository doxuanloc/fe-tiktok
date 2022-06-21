import styles from "./Menu.module.scss";
import HeadlessTippy from "@tippyjs/react/headless";
import { Wrapper as WrapperPopper } from "~/components/Popper";
import MenuItem from "./MenuItem";
import Header from "./Header";
import { useState } from "react";

function Menu({ children, items = [] }) {
  const [history, setHistory] = useState([{ data: items }]);

  const current = history[history.length - 1];
  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItem
          data={item}
          key={index}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            }
          }}
        />
      );
    });
  };
  return (
    <HeadlessTippy
      delay={[0, 50]}
      interactive
      offset={[10, 10]}
      placement="bottom-end"
      onHide={() => setHistory((prev) => prev.slice(0, 1))}
      render={(attrs) => (
        <div className={styles["content"]} tabIndex="-1" {...attrs}>
          <WrapperPopper className={styles["menu-popper"]}>
            {history.length > 1 && (
              <Header
                title="Language"
                onBack={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1));
                }}
              />
            )}
            {renderItems()}
          </WrapperPopper>
        </div>
      )}
    >
      {children}
    </HeadlessTippy>
  );
}

export default Menu;
