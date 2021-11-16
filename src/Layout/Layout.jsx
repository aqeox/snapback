import React, { Component } from 'react'
import { Header } from '../Component/header/Header'
import { Body } from '../Component/Body/Body'

export default class Layout extends Component {
    render() {
        return (
            <div>
                <Header />
                <Body />
            </div>
        )
    }
}
