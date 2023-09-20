import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css'
const Users = () => {
    const users = useLoaderData()
    return (
        <div>
            <h2>Our Users {users.length}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum minus et ratione perferendis incidunt ea molestias officiis porro, magni repudiandae?</p>
            <div className="users">
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;