import React, {useRef} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const CreateComponents = ({handlerFormSubmitNew})=>{
    const inputEl = useRef('');
    const inputElBody = useRef('');
    const handlerSubmit = (e)=>{
        e.preventDefault();
        let updateTitle = inputEl.current.value;
        let updateBody = inputElBody.current.value;
        handlerFormSubmitNew(updateTitle, updateBody);
    }
    return (
        <>
            <Form onSubmit={handlerSubmit}>
            <Form.Group className="mb-3" controlId="titleEdit">
                <Form.Label>Title </Form.Label>
                <Form.Control ref={inputEl}  type="text" placeholder="Enter title" />
                <Form.Text className="text-muted">
                    Please enter title
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="bodyEdit">
                <Form.Label>Body </Form.Label>
                <Form.Control ref={inputElBody} type="text"  placeholder="Enter Body" />
                <Form.Text className="text-muted">
                    Please enter body
                </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit Data
            </Button>
        </Form>
        </>
    )
}

export default CreateComponents;