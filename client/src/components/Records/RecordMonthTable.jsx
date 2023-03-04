import React from 'react'
import { styled } from '@mui/material/styles';
import { Paper,
         TableContainer,
         Table, 
         TableHead, 
         TableRow, 
         TableBody, 
         TableCell, 
         } from '@mui/material'
import '../styles/RecordMonthTable.css'


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1e88e5' : '#31577B6B',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    borderRadius: '1.6rem',
    border: '1px solid #6cb8ff',
    color: '#ffff',
    backdropFilter: 'blur(6.9px)',
    WebkitBackdropFilter: 'blur(6.9px)',
    boxShadow: 'none',
  })
);


const RecordMonthTable = () => {
    // const [page, setPage] = useState(0);
    // const [rowsPerPage, setRowsPerPage] = useState(10);
  
    // const handleChangePage = (event, newPage) => {
    //   setPage(newPage);
    // };
  
    // const handleChangeRowsPerPage = (event) => {
    //   setRowsPerPage(+event.target.value);
    //   setPage(0);
    // };


  return (

    <div className='Month-Table'>
        <Item style={{ borderRadius: '2rem' }}>
            <TableContainer>
                <Table > 
                    <TableHead>
                        <TableRow>
                            <TableCell 
                              style={{ color: 'white', 
                                       fontFamily: 'Poppins, sans-serif',
                                       fontSize: '1rem' }} >
                                        Parameter Name
                            </TableCell>

                            <TableCell 
                              style={{ color: 'white', 
                                       fontFamily: 'Poppins, sans-serif',
                                       fontSize: '1rem' }} >
                                        Value
                            </TableCell>

                            <TableCell 
                              style={{ color: 'white', 
                                       fontFamily: 'Poppins, sans-serif',
                                       fontSize: '1rem' }} >
                                        Status
                            </TableCell>

                            <TableCell 
                              style={{ color: 'white', 
                                       fontFamily: 'Poppins, sans-serif',
                                       fontSize: '1rem' }} >
                                        Time & Date
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>

                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            {/* <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                style={{  borderBottom: 'none',
                          color: 'white', 
                          fontFamily: 'Poppins, sans-serif',
                          fontSize: '1rem'  }}
            /> */}
        </Item>
    </div>
  )
}

export default RecordMonthTable