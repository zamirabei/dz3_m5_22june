import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../store/postSlice";
import Loading from "../loading/Loading";
import {Link} from "react-router-dom";

const MainPage = () => {
    const loader = useSelector(state => state.postSlice.loader)
    const dispatch = useDispatch()
    const [user, setUser] = useState(
        {
            name: '',
            username: '',
            email: "",
            password: ''
        }
    )

    const postChange = (event) => {
        event.preventDefault()
        setUser({
            ...user,
            [event.target.name] : event.target.value

        })
    }

    const regName = /a-z/i
    const zapros = (e) => {
        e.preventDefault()
        const {name, username, email, password} = user;
        if (!regName.test(name) || regName.test(email) || regName.test(password)){
            alert ('vvedite korrektno dannye!')
        }
        else if (!name || !email || !username || !password ){
            alert ('zapolnite vse polya!')
        }else {
            dispatch(getPosts(user))
        }
    }

    if (loader)return <Loading/>

    return (
        <Form onChange={(e)=> postChange(e)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name='email' />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>User name</Form.Label>
                <Form.Control type="text" placeholder="Enter User name"  name='username'/>

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" name="name" />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password"  name='password'/>

            </Form.Group>
            <Button variant="outline-primary" onClick={zapros}>submit</Button>
            <Link to={'/counter'}>
                <button>go to counter!</button>
            </Link>
        </Form>
    );
};

export default MainPage;