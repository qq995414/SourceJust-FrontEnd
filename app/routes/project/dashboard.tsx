
import { useLoaderData } from 'remix';
import { PropsWithChildren, useCallback, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import cx from 'classnames';
import TextInput from '~/components/common/TextInput';
import { data, data01, bdata } from '~/mocks/dashboard';
import { Link } from '@remix-run/react';
import { PieChart, Pie, Sector, Cell } from 'recharts';
import { BarChart, Bar, Legend } from 'recharts';
import Nav from '~/components/Nav';
import { ActionFunction, LoaderFunction } from 'remix';
import { ApiClient, OpenAPI } from 'app/ApiClient';
import authenticator from "~/services/auth.server";

export let loader: LoaderFunction = async ({ request }) => {

  return await authenticator.isAuthenticated(request, {
    failureRedirect: "/admin/login",
  });


};

interface Props {
  value: string;
  number: string;
}

interface SProps {
  isState: boolean,
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
      isState: false,
      client: '檸檬科技股份有限公司',
      type: 'APP開發',
      state: '提案中',
      detail: '詳細'
    }, {
      isState: false,
      client: '檸檬科技股份有限公司',
      type: 'APP開發',
      state: '提案中',
      detail: '詳細'
    }, {
      isState: false,
      client: '檸檬科技股份有限公司',
      type: 'APP開發',
      state: '提案中',
      detail: '詳細'
    }, {
      isState: true,
      client: '檸檬科技股份有限公司',
      type: 'APP開發',
      state: '開發中',
      detail: '詳細'
    }, {
      isState: true,
      client: '檸檬科技股份有限公司',
      type: 'APP開發',
      state: '開發中',
      detail: '詳細'
    }, {
      isState: true,
      client: '檸檬科技股份有限公司',
      type: 'APP開發',
      state: '開發中',
      detail: '詳細'
    }
  ]);
  const data = useLoaderData();
  console.log(data.data?.profile?.name);

  return (
    <div className="grid w-screen">
      <Nav titleGray='' title="總覽" titleBlack="" ></Nav>
      <div className="h-screen w-full  login-background  pt-4">
        <div className="flex flex-col mt-20">
          <div className="flex flex-col w-full px-10 dashboard-title">
            <a className='dashboard-title'>歡迎回來, {data.data?.profile?.name}</a>
            <a className='dashboard-subTitle'>這邊的資訊是您的網站分析</a>
          </div>
          <div className="h-full w-full flex flex-col">

            {/* Card */}
            <div className="w-full my-12 flex px-8">
              <AdminCard value="當日訪客數" number="8,123" icons="visitor" BKColor="#E1F5FF" increase="2,550" increaseP="14.67%" growingUp="true">
              </AdminCard>
              <AdminCard value="當日用戶數" number="8,123" icons="user" BKColor="#FEF7EA" increase="1,648" increaseP="14.67%" growingUp="false">
              </AdminCard>
              <AdminCard value="當日訪客數" number="8,123" icons="return" BKColor="#EBFAF5" increase="2,550" increaseP="14.67%" growingUp="true">
              </AdminCard>
              <AdminCard value="當日訪客數" number="5 分 20 秒" icons="time" BKColor="##FDEBEE" increase="2,550" increaseP="14.67%" growingUp="true">
              </AdminCard>
            </div>
            <div className="w-full my-12 flex px-8">
              <div className='w-8/12  shadow-md px-5 mx-5 py-5 rounded-md dashboardCard'>
                <div className="h-auto w-full mt-5">
                  <div className="justify-between w-full mb-8">
                    <div className='flex'>
                      <p className="ml-10 font-bold p-2 text-center text-lg">用戶活動時間的變化趨勢</p>
                      <div className="flex-grow"></div>
                      <button className='dashboard-AChart-Button w-16 h-8 font-bold mx-2'>今年</button>
                      <button className='dashboard-AChart-Button w-16 h-8 font-bold mx-2'>當週</button>
                      <button className='dashboard-AChart-Button w-16 h-8 font-bold mx-2'>當月</button>
                      <button className='dashboard-AChart-Button w-16 h-8 font-bold mx-2'>當日</button>
                    </div>
                    <div>
                      <p className="ml-10 font-bold p-2 text-lg">變化柱狀圖</p>

                    </div>

                  </div>
                  <div className=" w-full flex px-16">
                    <AChart></AChart>
                  </div>
                </div>
              </div>
              <div className='w-4/12  shadow-md px-5 mx-5 py-5 rounded-md dashboardCard'>
                <div className="h-auto w-full mt-5">
                  <div className="flex justify-between w-full mb-4">
                    <p className="ml-10 font-bold p-2 text-center text-lg">裝置使用分析</p>
                  </div>
                  <div className=" w-full flex justify-center">
                    <PChart></PChart>
                  </div>
                  <div className='flex px-10'>
                    <span className='mt-2' style={{ background: "#EE415D", borderRadius: "100px", width: "8px", height: "8px" }}></span>
                    <a className=' ml-3 font-Blod'>平板</a>
                    <div className="flex-grow"></div>
                    <div className='cool-gray-09-text '>20%</div>
                  </div>
                  <div className='flex px-10 pt-2'>
                    <span className='mt-2' style={{ background: "#70D6FF", borderRadius: "100px", width: "8px", height: "8px" }}></span>
                    <a className=' ml-3 font-Blod'>Desktop</a>
                    <div className="flex-grow"></div>
                    <div className='cool-gray-09-text '>52%</div>
                  </div>
                  <div className='flex px-10 pt-2'>
                    <span className='mt-2' style={{ background: "#FDB531", borderRadius: "100px", width: "8px", height: "8px" }}></span>
                    <a className=' ml-3 font-Blod'>Mobile</a>
                    <div className="flex-grow"></div>
                    <div className='cool-gray-09-text '>19.73%</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Content Area Chart*/}
         

          </div>
        </div>
      </div>
    </div >
  );
}

