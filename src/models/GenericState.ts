export default interface GenericState<TStateModel> {
    isLoading: boolean;
    model: TStateModel;
}