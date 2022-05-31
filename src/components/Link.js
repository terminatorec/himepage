import React from 'react'
import useImage from './useImage'



const Link = (props) => {
    const { loading, error, image } = useImage(props.img)
  return (
    <div className='Link'>
        <a 
        target='_blank'
        href={props.link}>
            <button>
                Link
            </button>
        </a>
        <div className='desc'>
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
        </div>
        <img 
        src={image}      
        alt="" />
    </div>
  )
}

export default Link