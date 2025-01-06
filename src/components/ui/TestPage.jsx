'use client';

import { useInView } from 'react-intersection-observer';

export default function ColorChangeHeading() {
  const [ref, inView] = useInView({
    triggerOnce: false, // Keep detecting in and out of view
    threshold: 0.6,     // Trigger when 50% of the heading is in view
  });

  return (
    <div className="h-screen flex items-center justify-center">
      <h1
        ref={ref}
        className={`text-4xl lg:text-6xl font-bold transition-colors duration-500 ${
          inView ? 'text-orange-500' : 'text-black'
        }`}
      >
        Transforming Your Ideas into Reality
      </h1>
    </div>
  );
}
