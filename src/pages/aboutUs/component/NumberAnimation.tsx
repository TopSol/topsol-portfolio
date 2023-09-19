import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

export function AnimatedValue({ start, end, duration }) {
  const [value, setValue] = useState(start);
  const [animationVisible, setAnimationVisible] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setAnimationVisible(true);
    }
  }, [inView]);

  useEffect(() => {
    if (animationVisible) {
      let startTimestamp = null;

      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setValue(Math.floor(progress * (end - start) + start));

        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };

      if (animationVisible) {
        window.requestAnimationFrame(step);
      }
    }
  }, [animationVisible, duration, end, start]);

  return (
    <div ref={ref}>
      {animationVisible && <div>{value}</div>}
    </div>
  );
}
