import React, {useState, useEffect} from 'react'
import axios from 'axios'

// fetching single post data from an API using axio
//const url = 'https://jsonplaceholder.typicode.com/posts'

function SingleDataFetching() {
    // 1st create state variables
    const [post, setPost] = useState({})
    const[id, setId] = useState(1)
    // to change click by using button
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

useEffect(() =>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res =>{
        console.log(res)
        setPost(res.data)
    })
    .catch(err =>{
        console.log(err)
    })
}, [idFromButtonClick])

// create function for handle click
const handleClick = () =>{
    setIdFromButtonClick(id)

}

  return ( // to fetch data from a post of a particular id
    <div>
        {/* we need to create a state variables */}
        {/* e = listen to event, then setId and enter param */}
        <input type='text' value={id} onChange={e =>setId(e.target.value)} />
        {/* add the button */}
        <button type='button' onClick={handleClick}>Fetch Post</button>
        <div>
            {post.title}
            {post.body} 
        </div>
        {/* <ul>
            {
                posts.map(post => <li key={post.id}>{post.title}</li>)
            }
        </ul> */}
    </div>
  )
}

export default SingleDataFetching