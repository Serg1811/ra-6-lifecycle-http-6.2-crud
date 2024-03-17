import Alert from 'react-bootstrap/Alert';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardPlaceholder from '../CardPlaceholder';
import NoteBlok from '../NoteBlok';
import Note from '../../type/Note';
import './index.css';

interface Props {
    loading: boolean;
    error: {
        status: boolean;
        text: string;
    };
    notes: Note[];
    onRemoveNote : (id: string) => void;
}

const NotesList = ({ loading, error, notes, onRemoveNote }: Props) => {
    return (
        <Row className="g-4 pt-4 pb-4">
            {loading && <CardPlaceholder />}
            {!loading && error.status && (
                <Alert variant="danger">{error.text}</Alert>
            )}
            {!loading &&
                !error.status &&
                notes.map((note) => (
                    <Col xs={6} md={4} key={note.id}>
                        <NoteBlok note={note} onRemove={onRemoveNote} />
                    </Col>
                ))}
        </Row>
    );
}

export default NotesList;
