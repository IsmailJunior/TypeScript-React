import axios from "axios";
import { API_URL } from "./server/public-config";

export const fetchData = async () =>
{
	const res = await axios.get( `${ API_URL }/data` )
	return res.data.data;
}