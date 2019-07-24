import React from "react";


export interface GenericState<TStateModel> {
    isLoading: boolean;
    model: TStateModel;
}

export default class GenericComponent<TPropsModel, TStateModel> extends React.Component<TPropsModel, GenericState<TStateModel>> {

    constructor(props: TPropsModel) {
        super(props);

        this.state = {
            isLoading: true,
            model: {} as TStateModel
        }
    }

    stateInvalid() : boolean {
        return (this.state.isLoading || !this.state.model); 
    }
}