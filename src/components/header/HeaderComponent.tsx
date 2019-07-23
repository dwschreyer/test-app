import React from 'react';
import HeaderRepository from './HeaderRepository';
import IHeader from './IHeader';

export interface ReviewAllocationComponentState {

}

export default class ReviewAllocationComponent extends React.Component<any, IHeader> {

    componentDidMount() {
        var rep = new HeaderRepository();
        var header = rep.GetHeader()
            .then(a => {
                this.setState(a);
            });
    }

    render() {
        if(!this.state) return null; 

        return <>
            <header>
                <p>This is the header title: {this.state.title}</p>
            </header>
        </>;
    }
}