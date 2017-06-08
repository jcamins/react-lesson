import React from 'react'
import PropTypes from 'prop-types'
import { browserHistory } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import { rhythm } from '../../utils/typography'

import '../../css/slides.css';

export default class Template extends React.Component {
    static propTypes = {
        children: PropTypes.any
    }

    next() {
        try {
            const next = Number(this.props.location.pathname.match(/([0-9]{2})/)[1]) + 1;
            const nextString = next >= 10 ? next.toString() : `0${next}`;
            browserHistory.push(this.props.route.childRoutes.filter((route) => route.path.indexOf(`/slides/${nextString}`) === 0)[0].path);
        } catch (e) {
            browserHistory.push('/slides/');
        }
    }

    previous() {
        try {
            const previous = Number(this.props.location.pathname.match(/([0-9]{2})/)[1]) - 1;
            const previousString = previous >= 10 ? previous.toString() : `0${previous}`;
            browserHistory.push(this.props.route.childRoutes.filter((route) => route.path.indexOf(`/slides/${previousString}`) === 0)[0].path);
        } catch (e) {
            browserHistory.push('/slides/');
        }
    }

    listener = (ev) => {
        switch (ev.keyCode) {
            case 37:
                this.previous();
                break;
            case 38:
                browserHistory.push('/');
                break;
            case 39:
                this.next();
                break;
        }
    }

    componentDidMount() {
        window.addEventListener('keyup', this.listener);
    }

    componentWillUnmount() {
        window.removeEventListener('keyup', this.listener);
    }

    render() {
        return (
            <div className="slide">
                {this.props.children}
            </div>
        );
    }
}