import React from 'react';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Card, CardContent, Typography } from '@material-ui/core';

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    root:{
        padding:theme.spacing(1)
    },
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }),
)(TableRow);

const useStyles = makeStyles({
    table: {
      minWidth: 250
    },
    tableContainerRoot:{
        height:300
    }
  });
function CountriesTable(props:any) {
    const classes = useStyles();
    return (
        <Card>
            <CardContent>
                <Typography variant='h6'>Live Cases by Country</Typography>
                <TableContainer component={Paper} classes={{root:classes.tableContainerRoot}}>
                    <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                        <TableRow>
                            <StyledTableCell>Country</StyledTableCell>
                            <StyledTableCell align="right">Cases</StyledTableCell>
                        </TableRow>
                        </TableHead>

                        <TableBody>
                        {props.countries.map((country:any,index:number) => (
                            <StyledTableRow key={country.country}>
                            <StyledTableCell component="th" scope="row">
                                {country.country}
                            </StyledTableCell>
                            <StyledTableCell align="right">{country.cases}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </CardContent>
        </Card>
    )
}

export default CountriesTable
