import React, { useState } from 'react';

const Input = (props) => {
    const [value, setValue] = useState('')
    return (
        <>
       <input type="text" onChange={(e) => setValue(e.target.value)} />
       <button onClick={ () => props.addTask(value)}>Add</button>
       </>
    );
};

export default Input;