import Image from "next/image";
import { useEffect } from "react";


export default function Home() {

  useEffect(() => {
    const parallax = (e: MouseEvent) => {
      document.querySelectorAll<HTMLDivElement>('.layer').forEach((layer) => {
        const speed = parseFloat(layer.getAttribute('data-speed') || '1');

        const x = (window.innerWidth - e.pageX * speed) / 150;
        const y = (window.innerHeight - e.pageY * speed) / 150;

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    };

    document.addEventListener('mousemove', parallax);

    return () => {
      document.removeEventListener('mousemove', parallax);
    };
  }, []);

  return (
    <>
      <div className="container-home">
          <div className="wrapper-home">
            <div className="text">
              <h1 className="txt">
                  EVERTHING
                  <br />
                  <span>AND <span><a href="./Dungeon" className="button">Enter the Dungeon</a></span></span>
                  ANYTHING
              </h1>
            </div>
          </div>
      </div>
      <section className="prlxbg" >
            <Image data-speed="8" className="layer img-2" alt="home-image" src="/images/home-img/02.png" width={100} height={100} />
            <Image data-speed="-5" className="layer img-3" alt="home-image" src="/images/home-img/03.png" width={100} height={100} />
            <Image data-speed="3" className="layer img-4" alt="home-image" src="/images/home-img/04.png" width={100} height={100} />
            <Image data-speed="-7" className="layer img-5" alt="home-image" src="/images/home-img/05.png" width={100} height={100} />
            <Image data-speed="6" className="layer img-6" alt="home-image" src="/images/home-img/06.png" width={100} height={100} />
            <Image data-speed="-2" className="layer img-7" alt="home-image" src="/images/home-img/07.png" width={100} height={100} />
            <Image data-speed="7" className="layer img-8" alt="home-image" src="/images/home-img/08.png" width={100} height={100} />
            <Image data-speed="-11" className="layer img-9" alt="home-image" src="/images/home-img/09.png" width={100} height={100} />
            <Image data-speed="4" className="layer img-10" alt="home-image" src="/images/home-img/10.png" width={100} height={100} />
        </section>
    </>
  );
}
