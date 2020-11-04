import styles from './navbar.module.scss';
import { forwardRef } from 'react';

interface NavbarProps {

}

const Navbar = forwardRef<HTMLElement, NavbarProps>((props, ref) => {
  const handleAboutClick = (event: Event) => {
    event.preventDefault();

    if (ref) {
      ref.current.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navbarContainer}`}>
        <div className={styles.title}>Barberus</div>
        <ul className={styles.navList}>
          <a className={styles.navItem} href="">Home</a>
          <a className={styles.navItem} href="" onClick={handleAboutClick}>About</a>
          <a className={styles.navItem} href="">Contact</a>
        </ul>
      </div>
    </nav>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;
