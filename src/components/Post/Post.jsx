import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
    const {id,title} = post;
    const navigate = useNavigate();
    const PostStyle = {
        border : '2px solid red',
        padding : '5px',
        borderRadius: '20px',
        backgroundColor: 'tomato'
    }

  const handleShowDetail = () =>{
    navigate(`/post/${id}`)

  }
    return (
        <div style={PostStyle}>
            <h4>Post of id:{id}</h4>
            <h4>Post title :{title}</h4>
            <Link to={`/post/${id}`}><button>Post Details</button></Link>
             <button onClick={handleShowDetail} style={{margin:'5px'}}>Click to see</button>
        </div>
    );
};

export default Post;