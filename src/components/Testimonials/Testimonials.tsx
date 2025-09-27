import React from 'react'
import Image from "next/image"

type Props = {}

const Testimonials = (props: Props) => {
  const testimonialData = [
    {
      id: 1,
      name: "Sarah Johnson",
      designation: "Homeowner",
      image: "/images/tes1.jpg.webp",
      text: "Sponge Pro Cleaning Services exceeded my expectations. My home has never been cleaner, and their attention to detail is remarkable."
    },
    {
      id: 2,
      name: "Mike Thompson",
      designation: "Business Owner",
      image: "/images/tex2.jpg.webp",
      text: "Professional, reliable, and thorough. They've been cleaning our office for months and we couldn't be happier with their service."
    },
    {
      id: 3,
      name: "Lisa Chen",
      designation: "Residential Client",
      image: "/images/tes1.jpg.webp",
      text: "The team at Sponge Pro is amazing! They're punctual, friendly, and always leave my house spotless. Highly recommend!"
    }
  ];

  return (
    <section className="testimonial-area area-padding">
        <div className="container">
          <div className="area-heading">
            <h3 className="line">Customer Reviews</h3>
            <p>See what our satisfied customers have to say about our cleaning services.</p>
          </div>
          <div className="row">
            <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                {testimonialData.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    data-bs-target="#testimonialCarousel"
                    data-bs-slide-to={index}
                    className={index === 0 ? "active" : ""}
                    aria-current={index === 0 ? "true" : "false"}
                    aria-label={`Slide ${index + 1}`}
                  ></button>
                ))}
              </div>
              <div className="carousel-inner">
                {testimonialData.map((testimonial, index) => (
                  <div key={testimonial.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                    <div className="single-testimonial item d-flex flex-row justify-content-center">
                      <div className="thumb me-4">
                        <Image
                          width={91}
                          height={91}
                          className="img-fluid rounded-circle"
                          src={testimonial.image}
                          alt={testimonial.name}
                        />
                      </div>
                      <div className="desc">
                        <h4>{testimonial.name}</h4>
                        <p className="designation text-muted">{testimonial.designation}</p>
                        <p className="text-muted">{testimonial.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Testimonials