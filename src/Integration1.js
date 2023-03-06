import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core';

function Integration1() {
    const [data1, setdata1] = useState([])
    useEffect(() => {
        axios.get('https://localhost:7000/getdata').
            // then(respone=>console.log(respone))
            then(respone => setdata1(respone.data))
    }, [0])

    const [data, setData] = useState([]);

    const [postformdata, setpostdata] = useState({
        userId: '',
        id: '',
        title: '',
        body: ''
    })
    const handleaddformchange = (e) => {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setpostdata(newdata)
        console.log(newdata);
    }
    const handledelete = (x) => {
        console.log(x.id);
        axios.delete(`https://localhost:7000/deletedata/${x.id}`)
            .then((response) => {console.log(response)
            setdata1(response)}
            );
    }
    const Submit = (e) => {
        e.preventDefault();
        const newdata = {
            userId: e.userId,
            id: e.id,
            title: e.title,
            body: e.body
        };
        const newdata1 = [...data, newdata]
        setData(newdata1);
    }
    return (
        <div>
            {/* {data.map(item => <li key={item.id}>{item.title},{item.userId}</li>)} */}

            <table border="2px" >
                <thead>
                    <tr>
                        <th>userId</th>
                        <th>id</th>
                        <th>title</th>
                        <th>body</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data1.map(x =>
                            <tr key={x.id}>
                                <td>{x.userId}</td>
                                <td>{x.id}</td>
                                <td>{x.title}</td>
                                <td>{x.body}</td>
                                <td><Button onClick={() =>handledelete(x)}>delete</Button></td>

                            </tr>
                        )
                    }
                </tbody>
            </table>
            <form onSubmit={(e) => Submit(e)}>
                <h1>Posting the data</h1>
                <label>userId</label>
                <input type="text" name='userId' onChange={handleaddformchange} /><br></br>
                <label>id</label>
                <input type="text" name='id' onChange={handleaddformchange} /><br></br>
                <label>title ID</label>
                <input type="text" name='title' onChange={handleaddformchange} /><br></br>
                <label>body</label>
                <input type="text" name='body' onChange={handleaddformchange} /><br></br>
                <button type="submit" > Add</button>
                <button type="submit" >Update</button>
            </form>
        </div>
    )
}
export default Integration1