function AdminCard(props: PropsWithChildren<Props>) {
  const iconUrl = "/icons/dashboard-" + props.icons + ".svg";
  return (<div className="w-full  shadow-md px-5 mx-5 py-5 rounded-md dashboardCard">
    <div className="h-full w-full">
      <div className='w-full flex'>
        <div className='dashboard-iconBox text-center ' style={{ backgroundColor: props.BKColor }}>
          <img className='mx-auto pt-2' src={iconUrl} alt="" />
        </div>
        <p className="w-1/4 mt-2 mx-3 text-center h-1/4 pt-1 dashboardCard-title">{props.value}</p>
      </div>
      <p className="w-full text-2xl h-1/3 my-1 pt-2 dashboardCard-value">{props.number}</p>
      <div className="w-full  h-1/4 flex pt-3"><a className='cool-gray-09-text '>每月平均分析</a>
        <div className="justify-center mx-auto flex dashboardCard-analyze">
          +{props.increase}
        </div>
        <div className="justify-center mx-auto flex dashboardCard-analyze-percentage">
          +{props.increaseP}
        </div>
      </div>
    </div>
  </div >);
}

const toPercent = (fixed = 0) => `$${(fixed)}`;

function AChart() {
  return (<AreaChart
    width={1000}
    height={400}
    data={data}
    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
    <defs>
      <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#B6212254" stopOpacity={0.8} />
        <stop offset="95%" stopColor="#B6212254" stopOpacity={0} />
      </linearGradient>
    </defs>
    <XAxis dataKey="name" />
    <YAxis axisLine={false} orientation="right" tickFormatter={toPercent} />
    <CartesianGrid vertical={false} strokeDasharray="3 3" />
    <Tooltip />
    <Area type="monotone" dataKey="pv" stroke="#B6212254" fillOpacity={1} fill="url(#colorPv)" />
  </AreaChart>);
}

function PChart() {
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );
  return (<PieChart width={500} height={300}>
    <Pie
      activeIndex={activeIndex}
      activeShape={renderActiveShape}
      data={data01}
      dataKey="value"
      nameKey="name"
      cx="50%"
      cy="50%"
      innerRadius={40}
      outerRadius={100}
      onMouseEnter={onPieEnter}
      fill="#B6212254" >
      {data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
  </PieChart>);
}

function BChart() {
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
    <Bar className="rounded-lg" dataKey="uv" stackId="a" fill="#EBEBEB" />
  </BarChart>);
}

function StateCard(props: SProps) {
  return (
    <div className="w-full h-20 bg-primary-white flex items-center hover:bg-primary-gray mx-auto">

      <div style={{ color: '#717274' }} className="font-bold text-center w-1/4">
        {props.client}
      </div>
      <div style={{ color: '#717274' }} className="font-bold text-center w-1/4">
        {props.type}
      </div>

      {!props.isState &&
        <div style={{ color: '#036EEB' }} className="font-bold text-center w-1/4">
          {props.state}
        </div>}
      {props.isState &&
        <div style={{ color: '#717274' }} className="font-bold text-center w-1/4">
          <p>{props.state}</p>
        </div>}

      <div className="text-primary-red text-right w-1/5">
        <Link className="cursor-pointer" to={'/admin'} >{props.detail}</Link>
      </div>
    </div>
  );
}
