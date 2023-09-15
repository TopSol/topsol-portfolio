import React, { useState, useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer';

export function AnimatedValue({ start, end, duration }) {
  const [value, setValue] = useState(start);
  const [startTimestamp, setStartTimestamp] = useState(null);
  const [animationVisible, setAnimationVisible] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,

  });

  useEffect(() => {
    if (inView) {
      setAnimationVisible(true);
      setStartTimestamp(null);
    }
  }, [inView]);

  const step = (timestamp) => {
    if (!startTimestamp) setStartTimestamp(timestamp);
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    setValue(Math.floor(progress * (end - start) + start));
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };

  useEffect(() => {
    if (animationVisible && inView) {
      window.requestAnimationFrame(step);
    }
  }, [animationVisible, inView]);

  return (
    <div ref={ref}>
      {animationVisible && <div>{value}</div>}
    </div>
  );
}

