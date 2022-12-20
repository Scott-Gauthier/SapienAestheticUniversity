import React from 'react';
import { useMutation } from "@apollo/client";
import { SAVE_CONTENT } from '../../utils/Mutations';
import './SaveButton.css';

function SaveButton(props) {

    const { loading, error } = useMutation(SAVE_CONTENT);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
  
    return (

        <div className="material-symbols-outlined" id={props._id} onClick={() => SAVE_CONTENT(props.data)}>
            <span>favorite</span>
        </div>
    )
}

export default SaveButton;