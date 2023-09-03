import { useEffect, useState } from "react";
import { Box, Paper, Typography } from "@mui/material";
import { getPoliticalOccupations } from "../api/openDataPolitical";
import LoadingData from "./LoadingData";

const Occupations = (props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [politicalOccupations, setPoliticalOccupations] = useState([]);

  const getPoliticalOccupationsInfo = async () => {
    const params = {
      id: props.id,
      setLoading,
      setPoliticalOccupations,
      setError,
    };
    getPoliticalOccupations(params);
  };

  useEffect(() => {
    getPoliticalOccupationsInfo();
  }, []); // eslint-disable-line

  return (
    <>
      {loading && <LoadingData />}
      {(!loading && error !== null && politicalOccupations.length > 0) && 
        <Box padding="8px" display="flex" flexWrap="wrap" justifyContent="center" gap="10px">
          {politicalOccupations.map((occupation, index) => {
            return (
              <Paper key={index} variant="outlined" sx={{ padding: '2px', textAlign: 'start', width: '100%' }}>
                <Typography>Titulo: {occupation.titulo || '--'}</Typography>
                <Typography>Entidade: {occupation.entidade || '--'}</Typography>
                <Typography>UF: {occupation.entidadeUF || '--'}</Typography>
                <Typography>Período: {occupation.anoInicio || '--'} - {occupation.anoFim}</Typography>
              </Paper>
            )
          })}
        </Box>
      }
      {(!loading && error !== null && politicalOccupations.length === 0) && <Box>Sem dados</Box>}
    </>
  );
}

export default Occupations;
