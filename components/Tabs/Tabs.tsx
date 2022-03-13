import classNames from "classnames";
import {
  Children,
  cloneElement,
  ComponentPropsWithoutRef,
  FunctionComponent,
  Key,
  PropsWithChildren,
  ReactElement,
  ReactNode,
  useMemo,
} from "react";

import styles from "./tabs.module.scss";

type TabContentProps = ComponentPropsWithoutRef<"div"> & {
  title: string;
  id: Key;
  children: ReactNode;

  isActive?: boolean;
};

type TabsProps = ComponentPropsWithoutRef<"div"> & {
  children: ReactElement<PropsWithChildren<TabContentProps>>[];

  activeTabID: Key;
  onChangeTabID: (tabId: Key) => void;
};

export const TabContent: FunctionComponent<TabContentProps> = ({
  children,
  isActive,
  className,
  ...props
}) => {
  return (
    <div
      {...props}
      className={classNames(className, styles["tab-content"])}
      data-hidden={!isActive}
      aria-hidden={!isActive}
    >
      {children}
    </div>
  );
};

export const Tabs: FunctionComponent<TabsProps> = ({
  children,
  activeTabID,
  onChangeTabID,
  className,
  ...props
}) => {
  const childrenTabContents = useMemo(
    () =>
      Children.map(children, (child) => {
        const item = child as ReactElement<PropsWithChildren<TabContentProps>>;

        const isActive = item.props.id === activeTabID;

        return cloneElement(item, { isActive });
      }),
    [children, activeTabID]
  );

  const childrenKeyPairs = useMemo(() => {
    return Children.toArray(children).map((child) => {
      const tabChild = child as ReactElement<PropsWithChildren<TabContentProps>>;

      return [tabChild.props.id, tabChild.props.title];
    });
  }, [children]);

  return (
    <div {...props} className={classNames(className, styles["container"])}>
      <div className={styles.buttons}>
        {childrenKeyPairs.map(([childKey, childTitle]) => (
          <button
            key={childKey}
            onClick={() => onChangeTabID(childKey)}
            className={classNames(styles.button, {
              [styles.active]: childKey === activeTabID,
            })}
          >
            {childTitle}
          </button>
        ))}
      </div>
      <div className={styles["tab-content-container"]}>{childrenTabContents}</div>
    </div>
  );
};
