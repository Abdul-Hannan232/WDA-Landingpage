import React, { useState } from 'react';
import { Accordion, AccordionItem } from '@nextui-org/react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

export default function Accordian() {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleAccordionToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
        <div className='md:w-[50%] md:ml-10 mx-5'>
            <h1 className='text-[#091A2D] md:text-6xl text-3xl fontlight my-20'>Commonly Asked<br /> Questions</h1>
        
        
            <Accordion>
                {accordionData.map((item, index) => (
                    <AccordionItem
                    hideIndicator
                        key={index}
                        aria-label={`Accordion ${index + 1} accordion-item-icon`}
                        title={
                            <div className='flex justify-between md:w-[600px] text-[#091A2D] font-semibold md:text-xl text-md items-center'>
                                {item.title}
                                {activeIndex === index ? (
                                    <FaAngleUp />
                                ) : (
                                    <FaAngleDown />
                                )}
                            </div>
                        }
                        isExpanded={activeIndex === index}
                        onClick={() => handleAccordionToggle(index)}
                        icon={null}  // Ensure no default icon is shown
                        className="no-icon" // Add this class to remove any leftover spacing
                    >
                        <p className='text-[#091A2D] md:text-lg text-sm'>{item.content}</p>
                    </AccordionItem>
                ))}
            </Accordion>

         
        </div>
        <div className='flex  justify-center gap-4 mt-20'>
                <button className='border  md:block hidden border-[#0B2642] rounded-xl md:p-3 p-2 md:w-80 w-28 md:text-lg text-xs text-center text-[#0B2642] font-bold'>Request a Callback</button>
                <button className='bg-[#0B2642] md:p-3 p-2 md:block hidden text-center md:rounded-xl rounded-lg md:w-96 w-40 md:text-lg text-lg text-[#F8D958]'>Book Free Webinar</button>
            </div>
        </>
    )
}

const accordionData = [
    { title: 'What is Coding Masterclass?', content: 'Get a solid foundation in coding basics and explore different programming languages.' },
    { title: 'What is the refund period?', content: 'Get a solid foundation in coding basics and explore different programming languages.' },
    { title: 'What are the prerequisites before applying?', content: 'Get a solid foundation in coding basics and explore different programming languages.' },
    { title: 'What is the Duration of the Masterclass?', content: 'Get a solid foundation in coding basics and explore different programming languages.' },
    { title: 'How good is the placement record?', content: 'Get a solid foundation in coding basics and explore different programming languages.' },
    { title: 'How will I benefit from Industry Mentors?', content: 'Get a solid foundation in coding basics and explore different programming languages.' },
    { title: 'How do I get my doubts resolved?', content: 'Get a solid foundation in coding basics and explore different programming languages.' },
    { title: 'Do I need a computer science degree to apply?', content: 'Get a solid foundation in coding basics and explore different programming languages.' },
    { title: 'Where will the classes be conducted?', content: 'Get a solid foundation in coding basics and explore different programming languages.' },
    { title: 'What are the Masterclass timings?', content: 'Get a solid foundation in coding basics and explore different programming languages.' },
    { title: 'How many expert sessions will I have?', content: 'Get a solid foundation in coding basics and explore different programming languages.' },
    { title: 'Do we provide Job guarantee?', content: 'Get a solid foundation in coding basics and explore different programming languages.' },
];
