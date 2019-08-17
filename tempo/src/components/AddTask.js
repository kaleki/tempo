import React from 'react';
import PropTypes from 'prop-types';

export const AddTask = ({task, time, onChange, onSubmit}) => (
    <div className = "row justify-content-center">
        <form className = "form-inline">
            <input
            type = "text"
            className = "form-control"
            placeholder = "Chore"
            value = {task}
            name = "task"
            onChange = {onChange}
            />
            <div className = "input-group">
            <input
            type = "text"
            className = "form-control"
            placeholder = "time"
            value = {time}
            name = "time"
            onChange = {onChange}
            />
            </div>
            <button type = "submit" onClick = {onSubmit} className = "btn btn-primary">Calculate</button>
        </form>
    </div>
);

AddTask.propTypes = {
    task: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired
};