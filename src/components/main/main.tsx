import Navbar from '../navbar/navbar';
import navStyles from '../navbar/navbar.module.scss';
import Home from '../home/home';
import About from '../about/about';
import { FC, ReactElement, useRef, MouseEvent, RefObject } from 'react';
import scrollIntoView from 'scroll-into-view-if-needed';

const Main: FC = (): ReactElement => {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const handleNavClick = (
    event: MouseEvent<HTMLAnchorElement>,
    section: RefObject<HTMLElement | HTMLDivElement>
  ) => {
    event.preventDefault();

    if (section) {
      scrollIntoView(section.current as Element, {
        block: 'start',
        behavior: 'smooth',
        scrollMode: 'if-needed'
      });
    }
  };

  console.log('main');

  return (
    <>
      <Navbar>
        <ul className={navStyles.navList}>
          <a
            className={navStyles.navItem}
            href=""
            onClick={(event) => {
              handleNavClick(event, homeRef);
            }}
          >
            Home
          </a>
          <a
            className={navStyles.navItem}
            href=""
            onClick={(event) => {
              handleNavClick(event, aboutRef);
            }}
          >
            About
          </a>
          <a
            className={navStyles.navItem}
            href=""
            onClick={(event) => {
              handleNavClick(event, contactRef);
            }}
          >
            Contact
          </a>
        </ul>
      </Navbar>
      <Home ref={homeRef} />
      <About ref={aboutRef} />
    </>
  );
};

export default Main;
