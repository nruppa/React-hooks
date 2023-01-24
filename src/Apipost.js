import React from 'react'

function Apipost() {
  return (
    <div>
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

export default Apipost