'use client';
import { createRef, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
//Data
import timeline_data from '@/data/timeline_data';
import TimelineModal from './TimelineModal';
import { useGSAP } from '@gsap/react';
import gsap from "gsap";

const Timeline = () => {
  //States
  const [activeSection, setActiveSection] = useState('Tecnologías mecánicas');
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const [observers, setObservers] = useState([]);
  //Refs
  const timelineContainerRef = useRef();
  const sectionsRef = useRef(timeline_data.map(() => createRef()));

  //Move the scroll to the timeline section
  const moveTimeline = (index) => {
    const section_left = sectionsRef.current[index].current.offsetLeft;
    timelineContainerRef.current.scrollTo({ left: section_left, behavior: 'smooth' });
  };

  const openCloseModal = (data) => {
    setIsOpenModal(!isOpenModal);
    setModalData(data);
  };

  // Create observers for each sections
  useEffect(() => {
    const getAllHeadlines = () => {
      const container = timelineContainerRef.current;
      if (container) {
        const sections = container.querySelectorAll('.timeline-section');

        const observers = Array.from(sections).map((section, index) => {
          const observer = new IntersectionObserver(
            (entries) => {
              if (entries[0].isIntersecting) {
                setActiveSection(entries[0].target.dataset.section);
              }
            },
            {
              root: timelineContainerRef.current,
              threshold: 0.5,
            }
          );

          observer.observe(section);
          return observer;
        });

        setObservers(observers);
      }
    };

    getAllHeadlines();
  }, [timelineContainerRef]);

  // Remove observers
  useEffect(() => {
    return () => {
      observers.forEach((observer) => {
        observer.disconnect();
      });
    };
  }, [observers]);


  useGSAP(() => {
    const observer_timeline = new IntersectionObserver((entries, self) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          self.disconnect();

          const handleIntersection = (entries, observer) => {
            let targets = [];
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                targets.push(entry.target);
                observer.unobserve(entry.target);
              }
            });
            const target_line = targets.map(target => [
              target.getElementsByClassName("timeline-period-line")[0],
              target.getElementsByClassName("timeline-period-dot")[0],
            ]);
            const target_text = targets.map(target => target.getElementsByClassName("timeline-period-text")[0]);

            targets.map((target, index) => {
              const timeline = gsap.timeline({delay:index/4});
              timeline.to(target, { opacity: 1, y: 0 })
                .to(target_line[index], { y: 0 })
                .to(target_text[index], { opacity: 1 });
            })
          };

          const periods = gsap.utils.toArray(".timeline-period-item");
          const observer = new IntersectionObserver(handleIntersection,
            {
              root: timelineContainerRef.current,
              threshold: 0.5,
            });

          periods.map((period, index) => {
            gsap.set(period, { opacity: 0, y: -50 });
            gsap.set(".timeline-period-text", { opacity: 0});
            gsap.set(".timeline-period-line, .timeline-period-dot", { y: -80 });
            gsap.set(".timeline-period-line, .timeline-period-dot", { y: -80 });

            observer.observe(period);
          });
        }
      });
    });

    observer_timeline.observe(timelineContainerRef.current);
  }, { scope: timelineContainerRef });

  return (
    <>
      <div className='xl:pl-32'>
        <div className='xl:rounded-l-[30px] text-white relative overflow-hidden'>
          <div
            className='absolute w-full h-full'
            style={{
              background: `radial-gradient(62.07% 180.09% at 100% -13.31%, rgba(45, 244, 198, 0.26) 0%, #171C30 56.39%)`,
            }}
          />
          <img className='absolute h-full w-full opacity-10' src='./img/texture_34.png' alt='textura' />
          <div className='text-white relative z-50 pb-28 pt-20'>
            <p className='uppercase tracking-wider text-2xl lg:text-3xl text-center'>
              Recurso 2. Hitos de la transformación tecnológica
            </p>
            {/* Menu */}
            <nav className='hidden lg:flex gap-3 py-10 px-10 xl:px-28 flex-wrap max-w-[1100px]'>
              {timeline_data.map((section, index_section) => {
                return (
                  <button
                    className={`uppercase transition text-xl  text-blue-dark px-5 py-2 rounded-md tracking-wider hovers:shadow-sm ${section.name === activeSection ? 'bg-white' : 'bg-green-light hover:text-white '
                      }`}
                    key={`button-${section.name}`}
                    type='button'
                    onClick={() => {
                      setActiveSection(section.name);
                      moveTimeline(index_section);
                    }}
                  >
                    {section.button ?? section.name}
                  </button>
                );
              })}
            </nav>

            {/* Timeline */}
            <div className='timeline w-full overflow-x-auto overflow-y-hidden' ref={timelineContainerRef}>
              <div className='whitespace-nowrap relative w-full transition-tranform duration-700'>
                {/* Sections */}
                {timeline_data.map((section, index_section) => {
                  return (
                    <div
                      className={`timeline-section inline-block align-top whitespace-normal w-full relative timeline-section-${index_section}`}
                      key={section.name}
                      ref={sectionsRef.current[index_section]}
                      data-section={section.name}
                    >
                      <div className='border-t border-white w-full absolute top-[19.3rem] lg:top-80 left-0' />
                      {/* Periods */}
                      <div className='px-10 lg:px-28 py-10 text-center'>
                        <p className='border-2 border-white inline-block uppercase leading-wider text-lg lg:text-xl px-8 py-3'>
                          {section.name}
                        </p>
                      </div>
                      <div className='timeline-periods flex flex-nowrap px-10 lg:px-28 pt-5 pb-10'>
                        {section.periods.map((period, index_period) => {
                          const { title, image } = period;
                          return (
                            <div key={`${section}-${title}-${index_period}`} className={`timeline-period-container text-center`}>
                              <div className='timeline-period-item w-fit mx-auto'>
                                <button
                                  className='relative w-[90px] h-[90px] lg:w-[140px] lg:h-[140px] '
                                  type='button'
                                  onClick={() => openCloseModal(period)}
                                >
                                  <Image
                                    className='timeline-period-image rounded-full border-white border-2 object-cover z-10 bg-white'
                                    alt={`${section.name}-${title}`}
                                    fill={true}
                                    src={image}
                                  />
                                </button>
                                <div className='timeline-period-line border border-dashed h-[60px] w-px mx-auto' />
                                <div className='timeline-period-dot w-2 h-2 rounded-full bg-white mx-auto' />
                                <p className='timeline-period-text font-light text-md lg:text-xl pt-6'>{title}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className='gap-3 pt-10 px-10 xl:px-28 flex-wrap max-w-[1100px]'>
              * Haz clic en la imagen para más información
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      <TimelineModal data={modalData} isOpenModal={isOpenModal} openCloseModal={openCloseModal} />
    </>
  );
};

export default Timeline;
