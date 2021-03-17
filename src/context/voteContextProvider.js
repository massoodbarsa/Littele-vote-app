import React, { Component } from 'react'
import { createContext } from 'react'

export const VoteContext = createContext()

export default class voteContextProvider extends Component {
    state = {
        voteItems: [],
        title: '',
        votes: [{ 'item': 'salam', 'point': 1 }]
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
            voteItems: [...this.state.voteItems, item]
        })
    }

    updateItemInput = (item) => {
        this.setState({
            voteItems: item
        })
    }
    ///////////////////////
    updateVotes = (radio) => {

        const value = { 'item': radio, 'point': 1 }

        const newVotes = [...this.state.votes]

        const notExist = this.state.votes.filter(i => {
            return i.item !== radio
        })
        // console.log('notExist   ');
        // console.log(notExist);

        const exist = this.state.votes.filter(i => {
            return i.item === radio
        })

        // console.log('exist   ');
        // console.log(exist);

        if (exist.length === 0) {
            console.log('add');
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

    valueObj = {
        addTitle: this.addTitle,
        updateItems: this.updateItems,
        addItem: this.addItem,
        updateVotes: this.updateVotes
    }



    render() {
        return (
            <VoteContext.Provider value={{ ...this.state, ...this.valueObj }}>
                {this.props.children}
            </VoteContext.Provider>
        )

    }
}
