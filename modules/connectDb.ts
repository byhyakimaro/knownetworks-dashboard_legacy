import { MongoClient } from 'mongodb'

const login = process.env['login']
const password = process.env['password']

const url = `mongodb+srv://${encodeURIComponent(login)}:${encodeURIComponent(password)}@cluster0.kpcau.mongodb.net/test`
const client = new MongoClient(url)

let state: any
let conn: any
export async function connect() {
	if (conn && state === 'connected') {
		return conn
	}
	const connection: any = await client.connect()
	console.log('Connected successfully to database')
	state = connection.topology.s.state
	conn = connection.db('users')
	return connection.db('users')
}

export async function getCollection() {
	const db = await connect()
	return await db.collection('members')
}


async function reqMongoDb (req: Request, res: Response) {
  const collection = (await getCollection())
  await collection.insertOne(req.body)
  return 'ok'
}
