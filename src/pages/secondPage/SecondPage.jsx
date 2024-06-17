import React, {useState} from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import { Container, Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import {useDispatch, useSelector} from "react-redux";
import {fetchUserData, fetchUserSecond} from "../../redux/actions/actions";
import SpinnerOne from "../../spinner/Spinner";


const SecondPage = () => {
    const [userSecondPage, setUserSecondPage] = useState({
        fullname: "",
        confirmPassword: "",
        userName: "",
        email: ""
    })
    const dispatch = useDispatch()
    const preloader = useSelector(state => state.postsReducer.preloader)
    const validation = /^[a-zA-Z0-9._%+-]+@gmail\.com$/
    const validationName = /^\w+$/
    const validationPassword = /^\d+$/



    function formChange (event) {
        event.preventDefault()
        setUserSecondPage({
            ...userSecondPage,
            [event.target.name]:event.target.value
        })
        console.log(userSecondPage)
    }

    const submitOne = (event) =>{
        event.preventDefault()
        if (userSecondPage.fullname.trim() === '' || userSecondPage.confirmPassword.trim() === ''  || userSecondPage.userName.trim() === '' || userSecondPage.email.trim() === ''){
            alert("zapolnite vse polya!")
        }
        if(validation.test(!userSecondPage.email) || validationName.test(!userSecondPage.userName) || validationPassword.test(!userSecondPage.confirmPassword)){
            alert("vvedite korrektnye dannye")
        }

        dispatch(fetchUserSecond(userSecondPage))
    }
    if (preloader) return <SpinnerOne/>
    return (
        <div>
            <Container>
                <Form onChange={formChange}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="email" name="email"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Fullname</Form.Label>
                        <Form.Control type="text" placeholder="fullname" name="fullname"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>userName</Form.Label>
                        <Form.Control type="text" placeholder="name" name="userName" />
                    </Form.Group>
                    <Button variant="outline-success" onClick={submitOne}>Submit</Button>
                </Form>
            </Container>


        </div>
    );
};

export default SecondPage;