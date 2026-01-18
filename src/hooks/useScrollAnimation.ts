import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimation = () => {
    const scopeRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Animate elements with class 'animate-up'
            const animateUps = gsap.utils.toArray<HTMLElement>(".animate-up");
            animateUps.forEach((el) => {
                gsap.fromTo(
                    el,
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 85%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );
            });

            // Animate elements with class 'animate-fade'
            const animateFades = gsap.utils.toArray<HTMLElement>(".animate-fade");
            animateFades.forEach((el) => {
                gsap.fromTo(
                    el,
                    { opacity: 0 },
                    {
                        opacity: 1,
                        duration: 1,
                        ease: "power2.inOut",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 80%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );
            });

            // Staggered children animation for containers with 'animate-stagger' class
            // It expects children to have 'stagger-item' class
            const staggerContainers = gsap.utils.toArray<HTMLElement>(".animate-stagger");
            staggerContainers.forEach((container) => {
                const items = container.querySelectorAll(".stagger-item");
                if (items.length > 0) {
                    gsap.fromTo(items,
                        { y: 30, opacity: 0 },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 0.6,
                            stagger: 0.1,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: container,
                                start: "top 80%",
                                toggleActions: "play none none reverse"
                            }
                        }
                    )
                }
            })

        }, scopeRef);

        return () => ctx.revert();
    }, []);

    return scopeRef;
};
