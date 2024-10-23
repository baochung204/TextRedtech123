declare module 'redux-persist/integration/react' {
    export const PersistGate: any;
}


declare module 'redux-persist/lib/storage' {
    const storage: any;
    export default storage;
}