import React from "react";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {zapros} from "../../../reduxjs/actions";

const User = ({ info }) => {
    const dispatch = useDispatch()
  return (
    <div>
      <h1>{info.name}</h1>
      <p>{info.email}</p>
        <Link to={`/user/${info.id}`}>
            <button onClick={()=> dispatch(zapros(info.id))}>more info</button>
        </Link>

    </div>
  );
};

export default User;
