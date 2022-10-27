import SideButtons from '~/components/SideButtons';
import Button from '~/components/common/Button';
import classNames from 'classnames';
import { useState } from 'react';

interface Person {
  name: string;
  type: string;
}

interface File {
  name: string;
  href: string;
  size: number | string;
  remark: string;
  people: Person[]
}

const people:Person[] = [
  {
    name: '王小明',
    type: '設計師'
  },
  {
    name: '王小红',
    type: '設計師'
  },
  {
    name: '林昊',
    type: '設計師'
  },
  {
    name: '夏宇航',
    type: '設計師'
  },
  {
    name: '小白',
    type: '設計師'
  }
];

const files: File[] = [
  {
    name: '原始檔.pdf',
    href: '',
    size: '100MB',
    remark: '這裡是備註文字這裡是備註文字',
    people: people.slice(0, 1)
  },
  {
    name: '文件.pdf',
    href: '',
    size: '100MB',
    remark: '這裡是備註文字這裡是備註文字',
    people: people.slice(0, 1)
  },
  {
    name: '文件.pdf',
    href: '',
    size: '100MB',
    remark: '這裡是備註文字這裡是備註文字',
    people: people.slice(0, 3)
  },
  {
    name: '設計草稿.fig',
    href: '',
    size: '100MB',
    remark: '這裡是備註文字這裡是備註文字',
    people: people.slice(0, 2)
  },
  {
    name: '文件.pdf',
    href: '',
    size: '100MB',
    remark: '這裡是備註文字這裡是備註文字',
    people: people.slice(0, 3)
  },
  {
    name: '設計草稿.fig',
    href: '',
    size: '100MB',
    remark: '這裡是備註文字這裡是備註文字',
    people: people.slice(0, 2)
  }
];

export default function Index() {

  return (
    <div className="px-32 flex flex-col py-6">
      <SideButtons type="admin"/>
      <div className="flex items-center mt-12">
        <div className="text-primary-red font-bold text-2xl">檔案管理</div>
        <div className="flex-grow"></div>
        <div>
          <Button
            className="border-0 shadow-md cursor-pointer"
            type="deactivated"
            onClick={() => {}}
          >
            + 上傳檔案
          </Button>
        </div>
      </div>

      <div
        className="flex divide-x h-14 font-bold text-gray-500 mt-12 w-full
      divide-gray-300 text-center bg-primary-gray text-lg">
        <div className="py-4 w-20">No.</div>
        <div className="py-4 w-1/4">檔案上傳</div>
        <div className="py-4 flex-grow">文件大小</div>
        <div className="py-4 w-1/3 text-left pl-7">備註</div>
        <div className="py-4 w-1/4">提供對象</div>
      </div>

      {files.map(
        (file, index) => {
          const { name, href, size, remark, people } = file;

          return (
            <div
              key={index}
              className={classNames(
                'flex divide-x h-20 text-gray-500 w-full',
                'divide-gray-300 text-center',
                index % 2 ? 'bg-primary-gray' : 'bg-white'
              )}>

              <div className="py-7 w-20">{index + 1}</div>

              <div
                className="py-7 w-1/4 text-blue-400 underline">
                <a href={href}>{name}</a>
              </div>

              <div className="py-7 flex-grow">{size}</div>

              <div className="py-7 w-1/3 text-left pl-7">{remark}</div>

              <div className=" w-1/4">
                <Select people={people}/>
              </div>

            </div>
          );
        }
      )}
    </div>
  );
}

function Select(props: { people: Person[] }) {
  const { people } = props;

  const [selectedPeople, setSelectedPeople] = useState<Person[]>([]);
  const [isSelecting, setIsSelecting] = useState(false);

  return (
    <div
      className="flex w-full relative h-20
      items-center justify-center cursor-pointer"
    >
      <div
        onClick={() => { setIsSelecting(!isSelecting); }}
        className="flex flex-col h-full overflow-hidden justify-center"
      >
        {selectedPeople.length === 0 ? '選取提供對象'
          : selectedPeople.map(
            (person, index) => {
              const { name, type } = person;

              return (
                <div key={index}>
                  {name + '(' + type + ')'}
                </div>
              );
            }
          )
        }
      </div>

      <img
        src="/images/select.svg"
        alt="▽"
        className="absolute right-8 top-9 cursor-pointer"
        onClick={() => { setIsSelecting(!isSelecting); }}
      />

      {isSelecting &&
        <div className="z-20 absolute bg-white w-full top-14">
          {people.map(
            (person, index) => {
              const { name, type } = person;

              return (
                <div
                  key={index}
                  className="flex justify-center items-center my-4">
                  <div className="mr-6">
                    <input
                      type="checkbox"
                      className="text-primary-red"
                      checked={selectedPeople.includes(person)}
                      onClick={() => {
                        const index = selectedPeople.indexOf(person);

                        if (index !== -1) {
                          setSelectedPeople(
                            selectedPeople.slice(0, index)
                              .concat(selectedPeople.slice(index + 1)));
                        }
                        else {
                          setSelectedPeople(selectedPeople.concat([person]));
                        }
                      }} />
                  </div>

                  <div>
                    {name + '(' + type + ')'}
                  </div>

                </div>
              );
            }
          )}
        </div>}
    </div>
  );
}
