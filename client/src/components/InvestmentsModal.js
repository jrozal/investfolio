import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  FormControl,
  Input,
  InputLabel,
  Modal
} from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
};

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

const InvestmentsModal = ({ open, handleClose, addPortfolioData }) => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [form, setForm] = useState({
    symbol: '',
    description: '',
    shares: '',
    pricePaid: ''
  });

  const handleChange = (e) => {
    const key = e.target.name;
    const val = e.target.value;
    setForm((prevState) => ({
      ...prevState,
      [key]: val
    }));
  };

  const handleSubmit = () => {
    addPortfolioData(form);
    handleClose();
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2>Add New Investment</h2>
      <form>
        <FormControl required={true}>
          <InputLabel>Symbol</InputLabel>
          <Input name="symbol" onChange={handleChange}/>
        </FormControl>
        <FormControl required={true}>
          <InputLabel>Description</InputLabel>
          <Input name="description" onChange={handleChange}/>
        </FormControl>
        <FormControl required={true}>
          <InputLabel>Shares</InputLabel>
          <Input name="shares" onChange={handleChange}/>
        </FormControl>
        <FormControl required={true}>
          <InputLabel>Price Paid</InputLabel>
          <Input name="pricePaid" onChange={handleChange}/>
        </FormControl>
      </form>
      <Button
        onClick={handleSubmit}
        color="primary"
        size="small"
        variant="text"
        startIcon={<SaveIcon />}
      >
        SAVE
      </Button>
    </div>
  );

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
};

export default InvestmentsModal;