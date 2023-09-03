import { useEffect, useState } from "react";
import { Box, Paper, Typography } from "@mui/material";
import { getPoliticalExpenses } from "../api/openDataPolitical";
import LoadingData from "./LoadingData";

const Expenses = (props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [politicalExpenses, setPoliticalExpenses] = useState([]);

  const getPoliticalFinancialExpenses = async () => {
    const params = {
      id: props.id,
      setLoading,
      setPoliticalExpenses,
      setError,
    };
    getPoliticalExpenses(params);
  };

  useEffect(() => {
    getPoliticalFinancialExpenses();
  }, []); // eslint-disable-line

  return (
    <>
      {loading && <LoadingData />}
      {(!loading && error !== null && politicalExpenses.length > 0) && 
        <Box padding="8px" display="flex" flexWrap="wrap" justifyContent="center" gap="10px">
          {politicalExpenses.map((expense, index) => {
            return (
              <Paper key={index} variant="outlined" sx={{ padding: '2px', textAlign: 'start', width: '100%' }}>
                <Typography>Tipo: {expense.tipoDespesa || '--'}</Typography>
                <Typography>Data: {expense.dataDocumento || '--'}</Typography>
                <Typography>Valor: {expense.valorDocumento || '--'}</Typography>
                <Typography>Fornecedor: {expense.nomeFornecedor || '--'}</Typography>
              </Paper>
            )
          })}
        </Box>
      }
      {(!loading && error !== null && politicalExpenses.length === 0) && <Box>Sem dados</Box>}
    </>
  );
}

export default Expenses;
