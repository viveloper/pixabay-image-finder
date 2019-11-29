import React, { useState, useEffect } from 'react'
import { TextField, Select, MenuItem, InputLabel, makeStyles, FormControl } from '@material-ui/core'
import ImageResults from '../image-results/ImageResults'

const useStyles = makeStyles(theme => ({
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Search = props => {

  const classes = useStyles();

  const { images, fetchData } = props;

  const [searchText, setSearchText] = useState('')
  const [amount, setAmount] = useState(15)

  useEffect(() => {
    fetchData(searchText, amount);
  }, [fetchData, searchText, amount])

  const onTextChange = (e) => {
    setSearchText(e.target.value)
  }

  const onAmountChange = (e) => {
    setAmount(e.target.value)
  }

  return (
    <div>
      <TextField
        name="searchText"
        value={searchText}
        onChange={onTextChange}
        label="Search For Images"
        fullWidth={true}
      />
      <br />
      <FormControl className={classes.formControl}>
        <InputLabel>Amount</InputLabel>
        <Select
          name="amount"
          value={amount}
          onChange={onAmountChange}
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={15}>15</MenuItem>
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={50}>50</MenuItem>
        </Select>
      </FormControl>
      <br />
      {
        images.length > 0 ? <ImageResults images={images} /> : null
      }
    </div>
  );

}

export default Search