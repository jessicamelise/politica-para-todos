const url = "https://dadosabertos.camara.leg.br/api/v2/";

export const getPoliticalList = async (props) => {
  const path = "deputados";
  const nameSearch = props.nameSearch;
  props.setLoading(true);
  try {
    const openDataApi = await fetch(`${url}${path}?nome=${nameSearch}`);
    const response = await openDataApi.json();
    props.setPoliticalList(response.dados);
    props.setError(false);
  } catch (err) {
    props.setPoliticalList([]);
    props.setError(true);
  } finally {
    props.setLoading(false);
  };
};