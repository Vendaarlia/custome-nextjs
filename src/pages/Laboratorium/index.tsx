
import { work } from '@/pages/data/work';

export default function Laboratory() {
    return (
        <>
        <div className="txtHeader">
            <h1>Laboratory</h1>
            <p>The Crypt for web experiments, concepts, and layouts that push the boundaries of traditional design and showcase the latest in animation techniques.</p>
        </div>

            <div id="worksList">
                {work.map(({ gif, image, title, description, lable, link }, index) => (
                <div className="wrap-work" key={index}>
                <div className="col-work">
                    <div style={{ backgroundImage: `url(${image})` }} className="img-work">
                        <img className="gif-work" src={gif} alt="unique website" loading="lazy" />
                    </div>
                    <div className="work-ads">
                        <h3>{title}</h3>
                        <span className="lable">{lable}</span>
                        <p>{description}</p>
                        <a className="btn-glass" href={link} target="_blank" rel="noopener noreferrer">
                            Live Demo
                        </a>
                    </div>
                </div>
                </div>
                ))}
            </div>

        </>
    )
}