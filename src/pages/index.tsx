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
            <img data-speed="-10" className="layer img-1" src="img/01.png"/>
            <img data-speed="8" className="layer img-2"  src="./img/02.png"/>
            <img data-speed="-5" className="layer img-3"  src="./img/03.png"/>
            <img data-speed="3" className="layer img-4"  src="./img/04.png"/>
            <img data-speed="-7" className="layer img-5"  src="./img/05.png"/>
            <img data-speed="6" className="layer img-6"  src="./img/06.png"/>
            <img data-speed="-2" className="layer img-7"  src="./img/07.png"/>
            <img data-speed="7" className="layer img-8"  src="./img/08.png"/>
            <img data-speed="-11" className="layer img-9"  src="./img/09.png"/>
            <img data-speed="2" className="layer img-10"  src="./img/10.png"/>
        </section>
    </>
  );
}
