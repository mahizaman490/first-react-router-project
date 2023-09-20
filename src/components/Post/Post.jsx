const Post = ({post}) => {
    const {id,title} = post;
    const PostStyle = {
        border : '2px solid red',
        padding : '5px',
        borderRadius: '20px',
        backgroundColor: 'tomato'
    }
    return (
        <div style={PostStyle}>
            <h4>Post of id:{id}</h4>
            <h4>Post title :{title}</h4>
            
        </div>
    );
};

export default Post;