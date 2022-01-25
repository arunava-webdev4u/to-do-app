import React, { Component } from 'react';
import ListItem from './ListItem';
import FlipMove from 'react-flip-move';
import '../CSS/MainBox.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons"

export class Main extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            List: [],
            currentItem: {
                input: '',
                key: ''
            }
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
    }
    
    handleInput = (event) => {
        this.setState({
            currentItem: {
                input: event.target.value,
                key: Date.now()
            }
        })
    }

    handleEdit = (newValue, key) => {
        const newList = this.state.List
        newList.map(item => {
            if (item.key === key)
                item.input = newValue
        })
        this.setState({ List: newList })
    }

    addTask = (event) => {
        const newTask = this.state.currentItem;
        if (newTask.input !== "") {
            const newList = [...this.state.List, newTask];
            this.setState({
                List: newList,
                currentItem: {
                    input: '',
                    key: ''
                }
            })
        }
    }

    deleteItem = (key) => {
        const NewList = this.state.List.filter(item => item.key !== key)
        this.setState({
            List: NewList
        })
    }

    render() {
        return (
            <main>
                <div className="box">
                    <div className='form-div'>
                        <form className='form' onSubmit={this.handleSubmit}>
                            <input className='form-input' type='text' value={this.state.currentItem.input} onChange={this.handleInput} placeholder='Enter text...' />
                            <button className='form-submit-button' type='submit' onClick={this.addTask}>+</button>
                        </form>
                    </div>
                    <FlipMove duration={500} enterAnimation="elevator" leaveAnimation="elevator">
                    {(this.state.List.length !== 0)?
                        <div className='body-div'>
                                <ListItem list={this.state.List} deleteItem={this.deleteItem} handleEdit={this.handleEdit}/>
                        </div> : null
                    }
                    </FlipMove>
                </div>
            </main>
        )
    }
}

export default Main;
{/* <FontAwesomeIcon icon={faPlusCircle} /> */}