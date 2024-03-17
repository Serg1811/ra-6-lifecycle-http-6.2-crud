import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import Container from 'react-bootstrap/Container';
import NotesHeader from './components/NotesHeader';
import NotesList from './components/NotesList';
import NotesAdd from './components/NotesAdd';

function App() {

    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState({ status: false, text: '' });
    const [formDisable, setFormDisable] = useState(false);
    const [text, setText] = useState('');

    const loadData = () => {
        setLoading(true);
        setError({ status: false, text: '' });
        fetch('http://localhost:7777/notes')
            .then((response) => response.json())
            .then((data) => {
                setNotes(data);
                setLoading(false);
                setFormDisable(false);
            })
            .catch(() => {
                setLoading(false);
                setError({
                    status: true,
                    text: 'Ошибка соединения с сервером',
                });
                setFormDisable(true);
            });
    };

    const handleAddNote = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();

        fetch('http://localhost:7777/notes', {
            method: 'POST',
            body: text,
        })
            .then(() => {
                setText('');
                loadData();
            })
            .catch(() => {
                setError({
                    status: true,
                    text: 'Ошибка соединения с сервером',
                });
                setFormDisable(true);
            });
    };

    const handleFormChange = (evt: ChangeEvent<HTMLInputElement>) => {
        setText(evt.target.value);
    };

    const handleUpdate = () => {
        loadData();
    };

    const handleRemove = (id: string) => {
        fetch(`http://localhost:7777/notes/${id}`, { method: 'DELETE' }).then(
            () => loadData()
        );
    };

    useEffect(loadData, []);

    return (
        <Container className="mt-4">
            <NotesHeader onUpdate={handleUpdate} />
            <NotesList
                loading={loading}
                error={error}
                notes={notes}
                onRemoveNote={handleRemove}
            />
            <NotesAdd
                text={text}
                formDisable={formDisable}
                onFormChange={handleFormChange}
                onAddNote={handleAddNote}
            />
        </Container>
    );
}
export default App;
