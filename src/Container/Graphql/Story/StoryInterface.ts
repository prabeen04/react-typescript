
export interface IStories {
    addStoryModal: Boolean;
    stories: IStory[];
    storyDetail: IStory;
}

export interface IStory {
    id: String;
    title: String;
}
