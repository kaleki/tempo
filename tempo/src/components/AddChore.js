import React from 'react';
import PropTypes from 'prop-types';

export const AddChore = ({name, price, hours, onChange, onSubmit}) => (
    <div className = "row justify-content-center">
        <form className = "form-inline">
            <input
            type = "text"
            className = "form-control"
            placeholder = "Item"
            value = {name}
            name = "name"
            onChange = {onChange}
            />
            <div className = "input-group">
            <input
            type = "text"
            className = "form-control"
            placeholder = "Price"
            value = {price}
            name = "price"
            onChange = {onChange}
            />
            </div>
            <div className = "input-group">
            <input 
            type = "text"
            className = "form-control"
            placeholder = "Wage"
            value = {hours}
            name = "hours"
            onChange = {onChange}
            />
            </div>
            <button type = "submit" onClick = {onSubmit} className = "btn btn-primary">Save</button>
        </form>
    </div>
); 

AddChore.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    hours: PropTypes.string.isRequired
};