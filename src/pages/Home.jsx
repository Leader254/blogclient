import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import axios from 'axios';
import LandingPage from './LandingPage';
import '../css/Home.css';
import { apiDomain } from '../utils/utils';

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = `${apiDomain}/posts`;

        const response = await axios.get(url, {
          headers: { Authorization: `${currentUser.token}` },
        });

        setPosts(response.data);
        // console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    if (currentUser) {
      fetchData();
    }
  }, [ currentUser]);

  if (!currentUser) {
    return <LandingPage />;
  }

  return (
    <div className='home'>
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" className="postImg" />
            </div>
            <div className="content">
              <Link to={`/post/${post.id}`} className='link'>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.description.slice(0, 300)}...</p>
              <Link to={`/post/${post.id}`} className='link'>
                <button>Read More</button>
              </Link>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
