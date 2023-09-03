import { Box, Paper, Typography } from "@mui/material";

const CardPolitical = (props) => {
  return (
    <Paper 
      sx={{ width: "150px", cursor: "pointer" }} 
      onClick={() => props.routeChangeToDetails(props.political.id)}
    >
      <Box display="flex" flexDirection="column" justifyItems="center">
        <Box padding="2px">
          <Box component="img" src={props.political.urlFoto || ''} sx={{ width: "100px" }}></Box>
        </Box>
        <Typography fontWeight="bold" fontSize="small">Nome: {props.political.nome || '--'}</Typography>
        <Typography fontSize="small">Partido: {props.political.siglaPartido || '--'}</Typography>
      </Box>
    </Paper>
  );
}

export default CardPolitical;
