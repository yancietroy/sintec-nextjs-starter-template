'use client'

import React, { useCallback, startTransition } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from "next/image"

type Props = {}

const Testimonials = (props: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    skipSnaps: false,
    dragFree: false,
    containScroll: 'trimSnaps',
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 1000px)': { slidesToScroll: 2 }
    }
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      // Use React 19's startTransition for non-urgent updates
      startTransition(() => {
        emblaApi.scrollPrev();
      });
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      // Use React 19's startTransition for non-urgent updates
      startTransition(() => {
        emblaApi.scrollNext();
      });
    }
  }, [emblaApi]);

  const testimonialData = [
    {
      id: 1,
      name: "Adame Nesane",
      designation: "Chief Customer",
      image: "/images/tes1.jpg.webp",
      text: "You're had. Subdue grass Meat us winged years you'll doesn't. fruit two also won one yielding creepeth third give may never lie alternet food."
    },
    {
      id: 2,
      name: "Adam Nahan",
      designation: "Chief Customer",
      image: "/images/tex2.jpg.webp",
      text: "You're had. Subdue grass Meat us winged years you'll doesn't. fruit two also won one yielding creepeth third give may never lie alternet food."
    },
    {
      id: 3,
      name: "Adame Nesane",
      designation: "Chief Customer",
      image: "/images/tes1.jpg.webp",
      text: "You're had. Subdue grass Meat us winged years you'll doesn't. fruit two also won one yielding creepeth third give may never lie alternet food."
    },
    {
      id: 4,
      name: "Adam Nahan",
      designation: "Chief Customer",
      image: "/images/tex2.jpg.webp",
      text: "You're had. Subdue grass Meat us winged years you'll doesn't. fruit two also won one yielding creepeth third give may never lie alternet food."
    },
    {
      id: 5,
      name: "Adame Nesane",
      designation: "Chief Customer",
      image: "/images/tes1.jpg.webp",
      text: "You're had. Subdue grass Meat us winged years you'll doesn't. fruit two also won one yielding creepeth third give may never lie alternet food."
    }
  ];

  return (
    <section className="testimonial-area area-padding">
        <div className="container">
          <div className="area-heading">
            <h3 className="line">Customer reviews</h3>
            <p>Together female let signs for for fish fowl may first.</p>
          </div>
          <div className="row">
            <div className="embla" ref={emblaRef}>
              <div className="embla__container" style={{ display: 'flex' }}>
                {testimonialData.map((testimonial) => (
                  <div key={testimonial.id} className="embla__slide" style={{ flex: '0 0 100%', minWidth: 0, marginRight: '20px' }}>
                    <div className="single-testimonial item d-flex flex-row">
                      <div className="thumb">
                        <Image
                          width={91}
                          height={91}
                          className="img-fluid"
                          src={testimonial.image}
                          alt={testimonial.name}
                        />
                      </div>
                      <div className="desc">
                        <h4>{testimonial.name}</h4>
                        <p className="designation">{testimonial.designation}</p>
                        <p>{testimonial.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* React 19 Concurrent Navigation */}
            <div className="embla__nav text-center mt-4">
              <button
                className="btn btn-outline-primary me-3"
                onClick={scrollPrev}
                style={{ marginRight: '10px' }}
              >
                ← Previous
              </button>
              <button
                className="btn btn-outline-primary"
                onClick={scrollNext}
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Testimonials