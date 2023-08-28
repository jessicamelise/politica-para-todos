import { Search } from "@mui/icons-material";
import { Box, InputAdornment, TextField } from "@mui/material";

const FormSearch = (props) => {

  const handleClickSearch = () => {
    props.getSearchPolitical();
    return
  };

  const handleChangeSearch = (e) => {
    props.setSearch(e.target.value);
    if (e.target.value === '') {
      props.setError(null);
      props.setPoliticalList([]);
    };
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      props.getSearchPolitical();
      return
    };
  };

  return (
    <Box component="form">
      <TextField
        fullWidth
        variant="outlined"
        size="small"
        placeholder="Pesquise pelo nome do deputado..."
        value={props.search}
        onChange={handleChangeSearch}
        onKeyDown={handleKeyDown}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" sx={{ cursor: 'pointer' }}>
              <Search onClick={handleClickSearch} />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}

export default FormSearch;     