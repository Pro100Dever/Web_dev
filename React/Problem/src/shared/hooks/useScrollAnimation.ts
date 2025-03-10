'use client';
import { useEffect, useRef } from "react";

export const useScrollAnimation = (className: string = "visible", noHide: boolean = false) => {
    const ref = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    element.classList.add(className);
                } else if (!noHide) {
                    element.classList.remove(className);
                }
            },
            { threshold: 0.5 }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [className, noHide]);

    return ref;
};
