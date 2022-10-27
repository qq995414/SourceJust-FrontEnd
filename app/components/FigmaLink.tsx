export default function (props: { link: string }) {
  return <div>
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="text-pink-500"
      href={props.link}>
      本頁面的設計稿在 {props.link}
    </a>
  </div>;
}
