class State<T> {
    protected listeners: T[] = [];

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor() {}

    addListener(listenerFn: T) {
        this.listeners.push(listenerFn);
    }
}

export default State;