import { useEffect, useState } from "react"


const tabs = ['posts', 'comments', 'albums']
function Content () {
    const [title, setTitle] = useState('')
    const [posts, setPoats] = useState([])
    const [type, setType] = useState('posts')
        useEffect(() => {
            fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => { 
                setPoats(posts)
            })
        },[type])

    return (
      <div>
        {tabs.map(tab => (
            <button 
            key={tab}
            style={type === tab ? {
                color: '#fff'
            } : {}}
            onClick = {() => setType(tab)}
            >
                {tab}
            </button>
        ))}
        <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        />
        <ul>
            {posts.map(post => (
                <li key={post.id}>{post.title || post.name}</li>
            ))}
        </ul>
      </div>
    )
}
export default Content