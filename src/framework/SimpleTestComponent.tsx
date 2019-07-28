import React from 'react';
import GenericComponent from "./GenericComponent";
import IResponse from "./IResponse";

export default class SimpleTestComponent extends GenericComponent<any, IResponse> {

    constructor(props: any) {
        super(props);

        this.state = {
            isLoading: true,
            model: {} as IResponse
        }
    }

    componentWillMount() {
        this.setState({
            isLoading: false,
            model: { id: 1, name: "The Name" }
        });
    }

    render() {
        if(this.state.isLoading) return null;

        return <p>Hello</p>;
    }
}