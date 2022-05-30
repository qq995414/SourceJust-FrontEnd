import Button from '~/components/common/Button';
import SideButtons from '~/components/SideButtons';
import TextInput from '~/components/common/TextInput';
import { useNavigate } from 'remix';

interface Props {
  name: string;
  contact: string;
}

export default function Index() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen">
      <SideButtons type="client"/>
      <div className="w-full h-20 text-center text-3xl tracking-[0.3em] mt-6">
        <p>設定SEO</p>
      </div>
      <div className="w-full flex flex-col h-96">
        <TextCard name="Title" contact="2021 奧運運動會" />
        <TextCard name="Meta Keywords" contact="奧運、運動會" />
        <TextCard name="Meta Description" contact="2021東京奧運中華隊賽程表出爐！現在搶先看！" />
      </div>
      <div className="text-center w-full">
        <Button
          className="h-12 w-32"
          onClick={() => {
            navigate('../test-server');
          }}>下一步</Button>
      </div>
    </div>
  );
}

function TextCard(props: Props) {
  return (
    <div className="w-full h-20 flex text-lg items-center">
      <p className="w-1/5 ml-4 tracking-[0.1em]">{props.name}</p>
      <TextInput className="ml-10 h-12 w-3/5" placeholder={props.contact} />
    </div>
  );
}
