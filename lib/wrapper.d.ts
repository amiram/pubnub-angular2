export declare class Wrapper {
    constructor();
    getLabel(): string;
    getOriginalInstance(): any;
    init(initConfig: Object): any;
    subscribe(args: Object): void;
    unsubscribe(args: Object): void;
    unsubscribeAll(): void;
    deleteMessages(args: Object, callback: (status: any, response: any) => void): void;
    getMessage(channel: string | string[]): any[];
    getMessage(channel: string | string[], callback: (message: any) => void): any[];
    getPresence(channel: string | string[], callback: (presence: any) => void): void;
    getStatus(channel: string | string[], callback: (status: any) => void): void;
    getError(channel: string | string[], callback: (error: any) => void): void;
    clean(channel: string | string[]): void;
    release(channel: string | string[]): void;
    publish(message: Object): any;
    publish(message: Object, callback: (status: any, response: any) => void): void;
    fire(args: Object, callback: (status: any, response: any) => void): void;
    fetchMessages(args: Object, callback: (status: any, response: any) => void): void;
    addListener(listener: Object): void;
    removeListener(listener: Object): void;
    removeAllListeners(): void;
    hereNow(args: Object): any;
    hereNow(args: Object, callback: (status: any, response: any) => void): void;
    whereNow(args: Object): any;
    whereNow(args: Object, callback: (status: any, response: any) => void): void;
    getState(args: Object): any;
    getState(args: Object, callback: (status: any, response: any) => void): void;
    setState(args: Object): any;
    setState(args: Object, callback: (status: any, response: any) => void): void;
    grant(args: Object): any;
    grant(args: Object, callback: (status: any) => void): void;
    channelGroups: any;
    history(args: Object): any;
    history(args: Object, callback: (status: any, response: any) => void): void;
    push: any;
    time(): any;
    time(callback: (status: any, response: any) => void): void;
    reconnect(): void;
    stop(): void;
    encrypt(data: string): string;
    encrypt(data: string, customCipherKey: string): string;
    decrypt(data: Object): string;
    decrypt(data: Object, customCipherKey: string): string;
    getAuthKey(): string;
    setAuthKey(key: string): void;
    getUUID(): string;
    setUUID(uuid: string): void;
    getFilterExpression(): string;
    setFilterExpression(setFilterExpression: string): void;
}
