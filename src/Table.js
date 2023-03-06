// import * as React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

// function createData(FirstName,LastName,Email,Password) {
//   return { FirstName,LastName,Email,Password };
// }

// const rows = [
//   createData("https://jsonplaceholder.typicode.com/posts"),
// ];

// export default function BasicTable() {
//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 450 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell align="right">FirstName</TableCell>
//             <TableCell align="right">LastName</TableCell>
//             <TableCell align="right">Email</TableCell>
//             <TableCell align="right">Password</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow
//               key={row.name}
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//                 {row.name}
//               </TableCell>
//               <TableCell align="right">{row.FirstName}</TableCell>
//               <TableCell align="right">{row.LastName}</TableCell>
//               <TableCell align="right">{row.Email}</TableCell>
//               <TableCell align="right">{row.Password}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }


import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Input } from '@material-ui/core';


function Table1() {
  // const [searchValue,setsearchvalue]= React.useState("")

  const [row, setrow] = React.useState([])

  const createData = (name, calories, fat, carbs, protein) => {
    return { name, calories, fat, carbs, protein };
  }

  useEffect(() => {
    setrow(rows)
  }, [])

  const [rows, setrows] = React.useState([
    createData('Frozen yoghurt', '159', 6.0, 24, 4.0),
    createData('Ice cream sandwich', '237', 9.0, 37, 4.3),
    createData('Eclair', '262', 16.0, 24, 6.0),
    createData('Cupcake', '305', 3.7, 67, 4.3),
    createData('Gingerbread', '356', 16.0, 49, 3.9),
  ])

  const searchItems = (searchValue) => {
    setrow(rows)
    console.log(searchValue);
    if (searchValue !== " ") {
      const filteredData = rows.filter((item) => {
        console.log(Object.values(item).join(' ').toLowerCase().includes(searchValue.toLowerCase()))
        return Object.values(item).join('').toLowerCase().includes(searchValue.toLowerCase())
      })
      setrow(filteredData)
      console.log(rows)
    }
    else {
      setrows(row)
    }
  }

  const searchItems1 = (searchValue1) => {
    setrow(rows)
    console.log(searchValue1);
    if (searchValue1 !== " ") {
      const filteredData = rows.filter((item) => {
        console.log(Object.values(item.name).join(' ').toLowerCase().includes(searchValue1.toLowerCase()))
        return Object.values(item.name).join('').toLowerCase().includes(searchValue1.toLowerCase())
      })
      setrow(filteredData)
      console.log(rows)
    }
    else {
      setrows(row)
    }
  }
  const searchItems2 = (searchValue2) => {
    setrow(rows)
    console.log(searchValue2);
    if (searchValue2 !== " ") {
      const filteredData = rows.filter((item) => {
        console.log(Object.values(item.calories.toString()).join(' ').toLowerCase().includes(searchValue2.toLowerCase()))
        return Object.values(item.calories.toString()).join('').includes(searchValue2.toLowerCase())
      })
      setrow(filteredData)
      console.log(rows)
    }
    else {
      setrows(row)
    }
  }
  const searchItems3 = (searchValue3) => {
    setrow(rows)
    console.log(searchValue3);
    if (searchValue3 !== " ") {
      const filteredData = rows.filter((item) => {
        console.log(Object.values(item.fat).toString().join(' ').toLowerCase().includes(searchValue3.toLowerCase()))
        return Object.values(item.fat.toString()).join('').toLowerCase().includes(searchValue3.toLowerCase())
      })
      setrow(filteredData)
      console.log(rows)
    }
    else {
      setrows(row)
    }
  }
  const searchItems4 = (searchValue1) => {
    setrow(rows)
    console.log(searchValue1);
    if (searchValue1 !== " ") {
      const filteredData = rows.filter((item) => {
        console.log(Object.values(item.carbs.toString()).join(' ').toLowerCase().includes(searchValue1.toLowerCase()))
        return Object.values(item.carbs.toString()).join('').toLowerCase().includes(searchValue1.toLowerCase())
      })
      setrow(filteredData)
      console.log(rows)
    }
    else {
      setrows(row)
    }
  }
  const searchItems5 = (searchValue5) => {
    setrow(rows)
    console.log(searchValue5);
    if (searchValue5 !== " ") {
      const filteredData = rows.filter((item) => {
        console.log(Object.values(item.protein).join(' ').toLowerCase().includes(searchValue5.toLowerCase()))
        return Object.values(item.protein.toString()).join('').includes(searchValue5.toLowerCase())

      })
      setrow(filteredData)
      console.log(rows)
    }
    else {
      setrows(row)
    }
  }


  return (
    <div>
      <div>
        <Input
          onChange={(e) => searchItems(e.target.value)}
        />
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell >
                <Input onChange={(e) => searchItems1(e.target.value)}
                />
              </TableCell >
              <TableCell align="right">
                <Input onChange={(e) => searchItems2(e.target.value)}
                />
              </TableCell>
              <TableCell align="right">
                <Input onChange={(e) => searchItems3(e.target.value)}
                />
              </TableCell>
              <TableCell align="right">
                <Input onChange={(e) => searchItems4(e.target.value)}
                />
              </TableCell>
              <TableCell align="right">
                <Input onChange={(e) => searchItems5(e.target.value)}
                />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {row.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>

  );
}
export default Table1

