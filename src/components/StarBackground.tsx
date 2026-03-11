"use client";

import { useEffect, useState } from "react";

interface Star {
    id: number;
    size: number;
    x: number;
    y: number;
    opacity: number;
    animationDuration: number;
}

interface Meteor {
    id: number;
    size: number;
    x: number;
    y: number;
    delay: number;
    animationDuration: number;
}

export const StarBackground = () => {
    const [stars, setStars] = useState<Star[]>([]);
    const [meteros, setMeteros] = useState<Meteor[]>([]);

    useEffect(() => {
        const generateStars = () => {
            const numberOfStars = Math.floor(
                (window.innerWidth * window.innerHeight) / 10000
            );

            const newStars: Star[] = [];

            for (let i = 0; i < numberOfStars; i++) {
                newStars.push({
                    id: i,
                    size: Math.random() * 3 + 1,
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    opacity: Math.random() * 0.5 + 0.5,
                    animationDuration: Math.random() * 8 + 4
                });
            }

            setStars(newStars);
        };

        const generateMeteros = () => {
            const numberOfMeteros = 4;
            const newMeteros: Meteor[] = [];

            for (let i = 0; i < numberOfMeteros; i++) {
                newMeteros.push({
                    id: i,
                    size: Math.random() * 2 + 1,
                    x: Math.random() * 100,
                    y: Math.random() * 20,
                    delay: Math.random() * 15,
                    animationDuration: Math.random() * 6 + 6
                });
            }

            setMeteros(newMeteros);
        };

        generateStars();
        generateMeteros();

        const handleResize = () => {
            generateStars();
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="star-container">
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="star animate-pulse-sublet"
                    style={{
                        width: star.size + "px",
                        height: star.size + "px",
                        left: star.x + "%",
                        top: star.y + "%",
                        opacity: star.opacity,
                        animationDuration: star.animationDuration + "s",
                    } as React.CSSProperties}
                />
            ))}

            {meteros.map((metero) => (
                <div
                    key={metero.id}
                    className="meteor animate-meteor"
                    style={{
                        width: metero.size * 50 + "px",
                        height: metero.size + "px",
                        left: metero.x + "%",
                        top: metero.y + "%",
                        animationDelay: metero.delay + "s",
                        animationDuration: metero.animationDuration + "s",
                    } as React.CSSProperties}
                />
            ))}
        </div>
    );
};
