import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function NotesHeader({ onUpdate }) {
    return (
        <Row xs="auto">
            <Col>
                <h1>Notes</h1>
            </Col>
            <Col className="d-flex align-items-center">
                <Button variant="success" onClick={onUpdate}>
                    Update
                </Button>
            </Col>
        </Row>
    );
}

export default NotesHeader;
