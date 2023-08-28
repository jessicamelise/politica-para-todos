import { Box, CircularProgress } from "@mui/material";

const LoadingData = () => {
	return (
		<Box
			component="section"
			display="flex"
			width="100%"
			minHeight="100px"
			justifyContent="center"
			alignItems="center"
		>
			<CircularProgress />
		</Box>
	);
}

export default LoadingData;
