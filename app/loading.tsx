"use client";

import Container from "@/components/shared/Container";
import SkeletonItem from "@/components/shared/SkeletonItem";
import { CSSProperties, useEffect, useState } from "react";

const Loading = () => {
  const [styles, setStyles] = useState<CSSProperties[]>([
    { transform: "scale(1) translateY(0px)", opacity: 1 },
    { transform: "scale(1.2) translateY(5px)", opacity: 0.9 },
    { transform: "scale(1.3) translateY(10px)", opacity: 0.8 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setStyles((prevStyles) => {
        // Shift the styles array by one position
        const newStyles = [...prevStyles];
        const lastStyle = newStyles.pop();
        if (lastStyle) {
          newStyles.unshift(lastStyle);
        }
        return newStyles;
      });
    }, 1000); // 1 second interval

    return () => clearInterval(interval);
  }, []);

  return (
    <Container className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col gap-8">
        {styles.map((style, idx) => (
          <SkeletonItem
            key={`${idx * 1}`}
            style={{
              ...style,
              transition:
                "transform 0.5s ease-in-out, opacity 0.5s ease-in-out",
            }}
          />
        ))}
      </div>
    </Container>
  );
};

export default Loading;
