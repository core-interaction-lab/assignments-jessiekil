Your storage is full. … You can't upload new files to Drive and may not be able to send or receive emails in Gmail.Learn more
columns.js
Who has access

System properties
Type
Javascript
Size
485 bytes
Storage used
485 bytes
Location
help
Owner
Derek Ing
Modified
1:32 AM by Derek Ing
Opened
1:39 AM by me
Created
1:33 AM
Add a description
Viewers can download
import React from 'react';
import ReactTable from "react-table";
import { Link } from "react-router-dom";

export const COLUMNS = props => [
    {
        Header: 'Index',
        accesor: 'id'
    },
    {
        Header: 'Child Name',
        accessor: 'name',
        Cell: ({ row }) => (<Link to={{ pathname: /foo/${row.name} }}>{row.name}</Link>)
    },
    {
        Header: 'Birthday',
        accessor: 'bday'
    },
    {
        Header: 'Toy',
        accessor: 'toy'
    }
]