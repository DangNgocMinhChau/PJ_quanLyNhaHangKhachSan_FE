import React, { useState } from "react";
import { Table, Radio, Divider } from "antd";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

const data = [
  {
    id: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    id: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    id: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
  },
  {
    id: "4",
    name: "Disabled User",
    age: 99,
    address: "Sidney No. 1 Lake Park",
  },
];

function TableManagementHotel({ match }) {
  const columns = [
    {
      title: "Tên nhà hàng",
      dataIndex: "name",
      render: (data, record) => renderDetail(record),
    },
    {
      title: "Địa chỉ",
      dataIndex: "age",
    },
    {
      title: "Cấp",
      dataIndex: "address",
    },
    {
      title: "Chức năng",
      dataIndex: "action",
      render: (data, record) => actionRender(record),
    },
  ];

  function renderDetail(record) {
    return <NavLink to={`${url}/${record.id}`}>{record.name}</NavLink>;
  }
  function actionRender(record) {
    return (
      <>
        <button
          onClick={() => {
            console.log(record);
          }}
        >
          Edit
        </button>
        <button
          onClick={() => {
            console.log(record);
          }}
        >
          Delete
        </button>
      </>
    );
  }
  var url = match.url;
  const [selectionType, setSelectionType] = useState();
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === "Disabled User", // Column configuration not to be checked
      name: record.name,
    }),
  };

  return (
    <div>
      <Divider />

      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
}

export default TableManagementHotel;
