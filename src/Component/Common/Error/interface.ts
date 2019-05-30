export interface IError {
    description: string;
    children?: JSX.Element;
    image?: HTMLImageElement | string;
    rest?: any[]
}