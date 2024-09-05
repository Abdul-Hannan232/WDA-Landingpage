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
        <div className='md:w-[50%] md:ml-20  mx-5'>
            <h1 className='text-[#091A2D] manrope md:text-6xl text-3xl fontlight my-20'>Commonly Asked<br /> Questions</h1>
        
        
            <Accordion>
                {accordionData.map((item, index) => (
                    <AccordionItem
                    hideIndicator
                        key={index}
                        aria-label={`Accordion ${index + 1} accordion-item-icon`}
                        title={
                            <div className='flex Aileron justify-between md:w-[600px] text-[#091A2D] font-semibold md:text-xl text-md items-center'>
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
                        <p className='text-[#091A2D] md:text-lg Aileron text-sm'>{item.content}</p>
                    </AccordionItem>
                ))}
            </Accordion>

         
        </div>
        <div className='flex  justify-center gap-4 my-20'>
                <button className='border  md:block hidden border-[#0B2642] rounded-xl md:p-3 p-2 md:w-80 w-28 md:text-lg text-xs text-center text-[#0B2642] font-bold'>Join Discord</button>
                <button className='bg-[#0B2642] md:p-3 p-2 md:block hidden text-center md:rounded-xl rounded-lg md:w-96 w-40 md:text-lg text-lg text-[#F8D958]'>Book a Free Masterclass</button>
            </div>
        </>
    )
}

const accordionData = [
    { title: 'When is this Live Workshop?', content: 'The javascript live workshop will be started from August 19th, Monday.' },
    { title: 'Is This a Live BootCamp?', content: 'Yes , this is a completely live bootcamp' },
    { title: 'What is the timing for this live workshop?', content: 'Workshop will be conducted at 8pm CST' },
    { title: 'Will i have lifetime access to the recordings & study material?', content: 'YES!' },
    { title: 'Is this a certified bootcamp?', content: 'Yes!  it is a certified bootcamp. You will be certified by  webdevarmy' },
    { title: 'Will i get recordings  of the live lectures?', content: 'Yes, you will recording of all the live lectures as well.' },
    { title: 'I made the payment but did not  receive any update !!', content: 'React out to our  awesome support team.  We  would love to help you out | Email : support@webdevarmy.in' },
];
