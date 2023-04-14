import React from 'react'
import { IconContext } from 'react-icons/lib/esm/iconContext'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'


const Favourite = (props: { value: Number }) => {
    if (props.value === 1) {
        return (
            <div className="d-flex align-items-center justify-content-end">
                <IconContext.Provider value={{ color: "#Ec0f0f", size: "20px" }}>
                    <AiFillHeart />
                </IconContext.Provider>
            </div>
        )
    }
    if (props.value === 0) {
        return (
            <div className="d-flex align-items-center justify-content-end">
                <IconContext.Provider value={{ color: "#a6a6a6;", size: "20px" }}>
                    <AiOutlineHeart />
                </IconContext.Provider>
            </div>
        )
    }
    return (
        <></>
    )
}

export default Favourite