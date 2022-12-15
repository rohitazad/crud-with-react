import React , {useState, useEffect} from 'react';
import axios from 'axios';


const AxiosComponents = ()=>{
    const baseAPIUrl = 'https://dummyjson.com';
    const [posts, setPosts]  = useState([]);
    const [error, setError] = useState(false);
    const fetchPostsData = ()=>{
        axios.get(`${baseAPIUrl}/posts`).then((res)=>{
           // console.log('REs ', res)
            setPosts(res.data.posts)
        }).catch((e)=>{
            console.log('fetchPostsData', e.response);
            setError(true)
        })
    }

    const genrateDatahtml = ()=>{
        return posts && posts.length > 0 ? posts.map((item)=>{
            return (
                <div key={item.id}>{item.title}</div>
            )
        }) : error ?  '<div>No Data found in api </div>' : '<div>No Data </div>'
    }

    useEffect(()=>{
        fetchPostsData()
    }, [])

    return (
        <>
            <h1>Axios used</h1>
            {genrateDatahtml()}
        </>
    )
}

export default AxiosComponents;