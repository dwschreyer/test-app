import React from 'react';
import GenericComponent from '../framework/GenericComponent';
import GenericRepository from '../framework/GenericRepository';
import IResponse from '../framework/IResponse';
import appContext from '../AppContext';

export default class HeaderComponent extends GenericComponent<any, IResponse> {

    async componentDidMount() {
        let data = await GenericRepository.getData<IResponse>(appContext.Urls.testData);
        data.isLoading = false;
        this.setState(data);
    }

    render() {

        if (this.state.isLoading) return null;
        let model = this.state.model;

        return <>
            <header>
                <p>ID: {model.id} ==== Name: {model.name}</p>
            </header>
        </>;
    }
}