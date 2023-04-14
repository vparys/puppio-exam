import React from 'react'

const sampleDogImage = require("../assets/sample-dog-image.jpg")

const DogProfilePicture = () => {
  return (
    <img src={sampleDogImage} alt="Dog" style={{aspectRatio:1/1}} className="w-100 rounded border"/>
  )
}

export default DogProfilePicture