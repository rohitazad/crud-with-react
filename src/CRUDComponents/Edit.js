import React, {useRef} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const EditComponents = ({post, handlerFormSubmit})=>{
    const inputEl = useRef('');
    const inputElBody = useRef('');
    const handlerSubmit = (e)=>{
        e.preventDefault();
        let updateTitle = inputEl.current.value;
        let updateBody = inputElBody.current.value;
        handlerFormSubmit(updateTitle, updateBody, post.id);
        console.log('form submit', updateTitle , '_____',updateBody)
    }
    return (
       <Form onSubmit={handlerSubmit}>
            <Form.Group className="mb-3" controlId="titleEdit">
                <Form.Label>Title </Form.Label>
                <Form.Control ref={inputEl} defaultValue={post.title} type="text" placeholder="Enter title" />
                <Form.Text className="text-muted">
                    Please update title
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="bodyEdit">
                <Form.Label>Body </Form.Label>
                <Form.Control ref={inputElBody} type="text" defaultValue={post.body} placeholder="Enter Body" />
                <Form.Text className="text-muted">
                    Please update body
                </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
                Update Data
            </Button>
        </Form>
    )
}

export default EditComponents;