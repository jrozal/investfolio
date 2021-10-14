import { Button, makeStyles, Modal, TextField } from "@material-ui/core";
import React, { useState } from "react";

interface Props {
  open: boolean,
  close: () => void,
  addPortfolioData: (values: PortfolioRecord) => void,
}

interface PortfolioRecord {
  symbol: string | null,
  description: string | null,
  pricePaid: string | null,
  quantity: number | string | null,
};

const useStyles = makeStyles({
  paper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    backgroundColor: '#fff',
    padding: 32,
    boxShadow: '0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 5px 8px 0px rgb(0 0 0 / 14%), 0px 1px 14px 0px rgb(0 0 0 / 12%)',
    outline: 'none',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,

    '& .MuiTextField-root': {
      width: '90%',
      margin: 5
    }
  },
  formButtons: {
    display: 'flex',
    justifyContent: 'center',

    '& .MuiButtonBase-root': {
      marginLeft: 15,
      marginRight: 15,
    }
  }
});

const AddInvestmentModal = (props: Props) => {
  const { open, close, addPortfolioData } = props;
  const classes = useStyles();
  const [values, setValues] = useState({
    symbol: '',
    description: '',
    quantity: '',
    pricePaid: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    setValues({
      ...values,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setValues({
      symbol: '',
      description: '',
      quantity: '',
      pricePaid: ''
    });
    addPortfolioData(values);
    close();
  };

  return (
    <Modal open={open} onClose={close}>
      <div className={classes.paper}>
        <form className={classes.form} onChange={handleInputChange}>
          <TextField
            id="symbol"
            label="Symbol"
            variant="filled"
            required
            value={values.symbol}
          />
          <TextField
            id="description"
            label="Description"
            variant="filled"
            required
            value={values.description}
          />
          <TextField
            id="quantity"
            label="Shares"
            variant="filled"
            required
            value={values.quantity}
          />
          <TextField
            id="pricePaid"
            label="Price Paid"
            variant="filled"
            required
            value={values.pricePaid}
          />
        </form>
        <div className={classes.formButtons}>
          <Button
            variant="contained"
            onClick={close}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            type="submit"
            color="primary"
            onClick={handleSubmit}
          >
            Sumbit
          </Button>
        </div>
      </div>
    </Modal>
  )
};

export default AddInvestmentModal;