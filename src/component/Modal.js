import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";

export const Modal = ({ open, modalImg, onClose }) => {
    if (!open) {
        return null;
    }
    return (
        <React.Fragment>


            <div className="overlay">
                <div className="modalConstiner">
                    <p onClick={onClose} className="closeBtn"><AiFillCloseCircle style={{ fontSize: '45px' }} /></p>
                    <img src={modalImg} alt="" />
                </div>
            </div>


        </React.Fragment>
    );
}