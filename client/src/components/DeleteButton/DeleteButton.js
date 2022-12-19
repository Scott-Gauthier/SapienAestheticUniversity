import React from 'react';
import { useMutation } from "@apollo/client";
import { REMOVE_CONTENT } from '../../utils/Mutations';
import './DeleteButton.css';

function DeleteButton(props) {

    const { loading, error, data } = useMutation(REMOVE_CONTENT);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
  
    return (

        <div className="material-symbols-outlined" id={props.id} onClick={() => REMOVE_CONTENT(props.id)}>
            <span>close</span>
        </div>
    )
}

export default DeleteButton;