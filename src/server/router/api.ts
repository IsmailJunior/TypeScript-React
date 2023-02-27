import express from "express";
import data from "../main.json";
import cors from "cors";

const router = express.Router();
router.use(cors())

router.get( "/data", ( req, res ) =>
{
	res.send({data: data})
});

export default router;