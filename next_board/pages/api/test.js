export default function handler(req, res) {
    if (req.method === 'GET') {
      // 여기에서 GET 요청에 대한 로직을 작성합니다.
      res.status(200).json({ message: 'GET 요청이 수신되었습니다.' });
    } else {
      res.status(405).json({ message: '허용되지 않는 메소드입니다.' });
    }
  }