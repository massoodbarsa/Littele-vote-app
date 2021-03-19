import React, { Component } from 'react'
import { createContext } from 'react'

export const VoteContext = createContext()

export default class voteContextProvider extends Component {

    state = {
        voteItems: [],
        title: '',
        votes: [],
        disableInputs: false
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

        const value = { 'item': item, 'id': id, 'point': 0 }

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
        const copyVoteArray = [...this.state.voteItems]

        const newVoteArray = copyVoteArray.map(i => {
            if (i.item === radio) {
                i.point += 1
            }
            return i
        })

        this.setState({
            votes: [...newVoteArray]
        })

    }

    resetState = () => {
        this.setState({
            voteItems: [],
            title: '',
            votes: [],
            disableInputs: !this.state.disableInputs
        })
    }

    updateInputs = (value, id) => {

        const copyVoteArray = [...this.state.voteItems]

        const newVoteArray = copyVoteArray.map(i => {
            if (i.id === id) {
                i.item = value
            }
            return i
        })

        this.setState({
            voteItems: [...newVoteArray]
        })
    }

    disableChangeInput = () => {

        this.setState({
            disableInputs: true
        })
    }

    valueObj = {
        addTitle: this.addTitle,
        deleteItems: this.deleteItems,
        addItem: this.addItem,
        updateVotes: this.updateVotes,
        resetState: this.resetState,
        updateInputs: this.updateInputs,
        disableChangeInput: this.disableChangeInput

    }

    render() {
        return (
            <VoteContext.Provider value={{ ...this.state, ...this.valueObj }}>
                {this.props.children}
            </VoteContext.Provider>
        )

    }
}
