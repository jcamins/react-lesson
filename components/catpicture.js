import React from 'react'

export default class CatPicture extends React.PureComponent {
    render() {
        return <img src="http://thecatapi.com/api/images/get?format=src&type=gif" />
    }
}