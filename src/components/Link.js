import React, { useRef, useState } from 'react'
import MyModal from './MyModal';
import useImage from './useImage'
import linkSvgIcon from '.././img/link.svg'

const Link = (props) => {


    const [modalActive, setModalActive] = useState(false);

    const aLink = useRef()
    const divDesk = useRef()
    const imgDiv = useRef()
    const { loading, error, image } = useImage(props.img)

    const takeMe = () => {
        console.log("You are taking me!");
        setModalActive(true);
    };


    return (
        <div className='Link'>
            <MyModal
                active={modalActive}
                setActive={setModalActive}
                img={props.img}
                urlImgs={props.urlImgs}
            />
            <a
                ref={aLink}
                target='_blank'
                href={props.link}>
                <img
                    className='Linkimg'
                    src={linkSvgIcon} alt="" />
            </a>
            <div>

                <h2>{props.title}</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                    <div
                        ref={divDesk}
                        className='stack'>
                        <p>Stack: </p>
                        <ul>
                            {props.stack.map(item =>
                                <li>
                                    {item}
                                </li>
                            )}
                        </ul>
                    </div>
                    {props.libs ?
                        <div
                            ref={divDesk}
                            className='libs'>
                            <p>Libs: </p>
                            <ul>
                                {props.libs.map(item =>
                                    <li>
                                        {item}
                                    </li>
                                )}
                            </ul>
                        </div>
                        :
                        <div></div>

                    }
                </div>
                <div style={props.links?{ display: 'grid', gridTemplateColumns: '1fr 1fr'}:{display:'block'}}>

                    {props.tips ?
                        <div
                            ref={divDesk}
                            className='tips'>
                            <p>Tips: </p>
                            <ul>
                                {props.tips.map(item =>
                                    <li>
                                        {item}
                                    </li>
                                )}
                            </ul>
                        </div>
                        : ''}

                    {props.links ?
                        <div
                            ref={divDesk}
                            className='links'>
                            <p>Links: </p>
                            <ul className="linksUL">
                                {props.links.map(item =>
                                    <li>
                                        <a href={item.link} target='_blank'>{item.name}</a>
                                    </li>
                                )}
                            </ul>
                        </div>
                        :
                        ''
                    }
                </div>

            </div>
            <img
                className='Linkimg2'
                ref={imgDiv}
                onClick={() => takeMe()}
                // src={image}      
                src={image ? image : props.urlImgs[0]}
                alt="" />
        </div>
    )
}

export default Link