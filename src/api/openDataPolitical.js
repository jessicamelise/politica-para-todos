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

export const getPoliticalById = async (props) => {
  const path = "deputados";
  const politicalId = props.id;
  props.setLoading(true);
  try {
    const openDataApi = await fetch(`${url}${path}/${politicalId}`);
    const response = await openDataApi.json();
    props.setPoliticalDetail(response.dados);
    props.setError(false);
  } catch (err) {
    props.setPoliticalDetail({});
    props.setError(true);
  } finally {
    props.setLoading(false);
  };
};

export const getPoliticalExpenses = async (props) => {
  const path = "deputados";
  const politicalId = props.id;
  props.setLoading(true);
  try {
    const openDataApi = await fetch(`${url}${path}/${politicalId}/despesas`);
    const response = await openDataApi.json();
    props.setPoliticalExpenses(response.dados);
    props.setError(false);
  } catch (err) {
    props.setPoliticalExpenses([]);
    props.setError(true);
  } finally {
    props.setLoading(false);
  };
};

export const getPoliticalExternalMandate = async (props) => {
  const path = "deputados";
  const politicalId = props.id;
  props.setLoading(true);
  try {
    const openDataApi = await fetch(`${url}${path}/${politicalId}/mandatoExterno`);
    const response = await openDataApi.json();
    props.setPoliticalExternalMandate(response.dados);
    props.setError(false);
  } catch (err) {
    props.setPoliticalHistoric([]);
    props.setError(true);
  } finally {
    props.setLoading(false);
  };
};

export const getPoliticalSpeeches = async (props) => {
  const path = "deputados";
  const politicalId = props.id;
  props.setLoading(true);
  try {
    const openDataApi = await fetch(`${url}${path}/${politicalId}/discursos`);
    const response = await openDataApi.json();
    props.setPoliticalSpeeches(response.dados);
    props.setError(false);
  } catch (err) {
    props.setPoliticalSpeeches([]);
    props.setError(true);
  } finally {
    props.setLoading(false);
  };
};

export const getPoliticalOccupations = async (props) => {
  const path = "deputados";
  const politicalId = props.id;
  props.setLoading(true);
  try {
    const openDataApi = await fetch(`${url}${path}/${politicalId}/ocupacoes`);
    const response = await openDataApi.json();
    props.setPoliticalOccupations(response.dados);
    props.setError(false);
  } catch (err) {
    props.setPoliticalOccupations([]);
    props.setError(true);
  } finally {
    props.setLoading(false);
  };
};

export const getPoliticalProfessions = async (props) => {
  const path = "deputados";
  const politicalId = props.id;
  props.setLoading(true);
  try {
    const openDataApi = await fetch(`${url}${path}/${politicalId}/profissoes`);
    const response = await openDataApi.json();
    props.setPoliticalProfessions(response.dados);
    props.setError(false);
  } catch (err) {
    props.setPoliticalProfessions([]);
    props.setError(true);
  } finally {
    props.setLoading(false);
  };
};

export const getPoliticalEvents = async (props) => {
  const path = "deputados";
  const politicalId = props.id;
  props.setLoading(true);
  try {
    const openDataApi = await fetch(`${url}${path}/${politicalId}/eventos`);
    const response = await openDataApi.json();
    props.setPoliticalEvents(response.dados);
    props.setError(false);
  } catch (err) {
    props.setPoliticalEvents([]);
    props.setError(true);
  } finally {
    props.setLoading(false);
  };
};