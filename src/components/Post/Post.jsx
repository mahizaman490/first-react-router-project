const Post = ({post}) => {
    const {id,title} = post;
    const userStyle = {
        border : '2px solid yellow',
        padding : '5px',
        borderRadius: '20px'
    }
    return (
        <div style={userStyle}>
            <h4>Post of id:{id}</h4>
            <h4>Post title :{title}</h4>
            
        </div>
    );
};

export default Post;