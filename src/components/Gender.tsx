import React from 'react'
import { BiMaleSign, BiFemaleSign } from 'react-icons/bi'
import { IconContext } from 'react-icons/lib/esm/iconContext'

const Gender = (props: { value: String }) => {
    if (props.value === "Male") {
        return (
            <div className="d-flex align-items-center justify-content-end">
                <IconContext.Provider value={{ color: "#056ba3", size: "24px" }}>
                    <BiMaleSign />
                </IconContext.Provider>
                <span className="dog-gender ms-2">Pes</span>
            </div>
        )
    }
    if (props.value === "Female") {
        return (
            <div className="d-flex align-items-center justify-content-end">
                <IconContext.Provider value={{ color: "#ea6390", size: "24px" }}>
                    <BiFemaleSign />
                </IconContext.Provider>
                <span className="dog-gender ms-2">Fenka</span>
            </div>
        )
    }
    return (
        <></>
    )
}

export default Gender