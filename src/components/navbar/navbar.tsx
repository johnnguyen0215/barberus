import { FC, PropsWithChildren, ReactElement } from 'react';
import styles from './navbar.module.scss';

const Navbar: FC = (props: PropsWithChildren<unknown>): ReactElement => {
  const { children } = props;

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navbarContainer}`}>
        <div className={styles.title}>Barberus</div>
        {children}
      </div>
    </nav>
  );
};

Navbar.displayName = 'Navbar';

export default Navbar;
