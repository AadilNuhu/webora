import './Portfolio.css';
import hamdaniyyah from '../images/hamdaniyya.png';
import almoruff from '../images/almoruff.png';
import cruise from '../images/cruise-masters.png';
import nufazk from '../images/nufazk.png';
import pos from '../images/pos.png';
import shs from '../images/shs-website.png';

const Portfolio = () => {
  const projects = [
    {
      title: 'Hamdaniyya',
      description: 'This is a networking website for old student. It showcases the website we built for a client.',
      image: hamdaniyyah, // Replace with actual image paths
      link: 'http://hamdaniyya.x10.mx', // Link to the project or its live demo
    },
    {
      title: 'Almoruff Enterprise',
      description: 'Almoruff Enterprise is an ecommerce website that sells all kinds of sewing machines and it has a smooth user interface.',
      image: almoruff,
      link: 'https://almoruffgh.vercel.app',
    },
    {
      title: 'Cruise Masters',
      description: 'Cruise Masters is a travel agency website that offers a wide range of travel packages and services. It is a fully responsive website and it also allows you to book your dream cruise.',
      image: cruise,
      link: 'https://cruise-masters.vercel.app',
    },
    {
      title: 'Point Of Sale',
      description: 'Point of Sale is a web application that helps businesses manage their sales and inventory. It is a user-friendly and efficient system that simplifies the sales process.',
      image: pos,
      link: 'https://pos-sigma-lake.vercel.app',
    },
    {
      title: 'Nufazk',
      description: 'Nufazk is also a ecommerce website that sells all kinds of laptops, accessories and many electrical gadget.',
      image: nufazk,
      link: 'https://nufaz.vercel.app',
    },
    {
      title: 'Shs Website',
      description: 'This is a school website that showcase the school and the activities that goes on in the school.',              
      image: shs,
      link: 'https://shs-website.vercel.app',
    },
    
    // Add more projects as needed below this line in the future
  ];

  return (
    <section className="portfolio">
      <div className="container">
        <h2>Our <span>Portfolio</span></h2>
        <p className="portfolio-description">
          Take a look at some of the amazing websites we&apos;ve built for our clients. From custom designs to e-commerce platforms, we deliver quality and functionality.
        </p>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div className="portfolio-item" key={index}>
              <img src={project.image} alt={project.title} className="project-image" />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
