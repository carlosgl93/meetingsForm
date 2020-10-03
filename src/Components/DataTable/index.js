import React from 'react'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

function DataTable(props) {
    const renderHeaders = () => {
        const { headers } = props.headers
        const cells = headers.map(header => {
            return <TableCell key={header} align="center" style={{ border: "1px solid gray"}}><b>{header}</b></TableCell>   
        })
        return (
            <TableHead>
                <TableRow>
                    {cells}
                </TableRow>
            </TableHead>
        )
    }
    return (
        <div>
            <Paper style={{padding:15}}>
                <Typography variant="h6" style={{ padding: 15}}>
                    Datos disponibles:
                </Typography>
                <Table>
                    {renderHeaders()}
                    <TableBody>

                    </TableBody>
                </Table>
            </Paper>
        </div>
    )
}

export default DataTable
