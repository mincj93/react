import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb";


export default async function handler(req, res) {
    if (req.method == 'POST') {

        let db = (await connectDB()).db('forum')

        let body = req.body
        console.log(body);
        console.log("타이틀", body.title);
        console.log("내용", body.content);
        console.log("게시물아이디", body.id);

        let result = await db.collection('post').updateOne(
            { _id: new ObjectId(body.id) },
            { $set: { title: body.title, content: body.content } }
        )

        res.redirect(302, '/list')
    }
} 