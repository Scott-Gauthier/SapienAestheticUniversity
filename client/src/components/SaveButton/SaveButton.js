import React from 'react';
import { useMutation } from "@apollo/client";
import { SAVE_CONTENT } from '../../utils/Mutations';
import './SaveButton.css';

function SaveButton(props) {

    const [save_item, { loading, error }] = useMutation(SAVE_CONTENT);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (

        <div className="material-symbols-outlined" id={props.id} onClick={() => save_item(
            {
                variables: { id: props.id }
            })}>
            <span>favorite</span>
        </div>
    )
}

export default SaveButton;