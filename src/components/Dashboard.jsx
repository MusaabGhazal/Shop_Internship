//imports
// material ui imports used
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

// ant design imports
import { EditTwoTone ,DeleteTwoTone, PlusCircleFilled } from '@ant-design/icons';

// imports from my project
import EditModal from './EditModal';
import DeleteModal from './DeleteModal';
import AddModal from './AddModal';
import Spinner from "./Spinner"
import { fetchData } from "../servers/services";
import arrowImage from "/downArrow.png";

// react imports 
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

//my data
const columns = [
  { id: 'id', label: 'id', minWidth: 20 },
  { id: 'item', label: 'Item Name', minWidth: 100 },
  { id: 'itemImagePath', label: 'Item Image', minWidth: 100, align : 'left' },
  {
    id: 'category',
    label: 'category',
    minWidth: 100,
  },
  {
    id: 'price',
    label: 'Price',
    minWidth: 70,
    // align: 'right',
    format: (value) => ('$'+ value),
  },
  {
    id: 'discount',
    label: 'Discount',
    minWidth: 70,
    // align: 'right',
    format: (value) => ('%' + (value*100).toFixed(0)),
  },
  {
    id: 'rate',
    label: 'rate',
    minWidth: 70,
  },
];

export default function Dashboard() {

  //states related to pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  
  //get the row that we will edit / delete
  const [rowToEdit, setRowToEdit] = useState();
  
  //refs related to dialogues
  const editDialogRef = useRef(null);
  const deleteDialogRef = useRef(null);
  const addDialogRef = useRef(null);
  
  //states related to getting data
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  //Read Data function (uses another function inside another folder for api calls)
  async function getData() {
    try {
      const response =await fetchData();
      setData(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  //call getData once and never again 
  useEffect(() => {
    getData();
  }, []);
  
  //view those if anything goes wrong, or while loading
  if (loading) return <Spinner></Spinner>
  if (error) return <p>Error: {error}</p>

  //transform the api returned data to a custom shape with some attributes needed
  const rows = data.map(({ id, item, itemImagePath, category, price, discount, rate }) => ({
      id,
      item,
      itemImagePath,
      category,
      price,
      discount,
      rate
  }));

  // some functions for dialog handling
  const openAddDialog = () => {
    addDialogRef.current.showModal();
  };
  const closeAddDialog = () => {
    addDialogRef.current.close();
  };
  const openEditDialog = (row) => {
    setRowToEdit(row);
    editDialogRef.current.showModal();
  };
  const closeEditDialog = () => {
    setRowToEdit("");
    editDialogRef.current.close();
  };
  const openDeleteDialog = (row) => {
    setRowToEdit(row);
    deleteDialogRef.current.showModal();
  };
  const closeDeleteDialog= () => {
    setRowToEdit("");
    deleteDialogRef.current.close();
  };

  // what to do when the user changes the page
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // what to do when the user changes the displayed rows per page
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className='dashboard-overall'>
      <div className="dashboard-header">
        <Link to="../" className='back-arrow'>
          <img src={arrowImage} alt="arrow"/>
          <p>Back to Home</p>
        </Link>  
        <h1 className='dashboard-title'>Dashboard</h1>
      </div>
      <div key={data} className="dashboard">
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                    <TableCell 
                    colSpan={2} 
                    style={{ minWidth: 100 }}
                    sx={{
                      position: 'sticky',
                      right: 0,
                      zIndex: 5,
                    }}
                    >
                      <button  onClick={()=>openAddDialog()}>
                        Add Item
                        <PlusCircleFilled style={{marginLeft : 8}}/>
                      </button>
                    </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                              <TableCell key={`${row.id}-${column.id}`} align={column.align}>
                                {column.id ==="itemImagePath" ? 
                                <img src={value} className='dashboard-image'/> :
                                column.format && typeof value === 'number'
                                  ? column.format(value)
                                  : value
                                }
                                
                              </TableCell>
                          );
                        })}
                        <TableCell 
                        align='right'                      
                        sx={{
                          position: 'sticky',
                          right: 66,
                          zIndex: 3,
                          backgroundColor : 'white'
                        }}
                        >
                          <EditTwoTone onClick={()=>openEditDialog(row)}/>
                        </TableCell>
                        <TableCell 
                        align='right'
                        sx={{
                          position: 'sticky',
                          right: 0,
                          zIndex: 3,
                          backgroundColor : 'white'
                        }}
                        >
                          <DeleteTwoTone twoToneColor="#8b0000" className='delete-button' onClick={()=>openDeleteDialog(row)}/>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>

        {/* dialogs, will appear on top */}
        <dialog ref={editDialogRef} onClose={closeEditDialog}>
          {
            rowToEdit &&
            <EditModal 
            key={rowToEdit} 
            row={rowToEdit} 
            closeDialog={closeEditDialog}  
            getData = {getData}
            /> 
          } 
        </dialog>
        <dialog ref={deleteDialogRef} onClose={closeDeleteDialog}>
          {
          rowToEdit &&
          <DeleteModal
            key={rowToEdit} 
            row={rowToEdit} 
            closeDialog={closeDeleteDialog}  
            getData = {getData}
          />
          }
        </dialog>
        <dialog ref={addDialogRef} onClose={closeAddDialog}>
          <AddModal
            closeDialog={closeAddDialog}  
            getData = {getData}
          />
        </dialog>
      </div>
    </div>
  );
}