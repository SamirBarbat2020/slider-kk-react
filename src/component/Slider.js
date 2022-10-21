import '../main.css';
import { useState } from 'react';
import Images from './Data';
import Thumbnail from './Thumbnail';
import { Modal } from './Modal';
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { motion, AnimatePresence } from "framer-motion"


const Slider = () => {

    // UseState Hook
    const [index, setIndex] = useState(0);
    const { image, id } = Images[index];
    const [direction, setDirection] = useState(0);
    const [openModal, setOpenModal] = useState(false);

    //Check the Index number

    const checkNumber = (number) => {
        if (number > Images.length - 1) {
            return 0;
        }

        if (number < 0) {
            return Images.length - 1;
        }
        return number;
    }

    // prev & next Functions
    const prevHandler = () => {
        setDirection(-1);
        setIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        });
    }

    const nextHandler = () => {
        setDirection(1);
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        });
    }

    const showModal = () => {

        setOpenModal(true)
    }

    // ----Review----
    return (
        <>
            <AnimatePresence initial={false} custom={direction}>
                <div className='reviewContainer'>

                    <div className="reviewContainer-image" key={id} >
                        <motion.img
                            initial={direction => { return { x: direction > 0 ? 100 : -100, opacity: 0, transition: 'ease-in' } }}
                            animate={{ x: 0, opacity: 1, transition: 'ease-in' }}
                            exit={direction => { return { x: direction > 0 ? -100 : 100, opacity: 0, transition: 'ease-in' } }}
                            // ------- showModal function to set the openModal to true-----
                            src={image} custom={direction} onClick={() => { showModal() }} />
                        {/* --------- onClose function a Modul.js function passing throw pros 
                        to run setopenModal to chnange the value to true---- */}
                        <Modal open={openModal} modalImg={image} onClose={() => setOpenModal(false)} />
                    </div>

                    <div className="button-thum-container">
                        <div className='arow' onClick={prevHandler}><GoChevronLeft /></div>
                        < Thumbnail index={index}
                            thumClickHandler={(i) => {
                                setIndex(i);
                            }}
                        />
                        <div className='arow' onClick={nextHandler}><GoChevronRight /></div>
                    </div>
                </div>
            </AnimatePresence>
        </>
    );
}

export default Slider;