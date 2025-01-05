import './home.css';
import Service from './Service';
import Portfolio from './Portfolio';
import Testimonial from './Testimonial';
export default function Home() {
    return (
        <div>
            <section className="hero">
                <div className="overlay"></div>
                <div>
                <h1>Welcome to Web<span>ora</span></h1>
                <p>Your Partner in Crafting Exceptional Websites</p>
                <div className="cta">
                    <a href="/RequestAWebsite">Request a Website</a>
                </div>
                </div>
            </section>

            <Service />  

            <Portfolio />

            <Testimonial />

        </div>
    )
}