'use client';
import { createRef, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
//Data
import timeline_data from '@/data/timeline_data';
import TimelineModal from './TimelineModal';

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
    console.log(section_left);
    timelineContainerRef.current.scrollTo({ left: section_left, behavior: "smooth"});
  };

  const openCloseModal = (data) => {
    setIsOpenModal(!isOpenModal);
    setModalData(data);
  };

  // Create observers for each sections
  useEffect(() => {
    const getAllHeadlines = () => {
      const container = timelineContainerRef.current
      if (container) {
        const sections = container.querySelectorAll('.timeline-section');

        const observers = Array.from(sections).map((section, index) => {
          const observer = new IntersectionObserver(
            (entries) => {
              if (entries[0].isIntersecting) {
                setActiveSection(entries[0].target.dataset.section)
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
  }, [timelineContainerRef])


  // Remove observers
  useEffect(() => {
    return () => {
      observers.forEach((observer) => {
        observer.disconnect();
      });
    };
  }, [observers]);


  return (
    <>
      <div className='pl-32 '>
        <div className='rounded-l-[30px] text-white relative overflow-hidden'>
          <div
            className='absolute w-full h-full'
            style={{
              background: `radial-gradient(62.07% 180.09% at 100% -13.31%, rgba(45, 244, 198, 0.26) 0%, #171C30 56.39%)`,
            }}
          />
          <img className='absolute h-full w-full opacity-10' src='./img/texture_34.png' alt='textura' />
          <div className='text-white relative z-50 pb-28 pt-20'>
            <p className='uppercase tracking-wider text-3xl text-center'>Hitos de la transformación tecnológica</p>
            {/* Menu */}
            <nav className='flex gap-3 py-10 px-28 flex-wrap max-w-[1100px]'>
              {timeline_data.map((section, index_section) => {
                return (
                  <button
                    className={`uppercase transition text-xl  text-blue-dark px-5 py-2 rounded-md tracking-wider hovers:shadow-sm ${
                      section.name === activeSection ? 'bg-white' : 'bg-green-light hover:text-white '
                    }`}
                    key={`button-${section.name}`}
                    type='button'
                    onClick={() => {
                      setActiveSection(section.name);
                      moveTimeline(index_section);
                    }}
                  >
                    {section.name}
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
                      <div className='border-t border-white w-full absolute top-80 left-0' />
                      {/* Periods */}
                      <div className='px-28 py-10 text-center'>
                        <p className='border-2 border-white inline-block uppercase leading-wider text-xl px-8 py-3'>
                          {section.name}
                        </p>
                      </div>
                      <div className='timeline-periods flex flex-nowrap px-28 pt-5 pb-10'>
                        {section.periods.map((period, index_period) => {
                          const { title, image } = period;
                          return (
                            <div key={`${section}-${title}-${index_period}`} className={`timeline-period text-center`}>
                              <button
                                className='relative w-[140px] h-[140px] '
                                type='button'
                                onClick={() => openCloseModal(period)}
                              >
                                <Image
                                  className='rounded-full border-white border-2 object-cover'
                                  alt={`${section.name}-${title}`}
                                  fill={true}
                                  src={image}
                                />
                              </button>
                              <div className='border border-dashed h-[60px] w-px mx-auto' />
                              <div className='w-2 h-2 rounded-full bg-white mx-auto' />
                              <p className='font-light text-xl pt-6'>{title}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
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
