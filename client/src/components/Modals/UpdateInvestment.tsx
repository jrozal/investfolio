import { Button, makeStyles, Modal, TextField, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";

interface PortfolioRecord {
  symbol: string | null,
  description: string | null,
  pricePaid: string | null,
  quantity: number | string | null,
};

interface Props {
  portfolioRecord: PortfolioRecord,
  open: boolean,
  close: () => void,
  updatePortfolioData: (values: PortfolioRecord) => void,
  deletePortfolioData: (symbol: string | null) => void,
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
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
    width: '100%',

    '& .MuiTextField-root': {
      width: '90%',
      margin: 5
    }
  },
  formButtons: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 15,

    '& .MuiButtonBase-root': {
      marginLeft: 15,
      marginRight: 15,
    }
  }
});

const UpdateInvestmentModal = (props: Props) => {
  const classes = useStyles();
  const { portfolioRecord, open, close, updatePortfolioData, deletePortfolioData } = props;
  const [values, setValues] = useState<PortfolioRecord>({
    symbol: null,
    description: null,
    pricePaid: null,
    quantity: null
  });


  const handleInputChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    setValues({
      ...values,
      [e.target.id]: e.target.value
    });
  };

  const handleUpdate = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log('submitting', values)
    updatePortfolioData(values);
    setValues({
      symbol: null,
      description: null,
      pricePaid: null,
      quantity: null
    });
    close();
  };

  const handleDelete = () => {
    deletePortfolioData(portfolioRecord.symbol);
    close();
  };

  useEffect(() => {
    setValues(portfolioRecord);
  }, [portfolioRecord]);

  return (
    <Modal open={open} onClose={close}>
      <div className={classes.paper}>
        <div className={classes.container}>
          <Typography variant="h5">{portfolioRecord.symbol}</Typography>
          <Typography variant="h6">Update Investment</Typography>
          <form className={classes.form} onChange={handleInputChange}>
            <TextField
              id="description"
              label="Description"
              defaultValue={portfolioRecord.description}
            />
            <TextField
              id="quantity"
              label="Shares"
              defaultValue={portfolioRecord.quantity}
            />
            <TextField
              id="pricePaid"
              label="Price Paid"
              defaultValue={portfolioRecord.pricePaid}
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
              onClick={handleUpdate}
            >
              Sumbit
            </Button>
          </div>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleDelete}
          >
            Delete Record
          </Button>
        </div>
      </div>
    </Modal>
  )
};

export default UpdateInvestmentModal;