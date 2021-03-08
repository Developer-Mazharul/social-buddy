import React from 'react';

const Comments = (props) => {
    const {name, email} = props.comment;
    return (
        <p>
            {name}: {email}
        </p>
    );
};

export default Comments;