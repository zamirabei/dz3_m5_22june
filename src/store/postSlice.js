import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import counter from "../counter/Counter";


export const getPosts = createAsyncThunk(
    "getPosts",
    async function (info, { dispatch, reject }) {
        dispatch(loaderon());
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(info),
        };
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts",
            options
        );
        const data = await response.json();
        console.log(data);
        dispatch(loaderoff());
    }
);

const postSlice = createSlice ({
    name: 'postSlice',
    initialState: {
        counter: 0,
        loader: false,
    },
    reducers: {
        increment:(state, action) => {
            state.counter += action.payload
        },
        decrement: (state, action)=> {
            state.counter =  Math.max(state.counter - action.payload, 0)
        },
        reset: (state) => {
            state.counter = 0
        },
        loaderoff:(state) => {
            state.loader = false
        },
        loaderon: (state) => {
            state.loader = true
        }
    }
})


export const {increment, decrement, reset, loaderoff, loaderon } = postSlice.actions

export default postSlice.reducer;