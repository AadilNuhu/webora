import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Service.css';
import { faPaintBrush, faLaptopCode, faShoppingCart, faSearch, faTools } from '@fortawesome/free-solid-svg-icons';

export default function Services() {
    return (
        <section className="services">
            <div className="container">
                <h2>Our <span>Services</span></h2>
                <p className="services-description">
                    At Webora, we offer a wide range of web design and development services that are tailored to meet your business needs. Our team works closely with you to create stunning, functional, and user-friendly websites that help your business grow.
                </p>
                
                {/* Service 1: Custom Web Design */}
                <div className="service-item">
                    <div className="service-icon">
                        <FontAwesomeIcon icon={faPaintBrush} />
                    </div>
                    <h3>Custom Web Design</h3>
                    <p>
                        Our custom web design services are tailored to your brand. We ensure your website is visually stunning and effectively communicates your business values and goals.
                    </p>
                </div>

                {/* Service 2: Responsive Web Development */}
                <div className="service-item">
                    <div className="service-icon">
                        <FontAwesomeIcon icon={faLaptopCode} />
                    </div>
                    <h3>Responsive Web Development</h3>
                    <p>
                        We build websites that are fully responsive, ensuring they provide an optimal viewing experience across all devices. Whether on mobile, tablet, or desktop, your website will look and function flawlessly.
                    </p>
                </div>

                {/* Service 3: E-commerce Solutions */}
                <div className="service-item">
                    <div className="service-icon">
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </div>
                    <h3>E-commerce Solutions</h3>
                    <p>
                        Our e-commerce solutions help businesses sell their products online efficiently. We build secure, scalable, and user-friendly online stores that help you drive sales and conversions.
                    </p>
                </div>

                {/* Service 4: SEO & Digital Marketing */}
                <div className="service-item">
                    <div className="service-icon">
                        <FontAwesomeIcon icon={faSearch} />
                    </div>
                    <h3>SEO & Digital Marketing</h3>
                    <p>
                        We provide search engine optimization (SEO) services to increase your website&apos; s visibility. Our digital marketing strategies are designed to help you reach a larger audience and drive traffic to your site.
                    </p>
                </div>

                {/* Service 5: Website Maintenance */}
                <div className="service-item">
                    <div className="service-icon">
                        <FontAwesomeIcon icon={faTools} />
                    </div>
                    <h3>Website Maintenance</h3>
                    <p>
                        We offer ongoing website maintenance to ensure your site stays up-to-date, secure, and performs at its best. Our maintenance services include updates, security patches, and regular backups.
                    </p>
                </div>
            </div>
        </section>
    );
}