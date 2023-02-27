import { connectClient, stopClient } from "../server/db";

async function main ()
{
	const client = await connectClient()
	await client.collection( "main" ).deleteMany( {} );
	const data = await client.collection( "main" ).insertMany( [
		{
			id: "543454fdd",
			name: "First",
			age: 23
		},
		{
			id: "543354fdd",
			name: "Second",
			age: 21
		}
	] )
	console.info("Inserted Values", data.insertedCount)
	stopClient()
}

main()