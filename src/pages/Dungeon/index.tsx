import React from "react";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { crypts } from '../../data/crypts';

export default function Dungeon() {
    const ulRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const divmove = ulRef.current;

        const handleMouseMove = (e: MouseEvent) => {
            const percent = e.clientX / window.innerWidth;
            
            if (divmove) {
                divmove.animate(
                    {
                        transform: `translateX(${percent * divmove.offsetWidth * -1}px)`,
                    },
                    {
                        fill: "forwards",
                        duration: 4000,
                    }
                );
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <>
        <section className="DGN">
            <div className="wrapper-DGN">
                <div className="wrap-DGN">
                    <div className="ul-DGN" id="ul-DGN" ref={ulRef}>
                        <div className="crd-DGN">
                            {crypts.map((crypt) => (
                                <a href={crypt.link} key={crypt.image}>
                                <div className="li-DGN">
                                    <div className="li-DGN LF">
                                        <Image className="img" src={crypt.image} alt="image" width={200} height={200} />
                                    </div>
                                    <div className="li-DGN BG">
                                        <h3>{crypt.title}</h3>
                                        <p>{crypt.subtitle}</p>
                                    </div>
                                </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}