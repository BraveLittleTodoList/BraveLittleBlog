import { useState} from 'react';
import BlogList from './BlogList';

const Home = () => {
    
    const [blogs,  setBlogs] = useState([

    {title: 'Hopes, Dreams & memes', body: 'The start of something great', topic: 'General', id: 1},
    {title: 'Will the real Satoshi please stand up?', body: 'lorem ipsum...', topic: 'Crypto', id: 2},
    {title: 'Rethinking NFTs ', body: 'lorem ispsum...', topic: 'Crypto', id: 3}
    ]);
    
    const handleDelete = (id) =>{
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    return ( 
        <div className="home">
           <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
        </div>
     );
}
 
export default Home;