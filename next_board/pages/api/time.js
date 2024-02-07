import { connectDB } from "@/util/database.js"
import moment from "moment";


export default async function handler(req, res) {
    
    const lg = console.log;

    if (req.method === 'GET') {
        lg(`message: 'GET요청으로 time 기능 호출`);
        let mmt = moment();
        let now = mmt.format('YYYY/MM/DD HH:MM:ss');
        res.json({now});

    } else {
        res.status(405).json({ message: '허용되지 않는 메소드입니다.' });
    }
}