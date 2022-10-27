export interface UserModel {
    avatarUrl: string,
    name: string,
    id: string | number
}

export interface ChatModel {
    user: UserModel,
    chats: Array<BubbleModel>
    id: string | number
}

export interface BubbleModel {
    content: string,
    user: UserModel,
    time: Date,
    isSendByMe?: boolean,
    id: string | number
}
