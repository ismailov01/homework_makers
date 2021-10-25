import React from 'react';

const View = (props) => {
    console.log(props.todos);
    return (
        <div>
            <ul>
                {
                    props.todos.map((item) => (
                        <li key ={item.id}>{item.title}</li>
                    ))
                }
            </ul>
        </div>
    );
};

export default View;