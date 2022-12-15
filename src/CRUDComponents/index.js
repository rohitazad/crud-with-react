import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ModalComponents from './Model';
import ViewComponents from './View';


const CRUDComponentsMain = ()=>{
    const APIBaseURL = 'https://dummyjson.com';
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState('')
    const [show, setShow] = useState(false);
    const [type, setType] = useState();
    const handleClose = () => setShow(false);

    const fetchPosts = ()=>{
        return  axios.get(`${APIBaseURL}/posts`).then((res)=>{
            //console.log('res', res.data.posts);
            setPosts(res.data.posts);
        }).catch((e)=>{
            console.log('error', e)
        })
    }
    const handlerClick = (id, type)=>{
        console.log('click--', id, '--type--', type);
        setType(type)
        setShow(true);
        singlePostFetchData(id)
    }
    const singlePostFetchData = (id)=>{
        return axios.get(`${APIBaseURL}/posts/${id}`).then((res)=>{
            console.log(res.data);
            setPost(res.data)
        }).catch((e)=>{
            console.log('e',e);
        })
    }
    const handlerFormSubmit = (title, body, id)=>{
        return axios.put(`${APIBaseURL}/posts/${id}`, {
            title,body
        }).then((res)=>{
            console.log('res updated', res);
            alert('your post is successfully updated');
            setShow(false);
        })
    }
    const handlerRemove = (id)=>{
        console.log('REmove id ', id)
        return axios.delete(`${APIBaseURL}/posts/${id}`).then((res)=>{
            console.log('res updated', res);
            alert('your post is successfully remove');
            setShow(false);
        }) 
    }
    const handlerFormSubmitNew = (title, body)=>{
        return axios.post(`${APIBaseURL}/posts/add`, {
            title,body,
            userId: 5
        }).then((res)=>{
            console.log('res', res)
            alert('your post is successfully Created');
            setShow(false);
        })
    }
    useEffect(()=>{
        fetchPosts()
    }, [])
    return (
        <Container>
            <Row>
                <Col>
                    <Button variant="primary" onClick={()=>{
                            handlerClick(0, 'create')
                        }}>Create</Button>
                    <br />
                    <ViewComponents posts={posts} handlerClick={handlerClick}/>
                    <ModalComponents show={show} handleClose={handleClose} type={type} post={post} handlerFormSubmit={handlerFormSubmit} handlerRemove={handlerRemove} handlerFormSubmitNew={handlerFormSubmitNew}/>
                </Col>
            </Row>
        </Container>
    )
}

export default CRUDComponentsMain;