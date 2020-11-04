import styles from './navbar.module.scss';
import { forwardRef, MouseEvent, RefObject } from 'react';
import scrollIntoView from 'scroll-into-view-if-needed';

export interface NavbarProps {

}

export interface NavRefObject {
  [sectionType: string]: RefObject<HTMLElement | HTMLDivElement>
}

const Navbar = forwardRef<NavRefObject, NavbarProps>((props, ref) => {
  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, section: string) => {
    event.preventDefault();

    const navbarRef = (ref as RefObject<NavRefObject>).current || {};

    const sectionRef = navbarRef[section];

    if (sectionRef) {
      scrollIntoView(sectionRef.current as Element, {
        block: 'start',
        behavior: 'smooth',
        scrollMode: 'if-needed'
      });
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navbarContainer}`}>
        <div className={styles.title}>Barberus</div>
        <ul className={styles.navList}>
          <a className={styles.navItem} href="" onClick={(event) => { handleNavClick(event, 'home'); }}>Home</a>
          <a className={styles.navItem} href="" onClick={(event) => { handleNavClick(event, 'about'); }}>About</a>
          <a className={styles.navItem} href="" onClick={(event) => { handleNavClick(event, 'contact'); }}>Contact</a>
        </ul>
      </div>
    </nav>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;
