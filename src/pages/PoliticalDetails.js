import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPoliticalById } from "../api/openDataPolitical";
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Typography, useMediaQuery } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import Header from "../components/Header";
import LoadingData from "../components/LoadingData";
import Expenses from "../components/Expenses";
import ExternalMandate from "../components/ExternalMandate";
import Speeches from "../components/Speeches";
import Occupations from "../components/Occupations";
import Professions from "../components/Professions";
import Events from "../components/Events";

const PoliticalDetails = () => {
  const navigate = useNavigate();
  const { political } = useParams();
  const matches = useMediaQuery('(min-width:800px)');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [politicalDetail, setPoliticalDetail] = useState({});

  const routeChangeToHome = () => {
    const path = `/`;
    navigate(path);
  };

  const getPoliticalDetail = async () => {
    const params = {
      id: political,
      setLoading,
      setPoliticalDetail,
      setError,
    };
    getPoliticalById(params);
  };

  useEffect(() => {
    getPoliticalDetail();
  }, []); // eslint-disable-line

  const infoForAccordionList = [
    {
      title: 'Despesas',
      id: 'expense',
      description: <Expenses id={political} />
    },
    {
      title: 'Mandatos',
      id: 'mandate',
      description: <ExternalMandate id={political} />
    },
    {
      title: 'Discursos',
      id: 'speech',
      description: <Speeches id={political} />
    },
    {
      title: 'Ocupações',
      id: 'occupation',
      description: <Occupations id={political} />
    },
    {
      title: 'Profissões',
      id: 'profession',
      description: <Professions id={political} />
    },
    {
      title: 'Eventos',
      id: 'events',
      description: <Events id={political} />
    },
  ];

  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      height="100%"
      textAlign="center"
    >
      <Header />
      <Button variant="text" onClick={routeChangeToHome}>Voltar</Button>
      {loading && <LoadingData />}
      {(!loading && error !== null && Object.keys(politicalDetail).length > 0) &&
        <>
          <Box display="flex" flexDirection={matches ? 'row' : 'column'} alignItems="center">
            <Box sx={{ width: "150px" }}>
              <Box component="img" src={politicalDetail.ultimoStatus.urlFoto || ''} sx={{ width: "100px" }}></Box>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="flex-start">
              <Typography>Nome: {politicalDetail.ultimoStatus.nome || '--'}</Typography>
              <Typography>Partido: {politicalDetail.ultimoStatus.siglaPartido || '--'}</Typography>
              <Typography>UF: {politicalDetail.ultimoStatus.siglaUf || '--'}</Typography>
              <Typography>e-mail: {politicalDetail.ultimoStatus.email || '--'}</Typography>
              <Typography>Situação mandato: {politicalDetail.ultimoStatus.situacao || '--'}</Typography>
              <Typography>Condição eleitoral: {politicalDetail.ultimoStatus.condicaoEleitoral || '--'}</Typography>
              <Typography>Escolaridade: {politicalDetail.escolaridade || '--'}</Typography>
            </Box>
          </Box>
          {infoForAccordionList && infoForAccordionList.length > 0 &&
            <>
              {infoForAccordionList.map((info) => {
                return (
                  <Accordion key={info.id}>
                    <AccordionSummary
                      expandIcon={<ExpandMore />}
                      aria-controls={info.id}
                      id={info.id}
                    >
                      <Typography>{info.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      {info.description}
                    </AccordionDetails>
                  </Accordion>
                )
              })}
            </>
          }
        </>
      }
      {(!loading && error !== null && Object.keys(politicalDetail).length === 0) && <Box>Sem dados</Box>}
    </Box>
  );
}

export default PoliticalDetails;
