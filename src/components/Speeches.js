import { useEffect, useState } from "react";
import { Box, Paper, Typography } from "@mui/material";
import { getPoliticalSpeeches } from "../api/openDataPolitical";
import LoadingData from "./LoadingData";

const Speeches = (props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [politicalSpeeches, setPoliticalSpeeches] = useState([]);

  const getPoliticalSpeechesInfo = async () => {
    const params = {
      id: props.id,
      setLoading,
      setPoliticalSpeeches,
      setError,
    };
    getPoliticalSpeeches(params);
  };

  useEffect(() => {
    getPoliticalSpeechesInfo();
  }, []); // eslint-disable-line

  return (
    <>
      {loading && <LoadingData />}
      {(!loading && error !== null && politicalSpeeches.length > 0) && 
        <Box padding="8px" display="flex" flexWrap="wrap" justifyContent="center" gap="10px">
          {politicalSpeeches.map((speech, index) => {
            return (
              <Paper key={index} variant="outlined" sx={{ padding: '2px', textAlign: 'start', width: '100%' }}>
                <Typography>Tipo discurso: {speech.tipoDiscurso || '--'}</Typography>
                <Typography>Data e hora inicial: {speech.dataHoraInicio || '--'}</Typography>
                <Typography>Transcrição: {speech.transcricao || '--'}</Typography>
              </Paper>
            )
          })}
        </Box>
      }
      {(!loading && error !== null && politicalSpeeches.length === 0) && <Box>Sem dados</Box>}
    </>
  );
}

export default Speeches;
