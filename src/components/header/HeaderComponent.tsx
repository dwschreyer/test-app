import React from 'react';
import GenericComponent from '../../framework/GenericComponent';
import HeaderRepository from './HeaderRepository';
import IHeader from './IHeader';
import IHeaderProps from './IHeaderProps';

export default class HeaderComponent extends GenericComponent<IHeaderProps, IHeader> {

    componentDidMount() {

        var rep = new HeaderRepository();
        rep.GetHeader()
            .then(response => {
                this.setState({ isLoading: false, model: response });
            });
    }

    render() {

        if(this.stateInvalid()) return null; 

        return <>
            <header>
                <p>ID: {this.state.model.id} ==== Title: {this.state.model.title}</p>
                <p>Parent: {this.props.parent}</p>
            </header>
        </>;
    }
}