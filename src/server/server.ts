import express from "express";
import os from "node:os";
import logger from "morgan";
import config from "./config";
import Router from './router/api';
import serverRender from "./render";
const server = express();

server.use( express.static( "dist" ) )
server.use(logger("dev"))
server.use( "/api", Router )
server.use( "/",  async( req, res ) =>
{
	const {initMarkup} = await serverRender()
	res.render( "index", {
		initMarkup
	})
})
server.set("view engine", "ejs")
server.listen( config.PORT, config.HOST, () =>
{
	console.info( `Express server is Online at ${config.URL}` )
	console.info(`free memory: ${Math.round(os.freemem() / 1024 / 1024 )}MB`)
})