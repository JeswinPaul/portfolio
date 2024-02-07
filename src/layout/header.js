import React, { useEffect, useState } from 'react'
import './style.css'

export default function Header({appRef}) {
  const [scrollPosition, setScrollPosition] = useState(window.scrollY)

  const handleScroll = () => {
    const newPosition = appRef?.current.scrollTop;
    setScrollPosition(newPosition);
  };

  useEffect(() => {
      appRef?.current.addEventListener('scroll', handleScroll);

      return () => {
          appRef?.current.removeEventListener('scroll', handleScroll);
      };
  }, []);

  return (
    <div className={scrollPosition>0?'Header Header_Black':'Header'}>
        <span>
            <h1>Jeswin Paul</h1>
            <ul>
                <li><a content='Home'>Home</a></li>
                <li><a content='Projects'>Projects</a></li>
                <li><a content='About'>About</a></li>
            </ul>
            <div className='Header_Icon'>≡</div>
        </span>
    </div>
  )
}
