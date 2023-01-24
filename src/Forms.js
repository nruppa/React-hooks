import React,{useState} from 'react'

function Forms() {
    const [value, setMessage] = useState('');
    const [value1, setmsg] = useState('');

    // const isAnonymous = true;
  
    // const handleClick = event => {
    //   event.currentTarget.disabled = true;
    //   console.log('button clicked');
    // };
  return (
    <div>Forms
        <input
          type="text"
          id="message"
          name="message"
          value={value}
          onChange={event => setMessage(event.target.value)}
        />
        <input
          type="text"
          id="message"
          name="message"
          value={value1}
          onChange={event => setmsg(event.target.value)}
        />
        {/* <button disabled={!message}>Click</button> */}
        <button disabled={!value}>Click</button>
        {/* <button disabled={true} onClick={handleClick}>Click</button> */}

    </div>
  )
}

export default Forms