import React,{useState,useEffect,useRef} from 'react'

export function AnimatedValue({ start, end, duration }) {
  const [value, setValue] = useState(start);
  const [startTimestamp, setStartTimestamp] = useState(null);

  const step = (timestamp) => {
    if (!startTimestamp) setStartTimestamp(timestamp);
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    setValue(Math.floor(progress * (end - start) + start));
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };

  useEffect(() => {
    window.requestAnimationFrame(step);
  }, []);
  return <div>{value}</div>;

}
