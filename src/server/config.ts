const env = process.env;

export const PORT = env.PORT ?? "2020";
export const HOST = env.host ?? "0.0.0.0";
export const URL = `http://${ HOST }:${ PORT }`
export const MONGODB_URI = env.MONGODB_URI ?? "mongodb://localhost:27017"
export const DATABASE_NAME = env.DATABASE_NAME ?? "cloud"

export default {
	PORT,
	HOST,
	URL
}