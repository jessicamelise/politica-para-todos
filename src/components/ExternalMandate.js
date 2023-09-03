import { useEffect, useState } from "react";
import { Box, Paper, Typography } from "@mui/material";
import { getPoliticalExternalMandate } from "../api/openDataPolitical";
import LoadingData from "./LoadingData";

const ExternalMandate = (props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [politicalExternalMandate, setPoliticalExternalMandate] = useState([]);

  const getPoliticalExternalMandateInfo = async () => {
    const params = {
      id: props.id,
      setLoading,
      setPoliticalExternalMandate,
      setError,
    };
    getPoliticalExternalMandate(params);
  };

  useEffect(() => {
    getPoliticalExternalMandateInfo();
  }, []); // eslint-disable-line

  return (
    <>
      {loading && <LoadingData />}
      {(!loading && error !== null && politicalExternalMandate.length > 0) && 
        <Box padding="8px" display="flex" flexWrap="wrap" justifyContent="center" gap="10px">
          {politicalExternalMandate.map((mandate, index) => {
            return (
              <Paper key={index} variant="outlined" sx={{ padding: '2px', textAlign: 'start', width: '100%' }}>
                <Typography>Cargo: {mandate.cargo || '--'}</Typography>
                <Typography>UF: {mandate.siglaUF || '--'}</Typography>
                <Typography>Partido: {mandate.siglaPartidoEleicao || '--'}</Typography>
                <Typography>Período: {mandate.anoInicio || '--'} - {mandate.anoFim || '--'}</Typography>
              </Paper>
            )
          })}
        </Box>
      }
      {(!loading && error !== null && politicalExternalMandate.length === 0) && <Box>Sem dados</Box>}
    </>
  );
}

export default ExternalMandate;
