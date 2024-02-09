import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    try {
      const client = await MongoClient.connect('mongodb+srv://shoebshaikh:ngv9Jg9bfTYCAHKe@cluster1.zxfllfq.mongodb.net/meetups?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });

      const db = client.db();
      const meetupsCollection = db.collection('meetups');
      
      const result = await meetupsCollection.insertOne(data);
      console.log(result);
      
      client.close();
      res.status(201).json({ message: 'Meetup inserted' });
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}

export default handler;
