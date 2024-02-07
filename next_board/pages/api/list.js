import { connectDB } from "@/util/database.js"


export default async function handler(req, res) {
    
    const lg = console.log;

    if (req.method === 'GET') {
        // 여기에서 GET 요청에 대한 로직을 작성합니다.
        lg(`message: 'GET요청으로 list 를 호출한다`);

        let db = (await connectDB()).db('forum');
        let result = await db.collection('post').find().toArray();

        res.json(result);

    } else {
        res.status(405).json({ message: '허용되지 않는 메소드입니다.' });
    }
}