import React from 'react';
import Button from 'react-bootstrap/Button';
const RemoveComponents = ({handlerRemove})=>{
    return (
        <>
            <p>Are you sure you want to be remove this post </p>
            <Button variant="primary" onClick={handlerRemove} type="submit">
                yes
            </Button>
        </>
    )
}

export default RemoveComponents;