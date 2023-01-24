import React, { useEffect, useState } from 'react';
// import useFetch from './useFetch';

function Crud() {
    const [data1, setdata1] = useState([])
    // const [data1]=useFetch("https://jsonplaceholder.typicode.com/posts")
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts').then(respone => respone.json()).
            // then(json=>console.log(json)) 
            then(json => setdata1(json))
    }, [])
    const [data, setData] = useState([]);
    const [addformdata, setformdata] = useState({
        userId: '',
        id: '',
        title: '',
        body: ''
    })
console.log(data1);
    const handleaddformchange = (event) => {
        event.preventDefault();
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        const newformdata = { ...addformdata };
        newformdata[fieldName] = fieldValue
        setformdata(newformdata)
    }
    const addSubmit = (event) => {
        event.preventDefault();
        const newdata = {
            userId: addformdata.userId,
            id: addformdata.id,
            title: addformdata.title,
            body: addformdata.body
        };
        const newdata1 = [...data, newdata]
        setData(newdata1);
    }
    console.log("addSubmit");
    
    return (
        <div>Crud
             <form onSubmit={addSubmit}>
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
                <button type="submit">Update</button>
            </form>
            {/* {data.map(item=><li key={item.id}>{item.title},{item.userId}</li>)} */}

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
                        data1.map(x => <tr key={x.id}>
                            <td  >{x.userId}</td>
                            <td  >{x.id}</td>
                            <td  >{x.title}</td>
                            <td  >{x.body}</td>
                            <td><button>Delete</button></td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Crud