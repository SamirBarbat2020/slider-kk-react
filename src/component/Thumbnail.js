
import { useState } from "react";
import Images from "./Data";
import '../main.css';

const Thumbnail = (props) => {
    const [style, setStyle] = useState('item-img');
    const changeStyle = () => {
        return (
            setStyle('changeImg')
        );
    }
    console.log(props.index);
    return (
        <div className="thumContainer">
            <div className="carousel">
                <div drag="x" className="inner-carousel">
                    {
                        Images.map((thumImage, index) => {
                            const { image, id } = thumImage;
                            return (
                                <div className={style}>
                                    <div key={id}>
                                        {/* <pre>{index}</pre>
                                        <pre>{props.index}</pre> */}
                                        <img className={`item-img ${props.index === index ? 'active' : 'not-active'}`} onClick={() => { props.thumClickHandler(index); changeStyle() }} src={image} key={id} />
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}


export default Thumbnail;