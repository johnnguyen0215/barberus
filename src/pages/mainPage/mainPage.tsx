import Navbar, { NavRefObject } from '../../components/navbar/navbar';
import Home from '../home/home';
import About from '../about/about';
import { useRef } from 'react';

const MainPage = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLElement>(null);

  const navbarRef = useRef<NavRefObject>({
    home: homeRef,
    about: aboutRef
  });

  return (
    <>
      <Navbar ref={navbarRef} />
      <Home ref={homeRef} />
      <About ref={aboutRef} />
    </>
  );
};

export default MainPage;
