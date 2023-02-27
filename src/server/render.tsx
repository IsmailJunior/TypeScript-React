import { fetchData } from "../api_client";
import ReactDOMServer from "react-dom/server"
import App from "../components/App";
const serverRender = async () =>
{
	const data = await fetchData();
	const initMarkup = ReactDOMServer.renderToString( <App data={ { data } } /> );
	return {initMarkup};
};

export default serverRender;