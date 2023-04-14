import React from 'react'
import { Row, Col } from 'react-bootstrap'
import DogProfilePicture from './DogProfilePicture'
import Favourite from './Favourite'
import Gender from './Gender'

const DogCard = (props: {
    name: String,
    favourite: Number,
    city: String,
    gender: String,
    birthdate: Date
}) => {

    const yearsSinceBirth = (date: Date) => {
        const today = new Date()
        const birthDate = new Date(date)
        let age = today.getFullYear() - birthDate.getFullYear()
        const month = today.getMonth() - birthDate.getMonth()
        
        if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
            age--
        }

        var yearsSuffix = "Let";
    
        if (age === 1) {
            yearsSuffix = "Rok";
        }

        if (age > 1 && age < 5) {
            yearsSuffix = "Roky";
        }

        return age + " " + yearsSuffix;
    }

    return (
        <div className="d-flex flex-column align-items-center justify-content-center border rounded p-3 shadow card" style={{ fontSize: "16px", backgroundColor:"white" }}>
            <div className="profile-picture">
                <DogProfilePicture />
                <span className="age rounded">{yearsSinceBirth(props.birthdate)}</span>
            </div>
            <div className="w-100 mt-3">
                <Row className="justify-content-between m-0 mb-1">
                    <Col className="p-0 dog-name">
                        {props.name}
                    </Col>
                    <Col className="p-0 text-end">
                        <Favourite value={props.favourite} />
                    </Col>
                </Row>
                <Row className="justify-content-between m-0">
                    <Col className="p-0 dog-city">
                        {props.city}
                    </Col>
                    <Col className="p-0 text-end dog-gender">
                        <Gender value={props.gender} />
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default DogCard