export interface IStories {
    addStoryModal: Boolean;
    stories: IStory[];
    storyDetail: IStory;
}

export interface IStory {
    id: string;
    title: string;
    createdAt?: string;
}
