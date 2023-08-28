import { useState } from "react";
import { Box } from "@mui/material";
import { getPoliticalList } from "../api/openDataPolitical";
import Header from "../components/Header";
import FormSearch from "../components/FormSeach";
import LoadingData from "../components/LoadingData";
import CardPolitical from "../components/CardPolitical";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [politicalList, setPoliticalList] = useState([]);

  const getSearchPolitical = async () => {
    if (search) {
      const params = {
        nameSearch: search,
        setLoading,
        setPoliticalList,
        setError,
      };
      getPoliticalList(params);
    };
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      height="100%"
      textAlign="center"
    >
      <Header />
      <Box component="section" padding="8px">
        <FormSearch 
          setError={setError}
          setPoliticalList={setPoliticalList}
          setSearch={setSearch}
          getSearchPolitical={getSearchPolitical}
          search={search}
        />
      </Box>
      {loading && <LoadingData />}
      {(!loading && error !== null && politicalList.length > 0) && 
        <Box padding="8px" display="flex" flexWrap="wrap" justifyContent="center" gap="10px">
          {politicalList.map((political) => {
            return (
              <CardPolitical
                key={political.id} 
                political={political}
              />
            )
          })}
        </Box>
      }
      {(!loading && error !== null && politicalList.length === 0) && <Box>Sem dados</Box>}
    </Box>
  );
}

export default Home;
