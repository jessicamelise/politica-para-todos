import { Box } from "@mui/material";

const Header = () => {
	return (
		<Box
			component="header"
			display="flex"
			width="100%"
			minHeight="100px"
			justifyContent="center"
			alignItems="center"
		>
			<Box component="h2">Politica para todos</Box>
		</Box>
	);
}

export default Header;
