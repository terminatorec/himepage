import React, { useRef, useContext, useState, useEffect } from "react";
import useImage from './useImage'

const MyModal = (props) => {

    const { loading, error, image } = useImage(props.img)   
    const [numberImage,setNumberImage] = React.useState(1)
    console.log('💛 length', props.urlImgs);

    React.useEffect(()=>{
        setNumberImage(1)
    },[])

    return (
        <div
            className={props.active ? `myModal active` : `myModal`}
            onClick={() => props.setActive(false)}
        >
            <div className="myModalContent"
            // onClick={(e)=>e.stopPropagation()}
            //   style={{maxHeight:'80vh',maxWidth:'80vw'}}
            >
                {/* <img src={image?image:props.urlImgs[0]} style={{maxHeight: '90vh',maxWidth: '90vw'}} alt="" /> */}
                <img src={image ? image : props.urlImgs[numberImage-1]} style={{ objectFit: 'contain'}} alt="" />
                {props.urlImgs?
                <div onClick={(e)=>e.stopPropagation()} className="pagination">
                    {props.urlImgs.map((item,index) => {
                        return <div 
                        onClick={(e)=>setNumberImage(index+1)}
                        className="pagination_item">{index+1}</div>
                    })}
                </div>
                :<div></div>
                }

            </div>
        </div>
    );
};

export default MyModal;