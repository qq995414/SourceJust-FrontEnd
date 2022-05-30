import SideButtons from '~/components/SideButtons';
import Window from '~/components/chat/Window';

export default function Index() {
  return (
    <div
      className="w-full shadow-2xl border-t-2 border-x-2
    rounded-2xl flex flex-col my-24 overflow-hidden">
      <SideButtons type="client" />
      <Window />
    </div>
  );
}
