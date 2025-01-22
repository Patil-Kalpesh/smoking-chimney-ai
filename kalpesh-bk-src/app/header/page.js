"use client";
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header/index';

export default function Page() {
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isScrollingUp, setIsScrollingUp] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
          const currentScrollY = window.scrollY;
    
          if (currentScrollY > lastScrollY) {
            // User is scrolling down
            setIsScrollingUp(false);
          } else {
            // User is scrolling up
            setIsScrollingUp(true);
          }
    
          setLastScrollY(currentScrollY);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [lastScrollY]);
    
  return (
    <div>
        <div className={`header ${isScrollingUp ? 'show-header' : 'hide-header'}`}>
        <Header />
      </div>
    </div>
  )
}
