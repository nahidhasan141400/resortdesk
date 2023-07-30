/* eslint-disable no-unused-vars */
import React from "react";
import BarChat from "../../components/chart/BarChart";
import Table from "../../components/Table/Table";
 let colunm =[
    {
      Header: "ID",
      accessor: "id", // accessor is the "key" in the data
    },
    {
      Header: "Amount",
      accessor: "ammount",
      Cell:(prop)=>{
        return prop.row.original.id
      }
    },
    {
      Header: "Category",
      accessor: "categiry",
    },
    {
      Header: "Date",
      accessor: "Date",
    },
    {
      Header: "Admin",
      accessor: "admin",
    },
  ]
const Home = () => {
  return (
    <div className="w-full relative ">
      
      <div className="relative h-[300px] bg-white p-2 m-2 rounded-sm">
        <BarChat />
      </div>
      <div className="w-full grid grid-cols-2 p-2 gap-3">
        <div className="w-full h-[250px] relative p-2  bg-gray-100 rounded-md">
          <BarChat />
        </div>
        <div className="w-full h-[250px] relative p-2 pb-8 bg-gray-100 rounded-md">
          <BarChat />
        </div>
      </div>
      <div>
        <Table datas={[]} colunm={colunm} nav={true}/>
      </div>
    </div>
  );
};

export default Home;
