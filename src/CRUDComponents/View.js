import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
const ViewComponents = ({posts, handlerClick})=>{
    
    const genRateHtmlOfPosts = ()=>{
        return posts && posts.length > 0 ? posts.map((post)=>{
            return (
                <tr key={post.id}>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td>
                        {
                            post.tags && post.tags.length > 0 ? post.tags.map((tag)=>{
                                return <Badge bg="secondary" key={tag}>{tag}</Badge>
                            }) : ''
                        }
                    </td>
                    <td>
                        <Button variant="info" onClick={()=>{
                            handlerClick(post.id, 'view')
                        }}>View</Button>
                        <Button variant="primary" onClick={()=>{
                            handlerClick(post.id, 'edit')
                        }}>Edit</Button>
                        <Button variant="danger" onClick={()=>{
                            handlerClick(post.id, 'remove')
                        }}>Remove</Button>
                    </td>
                </tr>
            )
        }) : 'No Data  fond'
    }
    return (
        <>
            {
                posts && posts.length > 0 ? <Table striped bordered hover size="sm">
                                            <thead>
                                                <tr>
                                                <th>Id</th>
                                                <th>Title</th>
                                                <th>Tags</th>
                                                <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {genRateHtmlOfPosts()}
                                            </tbody>
                                            </Table> : 'No data'
            }
            
        </>
    )
}

export default ViewComponents;