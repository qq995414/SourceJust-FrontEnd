import TextInput from '~/components/common/TextInput';
import { data, data01, bdata } from '~/mocks/dashboard';
import { PropsWithChildren, useCallback, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Sector, Cell } from 'recharts';
import { BarChart, Bar, Legend } from 'recharts';
import { Link } from '@remix-run/react';

interface Props{
  value:string;
  number:string;
}

interface SProps {
  isState:boolean,
  client: string,
  type: string,
  state: string,
  detail: string,
}

const renderActiveShape = (props: any) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
    job
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`${job} ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

const COLORS = ['#EB6870', '#FACB8E', '#B47873', '#DCAB99', '#F9CDAF'];

export default function Index() {
  const [CardList, setCardList] = useState([
    {
      isState:false,
      client:'檸檬科技股份有限公司',
      type:'APP開發',
      state:'提案中',
      detail:'詳細'
    }, {
      isState:false,
      client:'檸檬科技股份有限公司',
      type:'APP開發',
      state:'提案中',
      detail:'詳細'
    }, {
      isState:false,
      client:'檸檬科技股份有限公司',
      type:'APP開發',
      state:'提案中',
      detail:'詳細'
    }, {
      isState:true,
      client:'檸檬科技股份有限公司',
      type:'APP開發',
      state:'開發中',
      detail:'詳細'
    }, {
      isState:true,
      client:'檸檬科技股份有限公司',
      type:'APP開發',
      state:'開發中',
      detail:'詳細'
    }, {
      isState:true,
      client:'檸檬科技股份有限公司',
      type:'APP開發',
      state:'開發中',
      detail:'詳細'
    }
  ]);
  return <div className="h-screen w-full">
    <div className="h-full w-full mx-auto container px-16">
      <div className="h-full w-full flex flex-col">
        {/* Card */}
        <div className="w-full my-12 flex ml-8">
          <AdminCard value="客戶數" number="50">
            <div className="justify-center mx-auto w-full flex">
              <p>比上週</p>
              <img className="mx-2 h-4" src="/images/admin-Arrow.svg" alt=""/>
              <p>10%</p>
            </div>
          </AdminCard>
          <AdminCard value="訂單數" number="50">
            <div className="justify-center mx-auto w-full flex">
              <p>比上週</p>
              <img className="mx-2 h-4" src="/images/admin-Arrow.svg" alt=""/>
              <p>10%</p>
            </div></AdminCard>
          <AdminCard value="總銷售金額" number="＄100,000,0">
            <div className="justify-center mx-auto w-full flex">
              <p>比上週</p>
              <img className="mx-2 h-4" src="/images/admin-Arrow.svg" alt=""/>
              <p>10%</p>
            </div>
          </AdminCard>
          <AdminCard value="利潤" number="＄50,000,0">
            <div className="justify-center mx-auto w-full flex">
              <p>比上週</p>
              <img className="mx-2 h-4" src="/images/admin-Arrow.svg" alt=""/>
              <p>10%</p>
            </div></AdminCard>
        </div>
        {/* Content Area Chart*/}
        <div className="h-auto w-full mt-12">
          <div className="flex justify-between w-full mb-8">
            <p className="ml-10 font-bold p-2 text-center text-lg">總銷售額</p>
            <TextInput
              className="w-40 rounded-r-full
              text-center rounded-l-full p-2 "
              value="今年"
              onChange={()=>{}}></TextInput>
          </div>
          <div className=" w-full flex justify-center">
            <AChart></AChart>
          </div>
        </div>
        {/* Content Pie Chart 1 */}
        <div className="h-auto w-full mt-12">
          <div className="flex justify-between w-full mb-8">
            <p className="ml-10 font-bold p-2 text-center text-lg">類型分析</p>
          </div>
          <div className=" w-full flex justify-center">
            <PChart></PChart>
          </div>
        </div>
        {/* Content Pie Chart 2 */}
        <div className="h-auto w-full mt-12">
          <div className="flex justify-between w-full mb-8">
            <p className="ml-10 font-bold p-2 text-center text-lg">產業分析</p>
          </div>
          <div className=" w-full flex justify-center">
            <PChart></PChart>
          </div>
        </div>
        {/* Content Lie Chart */}
        <div className="h-auto w-full mt-12">
          <div className="flex justify-between w-full mb-8">
            <p className="ml-10 font-bold p-2 text-center text-lg">總銷售</p>
          </div>
          <div className=" w-full flex justify-center">
            <BChart></BChart>
          </div>
        </div>
        {/* Content Cards */}
        <div className="h-auto w-full mt-12">
          <div className="flex justify-between w-full mb-8">
            <p className="font-bold p-2 text-center text-lg w-1/4">未結客戶</p>
            <p className="font-bold p-2 text-center text-lg w-1/4">類型</p>
            <p className="font-bold p-2 text-center text-lg w-1/4">狀態</p>
            <p className="w-1/4"></p>
          </div>
          <div className=" w-full h-auto mb-28">
            {CardList.map((i)=><StateCard
              key={i.client}
              isState={i.isState}
              client={i.client}
              type={i.type}
              state={i.state}
              detail={i.detail}
            />)}
          </div>
        </div>

      </div>
    </div>
  </div>;
}

function AdminCard(props:PropsWithChildren<Props>){
  return (<div className="w-full h-32 shadow-md mx-5 rounded-md">
    <div className="h-full w-full">
      <p className="w-1/4 mt-2 mx-1 text-center text-sm h-1/4">{props.value}</p>
      <p className="w-full text-center text-2xl h-1/3 my-1">{props.number}</p>
      <p
        style={{ color:'#11C00E' }}
        className="w-full text-center font-bold
      text-sm tracking-widest h-1/4">{props.children}</p>
    </div>
  </div>);
}

const toPercent = (fixed = 0) => `$${(fixed)}`;

function AChart(){
  return (<AreaChart
    width={1000}
    height={400}
    data={data}
    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
    <defs>
      <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#B6212254" stopOpacity={0.8}/>
        <stop offset="95%" stopColor="#B6212254" stopOpacity={0}/>
      </linearGradient>
    </defs>
    <XAxis dataKey="name" />
    <YAxis axisLine={false} orientation="right" tickFormatter={toPercent} />
    <CartesianGrid vertical={false} strokeDasharray="3 3" />
    <Tooltip />
    <Area type="monotone" dataKey="pv" stroke="#B6212254" fillOpacity={1} fill="url(#colorPv)" />
  </AreaChart>);
}

function PChart(){
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );
  return (<PieChart width={800} height={480}>
    <Pie
      activeIndex={activeIndex}
      activeShape={renderActiveShape}
      data={data01}
      dataKey="value"
      nameKey="name"
      cx="50%"
      cy="50%"
      innerRadius={80}
      outerRadius={200}
      onMouseEnter={onPieEnter}
      fill="#B6212254" >
      {data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
  </PieChart>);
}

function BChart(){
  return (<BarChart
    width={1100}
    height={600}
    data={bdata}
    margin={{
      top: 20,
      right: 30,
      left: 20,
      bottom: 5,
    }}
  >
    <CartesianGrid vertical={false} horizontal={false} strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar className="rounded-lg" dataKey="pv" stackId="a" fill="#EB6870" />
    <Bar className="rounded-lg"dataKey="uv" stackId="a" fill="#EBEBEB" />
  </BarChart>);
}

function StateCard(props:SProps){
  return (
    <div className="w-full h-20 bg-primary-white flex items-center hover:bg-primary-gray mx-auto">

      <div style={{ color:'#717274' }} className="font-bold text-center w-1/4">
        {props.client}
      </div>
      <div style={{ color:'#717274' }} className="font-bold text-center w-1/4">
        {props.type}
      </div>

      {!props.isState &&
      <div style={{ color:'#036EEB' }} className="font-bold text-center w-1/4">
        {props.state}
      </div>}
      {props.isState &&
      <div style={{ color:'#717274' }} className="font-bold text-center w-1/4">
        <p>{props.state}</p>
      </div>}

      <div className="text-primary-red text-right w-1/5">
        <Link className="cursor-pointer" to={'/admin'} >{props.detail}</Link>
      </div>
    </div>
  );
}
