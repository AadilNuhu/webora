import img1 from '../images/img1.jpeg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';

const Testimonial = () => {
  const testimonials = [
    {
      name: 'Nuhu Muhamed',
      company: 'Nufazk',
      feedback: 'Webora transformed our website into a modern and user-friendly platform. Their team is highly skilled and professional. We are extremely satisfied with the final product.',
      image: img1, // Replace with actual image paths
    },
    {
      name: 'Jane Smith',
      company: 'Creative Solutions',
      feedback: 'Working with Webora was a great experience! They understood our needs and delivered a beautiful website that exceeded our expectations. Highly recommended!',
      image: img2,
    },
    {
      name: 'Paul Johnson',
      company: 'Cruise Masters',
      feedback: 'The team at Webora is excellent. They helped us revamp our outdated website, and the new one is faster, more secure, and much more engaging. Thank you!',
      image: img3,
    },
    // Add more testimonials as needed                    
  ];

  return (
    <section className="testimonial">
      <div className="container">
        <h2>Client <span>Testimonials</span></h2>
        <p className="testimonial-description">
          Here&apos;s what our clients have to say about working with Webora. We take pride in delivering exceptional results and ensuring every client is fully satisfied.
        </p>

        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-item" key={index}>
              <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
              <h3>{testimonial.name}</h3>
              <p className="company">{testimonial.company}</p>
              <p className="feedback">&quot;{testimonial.feedback}&quot;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
