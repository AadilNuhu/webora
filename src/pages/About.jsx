import './about.css';                                                             
export default function About() {
    return (
        <div>
             <section className="about-us">
                <div className="container">
                <h2>About <span>Webora</span></h2>
                    <p className="description">
                    We are a passionate and dedicated web design agency that creates beautiful, functional, and user-friendly websites. Our team of experts works tirelessly to deliver the best digital solutions that drive business growth. With years of experience, we specialize in building responsive websites that provide seamless user experiences.
                    </p>
                    
                    {/* Agency Story */}
                    <div className="story">
                    <h4>Our <span>Story</span></h4>
                    <p>
                        Webora was founded with the vision of helping small and medium businesses grow through outstanding digital experiences. Starting with just a small team, we quickly gained a reputation for delivering high-quality websites that not only look great but also perform excellently. Today, we have a dynamic team of designers, developers, and strategists who are committed to making the web a better place for businesses and their customers.
                    </p>
                    </div>

                    {/* Mission */}
                    <div className="mission">
                    <h4>Our <span>Mission</span></h4>
                    <p>
                        Our mission is simple: to empower businesses with stunning websites that help them connect with their audience and achieve their goals. Whether it&apos;s increasing conversions, improving user experience, or building brand credibility, we’re here to help you every step of the way.
                    </p>
                    </div>

                    {/* Core Values */}
                    <div className="core-values">
                    <h4>Our Core <span>Values</span></h4>
                    <ul>
                        <li><strong>Innovation:</strong> Constantly evolving with the latest web trends to bring cutting-edge solutions.</li>
                        <li><strong>Customer-Centric:</strong> Focused on delivering results that exceed our clients&apos; expectations.</li>
                        <li><strong>Integrity:</strong> We believe in transparency and honesty in all our dealings.</li>
                        <li><strong>Collaboration:</strong> We work closely with our clients to ensure the best outcomes.</li>
                    </ul>
                    </div>

                    {/* Why Choose Us */}
                    <div className="why-choose-us">
                    <h4>Why <span>Choose Us</span>?</h4>
                    <p>
                        At Webora, we take the time to understand your business, your needs, and your goals. This allows us to create a custom solution tailored to you. Unlike other agencies, we offer:
                    </p>
                    <ul>
                        <li><strong>Personalized Service:</strong> We treat every client like a partner, not just a project.</li>
                        <li><strong>Affordable Pricing:</strong> We offer high-quality services that fit your budget.</li>
                        <li><strong>Proven Results:</strong> Our designs help our clients boost sales, grow their brand, and achieve their goals.</li>
                        <li><strong>Ongoing Support:</strong> We provide continued support and maintenance for all our projects.</li>
                    </ul>
                    </div>

                    {/* Our Services */}
                    <div className="our-services">
                    <h4>Our <span>Services</span></h4>
                    <p>
                        We offer a wide range of web design and development services to meet the needs of our clients. From simple landing pages to complex e-commerce platforms, we have the expertise to deliver:
                    </p>
                    <ul>
                        <li><strong>Custom Web Design</strong> – Tailored designs that reflect your brand and values.</li>
                        <li><strong>Responsive Web Development</strong> – Websites that perform seamlessly on all devices.</li>
                        <li><strong>E-commerce Solutions</strong> – Robust online stores that drive sales and conversions.</li>
                        <li><strong>SEO & Digital Marketing</strong> – Boost your website&apos;s visibility with targeted marketing strategies.</li>
                        <li><strong>Website Maintenance</strong> – Ongoing support to ensure your site runs smoothly.</li>
                    </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}