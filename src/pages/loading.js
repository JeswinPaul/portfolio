import React, { useEffect, useState } from 'react'
import "./style.css"

import HeroImg from '../assets/hero.png'
import Project1 from '../assets/1.webp'
import Project2 from '../assets/2.webp'
import Project3 from '../assets/3.webp'
import Project4 from '../assets/4.webp'
import Project5 from '../assets/5.webp'
import Project6 from '../assets/6.webp'
import Project7 from '../assets/7.webp'
import Project8 from '../assets/8.webp'
import Project9 from '../assets/9.webp'
import Project10 from '../assets/10.webp'
import Project11 from '../assets/11.webp'
import Project12 from '../assets/12.webp'
import Project13 from '../assets/13.webp'
import Project14 from '../assets/14.webp'
import Project15 from '../assets/15.webp'
import Project16 from '../assets/17.webp'

export default function Loading() {
  const [areAllImagesLoaded, setAreAllImagesLoaded] = useState(false);
  const imageUrls = [
    HeroImg,
    Project1,
    Project2,
    Project3,
    Project4,
    Project5,
    Project6,
    Project7,
    Project8,
    Project9,
    Project10,
    Project11,
    Project12,
    Project13,
    Project14,
    Project15,
    Project16,
  ];

  useEffect(() => {
    let loadedCount = 0;

    const checkAllImagesLoaded = () => {
      if (loadedCount === imageUrls.length) {
        setAreAllImagesLoaded(true);
      }
    };

    const preloadImage = (url) => {
      const img = new Image();
      img.onload = () => {
        loadedCount++;
        checkAllImagesLoaded();
      };
      img.src = url;
    };

    imageUrls.forEach((url) => preloadImage(url));

    return () => {
      imageUrls.forEach((url) => {
        const img = new Image();
        img.src = url;
      });
    };
  }, [imageUrls]);

  return (
    <div className={areAllImagesLoaded? 'Loading' : 'Loading Loading_Show'}>
        <span class="loader"></span>
    </div>
  )
}
