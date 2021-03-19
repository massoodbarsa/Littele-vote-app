import React, { Component } from 'react'
import { createContext } from 'react'

export const VoteContext = createContext()

export default class voteContextProvider extends Component {

    state = {
        voteItems: [],
        title: '',
        votes: []
    }

    addTitle = (title) => {
        this.setState({
            title
        })
    }

    deleteItems = (item) => {
        this.setState({
            voteItems: item
        })
    }

    addItem = (item, id) => {

        const value = { 'item': item, 'id': id }

        this.setState({
            voteItems: [...this.state.voteItems, value]
        })
    }

    updateItemInput = (item) => {
        this.setState({
            voteItems: item
        })
    }

    updateVotes = (radio) => {

        const value = { 'item': radio, 'point': 1 }

        const notExist = this.state.votes.filter(i => {
            return i.item !== radio
        })

        const exist = this.state.votes.filter(i => {
            return i.item === radio
        })

        if (exist.length === 0) {
            this.setState({
                votes: [...this.state.votes, value]
            })

        } else {
            const newValue = { 'item': exist[0].item, 'point': parseInt(exist[0].point) + 1 }
            this.setState({
                votes: [...notExist, newValue]
            })
        }

    }

    resetState = () => {
        this.setState({
            voteItems: [],
            title: '',
            votes: []
        })
    }

    updateInputs = (value, id) => {

        const newVoteArray = [...this.state.voteItems]

        const existItem = newVoteArray.filter(i => {
            return i.id === id
        })

        const notExistItem = newVoteArray.filter(i => {
            return i.id !== id
        })

        this.setState({
            voteItems: [...notExistItem, { item: value, id: id }]
        })
    }


    valueObj = {
        addTitle: this.addTitle,
        deleteItems: this.deleteItems,
        addItem: this.addItem,
        updateVotes: this.updateVotes,
        resetState: this.resetState,
        updateInputs: this.updateInputs
    }

    render() {
        return (
            <VoteContext.Provider value={{ ...this.state, ...this.valueObj }}>
                {this.props.children}
            </VoteContext.Provider>
        )

    }
}
