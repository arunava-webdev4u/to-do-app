import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faTrashAlt} from "@fortawesome/free-solid-svg-icons"
import FlipMove from 'react-flip-move';
import '../CSS/ListItems.css'

function ListItem(props) {
    const { list } = props
    const listItems = list.map(item => {
        return (
            <div className='listItemBox' key={item.key}>
                <input className='listItem' value={item.input} onChange={ (event) => props.handleEdit(event.target.value, item.key) }></input>
                <div className='deleteIcon'>
                    <FontAwesomeIcon icon={faTrashAlt} onClick={ () => props.deleteItem(item.key) }/>
                </div>
            </div>
        )
    });
    
    return (
        <>
            <FlipMove duration={500} enterAnimation="elevator" leaveAnimation="elevator">
            {listItems}
            </FlipMove>
        </>
    )
}

export default ListItem;