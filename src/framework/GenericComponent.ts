import React from "react";
import GenericState from "../models/GenericState";

export default abstract class GenericComponent<TPropsModel, TStateModel> extends React.Component<TPropsModel, GenericState<TStateModel>> {

    constructor(props: TPropsModel) {
        super(props);

        this.state = {
            isLoading: true,
            model: {} as TStateModel
        }
    }

    // stateInvalid() : boolean {
    //     return (this.state.isLoading || !this.state.model); 
    // }
}