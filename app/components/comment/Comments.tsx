import Comment from './Comment';
import { CommentModel } from './Model';

interface Props {
  comments: Array<CommentModel>
}

export default function (props: Props) {
  const { comments }=props;

  return (
    <div className="w-full">
      {comments.map((comment, index) => {
        return (
          <Comment
            key={index}
            index={index}
            comment={comment}
          />
        );
      })}
    </div>
  );

}
