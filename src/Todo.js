import React, { useState } from 'react';
import './Todo.css';
import { List, ListItemAvatar, ListItem, ListItemText, Modal, Button } from "@material-ui/core";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { makeStyles } from '@material-ui/core/styles';
import db from './firebase';

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));


function Todo(props) {
    
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');

    const handleOpen = () => {
        setOpen(true);
    };
    const updateWish = () => {
        setOpen(false);
    }

    return (
        <>
        <Modal className={classes.paper}
         open = {open} 
         onClose = { e => setOpen(false)}
         >
             <div  className={classes.paper}>
                 <h1> edit wish</h1>
                 <input value={input} onChange={event => setInput(event.target.value)} />
             </div>
         </Modal>
 
         <List>
             <ListItem>
                 <ListItemAvatar>
                 </ListItemAvatar>
                 <ListItemText primary= {props.todo.todo} secondary="Todo" />
             </ListItem>
             <Button onClick= {e => setOpen(true)}>edit</Button>
             <DeleteForeverIcon onClick= {event => db.collection('todos').doc(props.todo.id).delete()} />
         </List>
        </>
    )
}

export default Todo
