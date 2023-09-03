import { useEffect, useState } from "react";
import { Box, Paper, Typography } from "@mui/material";
import { getPoliticalEvents } from "../api/openDataPolitical";
import LoadingData from "./LoadingData";

const Events = (props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [politicalEvents, setPoliticalEvents] = useState([]);

  const getPoliticalEventsInfo = async () => {
    const params = {
      id: props.id,
      setLoading,
      setPoliticalEvents,
      setError,
    };
    getPoliticalEvents(params);
  };

  useEffect(() => {
    getPoliticalEventsInfo();
  }, []); // eslint-disable-line

  return (
    <>
      {loading && <LoadingData />}
      {(!loading && error !== null && politicalEvents.length > 0) && 
        <Box padding="8px" display="flex" flexWrap="wrap" justifyContent="center" gap="10px">
          {politicalEvents.map((event, index) => {
            return (
              <Paper key={index} variant="outlined" sx={{ padding: '2px', textAlign: 'start', width: '100%' }}>
                <Typography>Descrição: {event.descricao || '--'}</Typography>
                <Typography>Local externo: {event.localExterno || '--'}</Typography>
                <Typography>Situação: {event.situacao || '--'}</Typography>
                <Typography>Data e hora inicio: {event.dataHoraInicio || '--'}</Typography>
                <Typography>Data e hora fim: {event.dataHoraFim || '--'}</Typography>
              </Paper>
            )
          })}
        </Box>
      }
      {(!loading && error !== null && politicalEvents.length === 0) && <Box>Sem dados</Box>}
    </>
  );
}

export default Events;
