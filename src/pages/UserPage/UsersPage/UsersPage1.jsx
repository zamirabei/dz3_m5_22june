import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";
import {zapros} from "../../../reduxjs/actions";

const UsersPage1 = () => {
    const user = useSelector(state => state.fetchUsers.user)
    const dispatch = useDispatch()
    let {userId} = useParams()
    useEffect(()=>{
        dispatch(zapros(userId))
    },[dispatch])

    return (
        <div>
            <p>{user.name}</p>
            <p>{user.phone}</p>
            <p>{user.username}</p>
            <p>{user.email}</p>
            <p>{user.website}</p>
            <Link to={"/"}>
                <button>To home</button>
            </Link>
        </div>
    );
};

export default UsersPage1;