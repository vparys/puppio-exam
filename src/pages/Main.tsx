import React, { useState, Key, ChangeEvent } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import DogCard from '../components/DogCard'
import DogsSearch from '../components/DogsSearch'

var DogsJSON = require('../assets/dogs.json')

const Main = () => {

    const orderByName = (dogs: Array<Object>) => {
        const orderedDogs = dogs.sort((a: any, b: any) => {
            if (a.name < b.name) {
                return -1
            }
            if (a.name > b.name) {
                return 1
            }
            return 0
        })
        return orderedDogs
    }

    const [dogsSearched, setDogsSearched] = useState({
        query: "",
        dogs: orderByName(DogsJSON)
    })

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const query = event.currentTarget.value
        if (query.length > 2) {
            const filteredDogs = DogsJSON.filter((dog: any) => {
                return dog.name.toLowerCase().includes(query.toLowerCase())
            })
            setDogsSearched({
                query: query,
                dogs: filteredDogs
            })
        } else {
            setDogsSearched({
                query: query,
                dogs: DogsJSON
            })
        }
    }

    return (
        <Container className="d-flex justify-content-center main pt-3">
            <Row className="d-flex justify-content-center w-100">
                <Col className="col-12 col-md-11 col-xl-10 d-flex flex-column align-items-center">
                    <Row className="d-flex justify-content-center w-100">
                        <Col className="d-flex flex-column align-items-center">
                            <Row className="justify-content-center col-12 col-md-9 col-xl-6 text-align-center my-3">
                                <DogsSearch onChange={handleChange} value={dogsSearched.query} />
                            </Row>
                            <Row className="justify-content-start">
                                {dogsSearched.dogs.map((dog: any, index: Key | null | undefined) => {
                                    return (
                                        <Col className="col-12 col-md-6 col-xl-4 p-3" key={index}>
                                            <DogCard name={dog.name} gender={dog.gender} city={dog.address.city} favourite={dog.favourite} birthdate={dog.birthdate} />
                                        </Col>
                                    )
                                })}
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Main