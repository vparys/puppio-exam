import React, { ChangeEventHandler } from 'react'
import { Form, FormGroup } from 'react-bootstrap'

const DogsSearch = (props: {
    onChange: ChangeEventHandler<HTMLInputElement>
    value: String
}) => {
    return (
        <div>
            <Form>
                <FormGroup>
                    <Form.Control type="text" placeholder="Vyhledejte pejska" onChange={props.onChange} className="shadow" />
                </FormGroup>
            </Form>
        </div>
    )
}

export default DogsSearch