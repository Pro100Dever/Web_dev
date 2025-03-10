"use client";

import React, {
  ElementType,
  PropsWithChildren,
  useEffect,
  useRef,
} from "react";

interface AnimatedElementProps {
  as?: ElementType;
  className?: string;
  noHide?: boolean;
}

const AnimatedElement: React.FC<PropsWithChildren<AnimatedElementProps>> = ({
  as: Component = "div",
  className = "",
  noHide = false,
  children,
}) => {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const animatedItems = [
      element,
      ...element.querySelectorAll(".animate__animated"),
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          animatedItems.forEach((item) => {
            if (entry.isIntersecting) {
              item.classList.add("visible");
            } else if (!noHide) {
              item.classList.remove("visible");
            }
          });
        });
      },
      { threshold: 0.2 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [noHide]);

  return (
    <Component ref={ref} className={`animate__animated ${className}`}>
      {children}
    </Component>
  );
};

export default AnimatedElement;
