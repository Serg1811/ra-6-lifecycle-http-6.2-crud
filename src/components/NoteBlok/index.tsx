import Card from 'react-bootstrap/Card';
import CloseButton from 'react-bootstrap/CloseButton';
import Note from '../../type/Note';
interface Props {
    note: Note;
    onRemove: (id: string) => void
}

const NoteBlok = ({ note, onRemove }: Props) => {
    console.log(note);
    return (
        <Card body className="note">
            {note.content}
            <CloseButton
                className="note-close"
                onClick={() => onRemove(note.id)}
            />
        </Card>
    );
}

export default NoteBlok;
