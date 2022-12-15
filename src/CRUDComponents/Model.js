import React from 'react';
import Badge from 'react-bootstrap/Badge';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import EditComponents from './Edit';
import RemoveComponents from './Remove';
import CreateComponents from './Create';

const ModalComponents = ({show, handleClose, type, post, handlerFormSubmit, handlerRemove, handlerFormSubmitNew})=>{

    const conditionReder = ()=>{
        let _type = type ;
        if(_type === 'view'){
            return (
                <>
                    {post && post.body ? post.body : 'No Body'}
                    {
                        post && post.tags && post.tags.length > 0 ? post.tags.map((tag)=>{
                            return <Badge bg="secondary" key={tag}>{tag}</Badge>
                        }) : ''
                    }
                </>
            )
        }else if(_type === 'edit'){
            return <EditComponents post={post} handlerFormSubmit={handlerFormSubmit}/>
        }else if(_type === 'create'){
            return <CreateComponents  handlerFormSubmitNew={handlerFormSubmitNew}/>
        }else if(_type === 'remove'){
            return <RemoveComponents handlerRemove={()=>{
                handlerRemove(post.id)
            }}/>
        }else{
            return ''
        }
    }

    return (
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {
                post && post.title ? post.title : type && type === 'create' ? 'Create Post' :'No title'
            }
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {conditionReder()}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

export default ModalComponents;