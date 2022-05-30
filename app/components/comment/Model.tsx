interface UserModel {
    name: string,
    id: string | number
}

export interface CommentModel {
    id: string | number,
    isRead?: boolean,
    bubbles: Array<BubbleModel>
}

export interface BubbleModel {
    user: UserModel,
    content: string,
    time: Date
}
