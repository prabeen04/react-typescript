
export interface IStories {
    addStoryModal: Boolean;
    stories: IStory[];
    storyDetail: IStory;
}

export interface IStory {
    title: String
}

export interface IAddStoryModal {
    title?: string;
    visible: boolean;
    toggle: () => void;
    children: JSX.Element;
    noHeader?: boolean;
}