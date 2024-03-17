import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';

const CardPlaceholder = () => {
    return (
        <>
            <Col xs={6} md={4}>
                <Card body className="note">
                    <Placeholder as={Card.Text} animation="glow">
                        <Placeholder xs={7} /> <Placeholder xs={4} />{' '}
                        <Placeholder xs={4} /> <Placeholder xs={6} />{' '}
                        <Placeholder xs={8} />
                    </Placeholder>
                </Card>
            </Col>
            <Col xs={6} md={4}>
                <Card body className="note">
                    <Placeholder as={Card.Text} animation="glow">
                        <Placeholder xs={7} /> <Placeholder xs={4} />{' '}
                        <Placeholder xs={4} /> <Placeholder xs={6} />{' '}
                        <Placeholder xs={8} />
                    </Placeholder>
                </Card>
            </Col>{' '}
            <Col xs={6} md={4}>
                <Card body className="note">
                    <Placeholder as={Card.Text} animation="glow">
                        <Placeholder xs={7} /> <Placeholder xs={4} />{' '}
                        <Placeholder xs={4} /> <Placeholder xs={6} />{' '}
                        <Placeholder xs={8} />
                    </Placeholder>
                </Card>
            </Col>
        </>
    );
}

export default CardPlaceholder;
