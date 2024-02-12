import { MongoClient } from 'mongodb';

const id = encodeURIComponent('mincj93');
const pw = encodeURIComponent('AlsCkd!@34');  // 아이디 패스워드는 encodeURIComponent 를 사용해서 변환해야함.
const uri = process.env.MONGODB_URI;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};


export async function connectDB() {
  const client = new MongoClient(`mongodb+srv://${id}:${pw}@cluster0.9hoz7cs.mongodb.net/?retryWrites=true&w=majority`, options);
  await client.connect();
  return client;
}