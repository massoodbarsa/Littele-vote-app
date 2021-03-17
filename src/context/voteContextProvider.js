import React, { Component } from 'react'
import { createContext } from 'react'

export const VoteContext = createContext()

export default class voteContextProvider extends Component {
    state = {
        voteItems: [],
        title: ''
    }

    addTitle = (title) => {
        this.setState({
            title
        })
    }

    updateItems = (item) => {
        this.setState({
            voteItems: item
        })
    }


    addItem = (item) => {
        console.log(item);
        this.setState({
            voteItems: [...this.state.voteItems,item]
        })
    }

    updateItemInput = (item) => {
        this.setState({
            voteItems: item
        })
    }

    valueObj = {
        addTitle: this.addTitle,
        updateItems: this.updateItems,
        addItem:this.addItem
    }

    render() {
        return (
            <VoteContext.Provider value={{ ...this.state, ...this.valueObj }}>
                {this.props.children}
            </VoteContext.Provider>
        )

    }
}
