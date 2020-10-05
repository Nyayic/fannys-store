import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';

const Dresses = () => {
    return(
        <div className="container">
            <div className="row">

            <CardDeck className="mt-4">
                <Card>
                    <Card.Img variant="top" src={require("../static/images/dress-01.jpg")} />
                    <Card.Body>
                    <Card.Title>Dress</Card.Title>
                    <Card.Text>
                       UGX 150,000
                    </Card.Text>
                    </Card.Body>
                   
                </Card>
                <Card>
                    <Card.Img variant="top" src={require("../static/images/dress-01.jpg")} />
                    <Card.Body>
                    <Card.Title>Dress</Card.Title>
                    <Card.Text>UGX 43,500
                    </Card.Text>
                    </Card.Body>
                   
                </Card>
                <Card>
                    <Card.Img variant="top" src={require("../static/images/dress-02.jpg")} />
                    <Card.Body>
                    <Card.Title>Dress</Card.Title>
                    <Card.Text>UGX 23,500
                    </Card.Text>
                    </Card.Body>
                   
                </Card>

                <Card>
                    <Card.Img variant="top" src={require("../static/images/dress-03.jpg")} />
                    <Card.Body>
                    <Card.Title>Dress</Card.Title>
                    <Card.Text>UGX 20,500
                    </Card.Text>
                    </Card.Body>
                   
                </Card>
                <Card>
                    <Card.Img variant="top" src={require("../static/images/dress-01.jpg")} />
                    <Card.Body>
                    <Card.Title>Dress</Card.Title>
                    <Card.Text>UGX 16,500
                    </Card.Text>
                    </Card.Body>
                    
                </Card>
               

                </CardDeck>

            </div>
        </div>
    );
}

export default Dresses;