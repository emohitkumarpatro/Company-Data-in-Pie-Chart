import React from "react";
import { PieChart, Pie, Tooltip, Label,Cell } from "recharts";
import users from "./mockdata";

export default function PieChartComponent() {
  let maleCount = 0;
  let femaleCount = 0;
  let fullTime = 0;
  let partTime = 0;
  let dailyWage = 0;
  let mc = 0,
    fc = 0,
    ft = 0,
    pt = 0,
    dw = 0;

  for (let i = 0; i < users.length; i++) {
    if (users[i].gender === "male") {
      maleCount++;
    } else if (users[i].gender === "female") {
      femaleCount++;
    }
  }
  

  mc = (maleCount / users.length * 100).toFixed(1);
  fc = (femaleCount / users.length * 100).toFixed(1);

  for (let i = 0; i < users.length; i++) {
    if (users[i].type === "fulltime") {
      fullTime++;
    } else if (users[i].type === "parttime") {
      partTime++;
    } else if (users[i].type === "dailywage") {
      dailyWage++;
    }
  }
  
  ft = (fullTime / users.length * 100).toFixed(1);
  pt = (partTime / users.length * 100).toFixed(1);
  dw = (dailyWage / users.length * 100).toFixed(1);


  const data01 = [
    { name: "Male", value: maleCount ,per:mc },
    { name: "Female", value: femaleCount,per:fc },
  ];

  const data02 = [
    { name: "FullTime", value: fullTime , per:ft },
    { name: "PartTime", value: partTime , per:pt},
    { name: "Dailywage", value: dailyWage , per :dw},
  ];

  const labelColors = ["#4A235A", "#0B5345 ", "#424949 "];

  return (
    <>
      <div className="flex justify-start gap-[100px]">
        <div className="text-[20px] pt-[60px] !pl-[200px] text-amber-600 font-bold">
          GENDER :
        </div>
        <div className="flex justify-center gap-40">
          <div className="flex  items-center">
          <PieChart width={480} height={250}>
            <Pie
              dataKey="value"
              isAnimationActive={false}
              data={data01}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              labelLine={false}
              label={({ cx, cy, midAngle, innerRadius, outerRadius, value, index }) => {
                const RADIAN = Math.PI / 180;
                const radius = 25 + innerRadius + (outerRadius - innerRadius);
                const x = cx + radius * Math.cos(-midAngle * RADIAN);
                const y = cy + radius * Math.sin(-midAngle * RADIAN);
                const fill = index === 0 ? "#DE3163" : "#FFFACD";
                return (
                  <text
                    x={x}
                    y={y}
                    fill={fill}
                    textAnchor={x > cx ? "start" : "end"}
                    dominantBaseline="central"
                  >
                    {data01[index].name}({data01[index].per}%)
                  </text>
                );
              }}
            >
              {data01.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={index === 0 ? "#DE3163" : "#FFFACD"} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
          </div>
          <div className="flex justify-center items-center  text-[25px]">
            <div className="p-4">
              <div className="mb-2 text-[#283747 ]">Total Users: {users.length}</div>
              <div className="mb-2 text-[#DE3163]">Male: {maleCount}</div>
              <div className="mb-2 text-[#FFFACD]">Female: {femaleCount}</div>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-none h-1 bg-black my-10" />
      <div className="flex justify-start gap-[100px]">
        <div className="text-[20px] pt-[60px] !pl-[90px] text-amber-600 font-bold">
          EMPLOYMENT TYPE :
        </div>
        <div className="flex justify-center gap-40">
          <div className="flex  items-center">
          <PieChart width={470} height={210}>
              <Pie
                dataKey="value"
                isAnimationActive={false}
                data={data02}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                labelLine={false}
                label={({
                  cx,
                  cy,
                  midAngle,
                  innerRadius,
                  outerRadius,
                  value,
                  index,
                }) => {
                  const RADIAN = Math.PI / 180;
                  const radius = 25 + innerRadius + (outerRadius - innerRadius);
                  const x = cx + radius * Math.cos(-midAngle * RADIAN);
                  const y = cy + radius * Math.sin(-midAngle * RADIAN);
                  const fill = labelColors[index % labelColors.length];
                  return (
                    <text
                      x={x}
                      y={y}
                      fill={fill}
                      textAnchor={x > cx ? "start" : "end"}
                      dominantBaseline="central"
                    >
                      {data02[index].name}({data02[index].per}%)
                    </text>
                  );
                }}
              >
                {data02.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={labelColors[index % labelColors.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>

          </div>
          <div className="flex justify-center items-center ">
            <div className="p-4">
              <div className="mb-2 text-[25px]">Total Users: {users.length}</div>
              <div className="mb-2 text-[25px] text-[#4A235A]">FullTime: {fullTime}</div>
              <div className="mb-2 text-[25px] text-[#0B5345]">PartTime: {partTime}</div>
              <div className="mb-2 text-[25px] text-[#424949]">Dailywage: {dailyWage}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
