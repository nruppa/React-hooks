import React, { useEffect } from 'react';
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
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
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