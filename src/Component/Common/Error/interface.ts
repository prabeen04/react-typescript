export interface IError {
    description: string;
    children?: JSX.Element;
    image?: HTMLImageElement | string;
    iconType?: string;
    rest?: any[]
}