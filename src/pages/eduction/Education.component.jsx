import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import "./Education.styles.css";

export const Education = () => {
    return (
        <div id="education">
            <h1 className="pt-3 text-center font-details pb-3">EDUCATION</h1>
            <CardDeck className="education__cards">
                <Card style={{ width: '20rem' }} className="education__card">
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '20rem' }} className="education__card">
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '20rem' }} className="education__card">
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardDeck>
        </div>
    );
};
