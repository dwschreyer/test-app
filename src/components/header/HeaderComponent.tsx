import React from 'react';
import HeaderRepository from './HeaderRepository';

export default class ReviewAllocationComponent extends React.Component<any, any> {

    componentDidMount() {
        var rep = new HeaderRepository();
        var header = rep.GetHeader().then(a => a);
    }

    render() {
        return <>
            <header>
                <p>This is the header.</p>
            </header>
        </>;
    }
}