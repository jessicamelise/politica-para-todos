import { useEffect, useState } from "react";
import { Box, Paper, Typography } from "@mui/material";
import { getPoliticalProfessions } from "../api/openDataPolitical";
import LoadingData from "./LoadingData";

const Professions = (props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [politicalProfessions, setPoliticalProfessions] = useState([]);

  const getPoliticalProfessionsInfo = async () => {
    const params = {
      id: props.id,
      setLoading,
      setPoliticalProfessions,
      setError,
    };
    getPoliticalProfessions(params);
  };

  useEffect(() => {
    getPoliticalProfessionsInfo();
  }, []); // eslint-disable-line

  return (
    <>
      {loading && <LoadingData />}
      {(!loading && error !== null && politicalProfessions.length > 0) && 
        <Box padding="8px" display="flex" flexWrap="wrap" justifyContent="center" gap="10px">
          {politicalProfessions.map((profession, index) => {
            return (
              <Paper key={index} variant="outlined" sx={{ padding: '2px', textAlign: 'start', width: '100%' }}>
                <Typography>Titulo: {profession.titulo || '--'}</Typography>
                <Typography>Data e hora: {profession.dataHora || '--'}</Typography>
              </Paper>
            )
          })}
        </Box>
      }
      {(!loading && error !== null && politicalProfessions.length === 0) && <Box>Sem dados</Box>}
    </>
  );
}

export default Professions;
