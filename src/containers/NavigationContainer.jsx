import React, { useState, useEffect } from 'react';

/* import component */
import Navigation from '../components/NavigationComponent/Navigation';

const NavigationContainer = () => {
  const [scrollY, setScrollY] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY === 0
        ? setScrollY(false)
        : window.scrollY > 50 && setScrollY(true);
    };
    window.addEventListener('scroll', handleScroll);
    // 뒷정리 함수
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <Navigation scrollNav={scrollY} />;
};

export default React.memo(NavigationContainer);
