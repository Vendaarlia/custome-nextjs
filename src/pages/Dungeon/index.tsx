import { useEffect, useRef } from "react";

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
                            <a href="http://">
                                <div className="li-DGN">
                                    <div className="li-DGN LF"></div>
                                    <div className="li-DGN BG">
                                        <h3>SMITCH <br />Penempa Warna</h3>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className="crd-DGN">
                            <a href="http://">
                                <div className="li-DGN">
                                    <div className="li-DGN LF"></div>
                                    <div className="li-DGN BG">
                                        <h3>PORTO <br />Penjelajah Waktu</h3>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}