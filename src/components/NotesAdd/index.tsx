import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { ChangeEvent, FormEvent } from 'react';

interface Props {
    text: string;
    formDisable: boolean;
    onFormChange: (evt: ChangeEvent<HTMLInputElement>) => void;
    onAddNote: (evt: FormEvent<HTMLFormElement>) => void;
}

const NotesAdd = ({ text, formDisable, onFormChange, onAddNote }: Props) => {
    return (
        <Form onSubmit={onAddNote}>
            <fieldset disabled={formDisable}>
                <InputGroup>
                    <InputGroup.Text>New note</InputGroup.Text>
                    <Form.Control
                        as="textarea"
                        aria-label="New note"
                        value={text}
                        onChange={onFormChange}
                        required
                    />
                    <Button variant="outline-secondary" type="submit">
                        Add
                    </Button>
                </InputGroup>
            </fieldset>
        </Form>
    );
}

export default NotesAdd;
