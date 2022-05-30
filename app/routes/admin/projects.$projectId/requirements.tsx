import Button from '~/components/common/Button';
import TextInput from '~/components/common/TextInput';
import Select from '~/components/Select';
import TextArea from '~/components/common/TextArea';
import { useNavigate } from 'remix';
import { useState } from 'react';

export default function Index() {
  const navigate = useNavigate();
  const [target, setTarget] = useState(1);
  const [target2, setTarget2] = useState(1);
  return (
    <div className="px-32 flex flex-col py-6">
      <h1 className="text-primary-red font-black text-2xl">專案需求</h1>
      <div className="mt-8 space-y-10">
        <div className="flex items-center">
          <div className="w-40">預計完成日</div>
          <TextInput
            className="w-1/5 rounded-md p-2 text-black mr-8"
            value="2022-01-22"
          />
          <div className="ml-32 w-40">服務種類</div>
          <div className="w-1/5 h-12">
            <Select<number>
              className="bg-gray-100 text-black h-12 relative mr-8"
              value = {target}
              onChange={setTarget}
              options= {[
                {
                  value:1,
                  label:'網頁開發'
                },
              ]} />
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-40">案件類型</div>
          <div className="w-1/5 h-12">
            <Select<number>
              className="bg-gray-100 text-black h-12 relative mr-8"
              value = {target2}
              onChange={setTarget2}
              options= {[
                {
                  value:1,
                  label:'電商'
                },
                {
                  value:2,
                  label:'課程'
                },
                {
                  value:3,
                  label:'部落格'
                },
                {
                  value:4,
                  label:'個人形象'
                },
              ]} />
          </div>
          <div className="ml-32 w-40">App 是否需要上架</div>
          <input
            className="appearance-none h-4 w-4 border bg-primary-gray
               rounded-full checked:bg-primary-red ml-32 mr-4"
            type="radio"
            name="SFQ" />
          <div>是</div>
          <TextArea
            className="appearance-none h-4 w-4 border bg-primary-gray
               rounded-full checked:bg-primary-red ml-16 mr-4"
            type="radio"
            name="SFQ" />
          <div>否</div>
        </div>
        <div className="flex">
          <div className="w-40">目標用戶是誰</div>
          <TextArea
            className="w-5/6 rounded-md p-2 text-black h-36 self-start"
          />
        </div>
        <div className="flex">
          <div className="w-40">目標用戶是誰</div>
          <div className="w-5/6">
            <div className="text-gray-400">
              建議頁面：
              <Button
                className="self-center mx-2"
                type="cancel"
                onClick={() => navigate('')}
              >
                首頁
              </Button>
              <Button
                className="self-center mx-2"
                type="cancel"
                onClick={() => navigate('')}
              >
                商店頁
              </Button>
              <Button
                className="self-center mx-2"
                type="cancel"
                onClick={() => navigate('')}
              >
                設定頁
              </Button>
              <Button
                className="self-center mx-2"
                type="cancel"
                onClick={() => navigate('')}
              >
                品牌頁
              </Button>
              <Button
                className="self-center mx-2 "
                type="cancel"
                onClick={() => navigate('')}
              >
                登入
              </Button>
              <Button
                className="self-center mx-2 border-0 text-blue-400 shadow-md"
                type="deactivated"
                onClick={() => navigate('')}
              >
                換一組
              </Button>
            </div>
            <TextArea
              className="w-full rounded-md p-2 text-black h-36 self-start mt-4"
            />
          </div>
        </div>
        <div className="flex">
          <div className="w-40">喜歡的樣式 / 色系</div>
          <TextArea
            className="w-5/6 rounded-md p-2 text-black h-36 self-start" />
        </div>
        <div className="flex">
          <div className="w-40">專案備註</div>
          <TextArea
            className="w-5/6 rounded-md p-2 text-black h-36 self-start" />
        </div>
        <div className="flex">
          <div className="w-40">功能需求</div>
          <TextArea
            className="w-5/6 rounded-md p-2 text-black h-36 self-start"
          />
        </div>
        <div className="flex">
          <div className="w-40">保密條約</div>
          <Button
            className="self-center mx-2 border-0 shadow-md"
            type="deactivated"
            onClick={() => navigate('')}
          >
            + 上傳檔案
          </Button>
        </div>
      </div>
      <Button
        className="mt-8 self-center"
        type="circle"
        onClick={() => navigate('./../tree')}
      >
        下一步
      </Button>
    </div>
  );
}
