import React from 'react';
import HeaderRepository from './HeaderRepository';
import IHeader from './IHeader';

export interface HeaderComponentState {
    isLoading: boolean;
    header: IHeader | null;
}

export default class HeaderComponent extends React.Component<any, HeaderComponentState> {

    constructor(props: any) {
        super(props);

        this.state = {
            isLoading: true,
            header: null
        }
    }

    componentDidMount() {

        var rep = new HeaderRepository();
        rep.GetHeader()
            .then(response => {
                this.setState({ isLoading: false, header: response });
            });
    }

    render() {
        if(this.state.isLoading || !this.state.header) return null; 

        return <>
            <header>
                <p>{this.state.header.title}</p>
            </header>
        </>;
    }
}