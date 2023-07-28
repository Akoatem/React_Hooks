import React, {useState, useEffect} from 'react'
import axios from 'axios'

// fetching data from an API using axio
const url = 'https://jsonplaceholder.typicode.com/posts'

function DataFetching() {
    // 1st create state variables
    const [posts, setPosts] = useState([])
    // const[id, setId] = useState(1)

useEffect(() =>{
    axios.get(url)
    .then(res =>{
        console.log(res)
        setPosts(res.data)
    })
    .catch(err =>{
        console.log(err)
    })
}, [])

  return ( // to fetch data from a post of a particular id
    <div>
        {/* we need to create a state variables */}
        {/* e = listen to event, then setId and enter param */}
        {/* <input type='text' value={id} onChange={e =>setId(e.target.value)} /> */}
        <ul>
            {
                posts.map(post => <li key={post.id}>{post.title}</li>)
            }
        </ul>
    </div>
  )
}

export default DataFetching