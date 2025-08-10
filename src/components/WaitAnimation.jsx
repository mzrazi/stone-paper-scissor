import { useEffect, useState } from "react";

function WaitingAnimation() {
  const icons = ["✊", "✋", "✌️"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % icons.length);
    }, 300); // change every 300ms
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center text-4xl font-bold text-green-400 animate-bounce">
      {icons[index]}
    </div>
  );
}

export default WaitingAnimation;
