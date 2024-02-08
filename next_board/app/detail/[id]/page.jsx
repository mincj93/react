import { ObjectId } from "mongodb";
import { connectDB } from "../../../util/database.js"




export default async function Detail(props) { // url 에 사용자가 입력한 값 가져올 때 쓰는 props

    let urlID = props.params.id; // url 에 사용자가 입력한 값
    let db = (await connectDB()).db('forum')
    let result = await db.collection('post').findOne({ _id: new ObjectId(urlID) }); // ObjectId 쓸 땐 new 키워드 써줘야함.

    console.log(urlID)

    return (
        <div className="list-bg">
            <h4>상세페이지 {urlID} 임</h4>
            <div className="list-item">
                <h4>{result.title}</h4>
                <p>{result.content}</p>
            </div>
        </div>
    )
}