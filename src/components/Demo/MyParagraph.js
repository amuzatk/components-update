import React from "react";

const MyParagraph = props => {
    console.log('MY good PARAGRAPH RUNNUNG');
    return <p> {props.children} </p>
};


export default MyParagraph;