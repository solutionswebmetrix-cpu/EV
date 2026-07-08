import React from 'react';
import { motion } from 'framer-motion';
import banner1 from '../assets/banner 1.png';
import aboutProductImage from '../assets/Product/Aero Supreme.png';
import factoryImage from '../assets/Factory.jpeg';
import PageBanner from '../components/PageBanner';
import './About.css';

const About = () => {
  const journey = [
    { year: '2018', title: 'Foundation', desc: 'Priya Global established with a vision for sustainable mobility' },
    { year: '2020', title: 'First Launch', desc: 'Launched our first electric scooter model' },
    { year: '2022', title: 'Expansion', desc: 'Expanded to 100+ cities across India' },
    { year: '2024', title: 'Innovation', desc: 'Launched AeroVolt brand with premium electric vehicles' },
    { year: '2025', title: 'Future', desc: 'Leading the EV revolution with cutting-edge technology' },
  ];

  const values = [
    { title: 'Innovation', desc: 'Pushing boundaries with advanced technology' },
    { title: 'Quality', desc: 'Uncompromising standards in every product' },
    { title: 'Sustainability', desc: 'Committed to a greener future' },
    { title: 'Customer First', desc: 'Dedicated to customer satisfaction' },
  ];

  return (
    <div className="about-page">
      {/* Page Banner */}
      <PageBanner title="About AeroVolt" image={banner1} />

      {/* Main About Section */}
      <section className="about-overview">
        <div className="container">
          <div className="overview-content">
            <motion.div
              className="overview-text"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h2>Who We Are</h2>
              <p>
                AeroVolt, a flagship brand of Priya Global, stands at the forefront of India's electric mobility revolution. Founded in 2018, we began with a simple yet powerful vision: to transform urban transportation by making premium electric vehicles accessible to everyone. Our journey has been marked by relentless innovation, unwavering commitment to quality, and a deep sense of responsibility towards our planet.
              </p>
              <p>
                Our state-of-the-art manufacturing facilities combine traditional craftsmanship with cutting-edge technology, ensuring every scooter that rolls off our assembly lines meets the highest standards of quality and excellence. From concept to delivery, every step is meticulously designed to deliver an unparalleled riding experience that combines luxury, performance, and sustainability in perfect harmony.
              </p>
            </motion.div>

            <motion.div
              className="overview-visual"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="overview-image-frame">
                <img
                  src={aboutProductImage}
                  alt="AeroVolt premium electric scooter"
                  className="overview-image"
                  loading="eager"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="about-facility">
        <div className="container">
          <div className="facility-grid">
            <motion.div
              className="facility-content"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <p className="eyebrow">Manufacturing Excellence</p>
              <h2>Our Manufacturing Facility</h2>
              <p>
                At AeroVolt, our manufacturing facility is the backbone of our commitment to dependable electric mobility. Spread across a modern production campus, the plant combines advanced assembly lines, precision component testing, and digitally monitored workflows to create vehicles that are both efficient and durable. Every stage of production is guided by strict quality control protocols, from battery integration and motor assembly to final inspection and performance validation. Our teams work hand in hand with engineers and designers to refine processes, improve consistency, and accelerate innovation while maintaining the highest safety and reliability standards. The result is a manufacturing environment built to deliver premium electric vehicles with confidence and long-term value. This disciplined approach helps us meet customer expectations at every step.
              </p>
            </motion.div>

            <motion.div
              className="facility-image-card"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="facility-image-frame">
                <img
                  src={factoryImage}
                  alt="AeroVolt manufacturing facility building"
                  className="facility-image"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="about-mission-vision">
        <div className="container">
          <div className="mv-grid">
            <motion.div
            className="mv-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            >
            <div className="mv-icon">🎯</div>
            <h3>Our Mission</h3>
            <p>
              To provide premium electric vehicles that combine luxury, performance, and sustainability, making eco-friendly transportation accessible to all while setting new standards in the EV industry.
            </p>
            </motion.div>
            <motion.div
            className="mv-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            >
            <div className="mv-icon">🔭</div>
            <h3>Our Vision</h3>
            <p>
              To be the global leader in electric mobility, driving towards a cleaner, greener future for generations to come through continuous innovation and customer-centric solutions.
            </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Innovation & Manufacturing */}
      <section className="about-innovation">
        <div className="container">
          <div className="innovation-content">
            <div className="innovation-text">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Innovation & Manufacturing Excellence
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                At AeroVolt, innovation is in our DNA. Our dedicated research and development team works tirelessly to push the boundaries of electric vehicle technology, focusing on battery efficiency, motor performance, and smart features that enhance the rider experience. Every component is carefully engineered to deliver optimal performance, safety, and durability that our customers can rely on day after day.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Our commitment to manufacturing quality begins with sourcing the finest materials and components from trusted suppliers. Our rigorous quality control processes ensure that every scooter meets our exacting standards before it reaches our customers. We believe that excellence is not an accident but the result of careful planning, hard work, and a commitment to doing things right the first time, every time.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Satisfaction & Future Goals */}
      <section className="about-customer">
        <div className="container">
          <div className="customer-content">
            <div className="customer-text">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Customer Satisfaction & Future Goals
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Our customers are at the heart of everything we do. We are committed to providing exceptional after-sales service, timely support, and a hassle-free ownership experience. Our extensive network of service centers and trained technicians ensures that your AeroVolt scooter is always in top condition, giving you peace of mind and confidence in your investment.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Looking ahead, our goals are ambitious yet achievable. We aim to expand our product range, introducing new models that cater to diverse customer needs while maintaining our commitment to quality and innovation. We also plan to expand our presence across India and beyond, making premium electric mobility accessible to more people and contributing to a cleaner, greener future for all.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="about-journey">
        <div className="container">
          <h2>Our Journey</h2>
          <div className="timeline">
            {journey.map((item, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="timeline-year">{item.year}</div>
              <div className="timeline-content">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
              </div>
            </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="about-values">
        <div className="container">
          <h2>Our Values</h2>
          <div className="values-grid">
            {values.map((value, index) => (
            <motion.div
              key={index}
              className="value-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3>{value.title}</h3>
              <p>{value.desc}</p>
            </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
