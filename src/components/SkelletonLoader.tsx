import React from 'react'
import { Card, Col, Placeholder } from 'react-bootstrap'

const SkelletonLoader = () => {

    const skelletonCard = (
        <Card style={{ width: '18rem' }}>
            <Placeholder style={{ height: "200px", padding: "10px" }} as={Card.Img} animation="glow" />
            <Card.Body>
                <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={12} />
                </Placeholder>
                <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={4} /> {' '} <Placeholder xs={4} />
                </Placeholder>
                <Placeholder.Button variant="primary" xs={12} />
            </Card.Body>
        </Card>
    )

    let skelletonCardArray = new Array(20).fill(skelletonCard)

    return (
        <>
            {skelletonCardArray.map(el => {
                return (
                    <Col>
                        <div className="d-flex justify-content-around">
                            {el}
                        </div>
                    </Col>
                )
            })}
        </>
    )
}

export default SkelletonLoader















