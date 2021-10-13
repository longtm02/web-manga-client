import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useStyles } from './style';

const data = [
  {
    name: 'chapter 1',
    date: '12/12/2021',
  },
  {
    name: 'chapter 1',
    date: '12/12/2021',
  },
  {
    name: 'chapter 1',
    date: '12/12/2021',
  },
  {
    name: 'chapter 1',
    date: '12/12/2021',
  },
  {
    name: 'chapter 1',
    date: '12/12/2021',
  },
  {
    name: 'chapter 1',
    date: '12/12/2021',
  },
  {
    name: 'chapter 1',
    date: '12/12/2021',
  },
  {
    name: 'chapter 1',
    date: '12/12/2021',
  },
  {
    name: 'chapter 1',
    date: '12/12/2021',
  },
  {
    name: 'chapter 1',
    date: '12/12/2021',
  },
];

const TableChapter: React.FC = () => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableBody>
          {data.map((row: any, index: number) => (
            <TableRow className={classes.row} key={index}>
              <TableCell component="th" scope="row">
                chapter {index}
              </TableCell>

              <TableCell style={{ width: 160 }} align="right">
                {row.date}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableChapter;
