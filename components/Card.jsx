import { animate } from "motion";
import { useRef } from "react";

export default function Card() {
  const ref = useRef(null);

  const handleClick = () => {
    animate(
      ref.current,
      {
        scale: [1, 1.08, 1],
        rotate: [0, 8, 0]
      },
      {
        duration: 0.6,
        easing: "ease-in-out"
      }
    );
  };

  return (
    <div className="card" ref={ref} onClick={handleClick}>
      <div className="card-title">Premium Card</div>
      <div className="card-subtitle">Tap for animation</div>
    </div>
  );
}