import Proposal from '~/routes/admin/components/Proposal';

export default function Index() {
  const proposalCards = [
    {
      id: 0,
      state: 'negotiation',
      date: '2021-05-01',
      name: '檸檬科技股份有限公司',
      type: 'App 開發 -iOS',
      responsiblePerson: '王小明',
      telephone: '0912-345678',
      businessPerson: '李鵬',
    },
    {
      id: 1,
      state: 'negotiation',
      date: '2021-05-01',
      name: '檸檬科技股份有限公司',
      type: 'App 開發 -iOS',
      responsiblePerson: '王小明',
      telephone: '0912-345678',
      businessPerson: '李鵬',
    },
    {
      id: 2,
      state: 'unBuilt',
      date: '2021-05-01',
      name: '檸檬科技股份有限公司',
      type: 'App 開發 -iOS',
      responsiblePerson: '王小明',
      telephone: '0912-345678',
      businessPerson: '李鵬',
    },
    {
      id: 3,
      state: 'unSigned',
      date: '2021-05-01',
      name: '檸檬科技股份有限公司',
      type: 'App 開發 -iOS',
      responsiblePerson: '王小明',
      telephone: '0912-345678',
      businessPerson: '李鵬',
    },
    {
      id: 4,
      state: 'unSigned',
      date: '2021-05-01',
      name: '檸檬科技股份有限公司',
      type: 'App 開發 -iOS',
      responsiblePerson: '王小明',
      telephone: '0912-345678',
      businessPerson: '李鵬',
    }
  ];

  return (
    <div className="flex flex-col mt-8">
      <div
        className="flex mb-4 w-5/6 self-center text-left
       bg-white rounded-2xl shadow-md">
        <img src="/images/search.svg" alt="" />
        <input
          className="self-center ml-4 text-lg text-usual-gray
        outline-none w-full "
          placeholder="搜尋專案" />
      </div>
      <div className="flex flex-col items-center">
        {
          proposalCards.map(proposalCard => {
            const {
              id,
              state,
              date,
              name,
              type,
              responsiblePerson,
              telephone,
              businessPerson
            } = proposalCard;
            return (
              <Proposal
                key={id}
                state={state}
                date={date}
                name={name}
                type={type}
                responsiblePerson={responsiblePerson}
                telephone={telephone}
                businessPerson={businessPerson}
              />
            );
          })
        }
      </div>
    </div>
  );
}
