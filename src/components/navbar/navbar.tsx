import styles from './navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navbarContainer}`}>
        <div className={styles.title}>Barberus</div>
        <ul className={styles.navList}>
          <a className={styles.navItem} href="">Home</a>
          <a className={styles.navItem} href="">About</a>
          <a className={styles.navItem} href="">Contact</a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
