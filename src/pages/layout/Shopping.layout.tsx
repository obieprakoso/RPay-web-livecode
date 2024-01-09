import { useEffect, useState } from "react";
import Http from "../../helpers/Fatch";
import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import IProductValue from "../../interface/IProduct";

const columns: ColumnsType<IProductValue> = [
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
    },
    {
        title: 'Price',
        dataIndex: 'tipricetle',
        key: 'price',
    },
    {
        title: 'Stock',
        dataIndex: 'stock',
        key: 'stock',
    },
    {
        title: 'Brand',
        dataIndex: 'brand',
        key: 'brand',
    },
];
function ShoppingLayout(props: any) {


    return (
        <div >
            <div style={{ margin: 10, float: "right" }}>Shoping Chart {1}</div>
            <div><Table columns={columns} dataSource={props.dataProduct} /></div>
        </div>
    );
}
export default ShoppingLayout;
