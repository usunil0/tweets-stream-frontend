import { NextApiResponse, NextApiRequest } from "next";

import dbConnect from "../../utils/api-utils/db-connect";
import Tweet from "../../tweets/models/tweet";

const getQuery = (queryParams: { [key: string]: string | string[] }) => {
 let query: any = {};

 if (queryParams.text) {
  const searchText = Array.isArray(queryParams.text)
   ? queryParams.text.join(" ")
   : queryParams.text;
  query.referenced_text = { $regex: new RegExp(searchText, "i") };
 }

 return query;
};

export default async function handler(
 req: NextApiRequest,
 res: NextApiResponse
) {
 const { method } = req;

 await dbConnect();

 switch (method) {
  case "GET":
   try {
    const params = req.query;

    const tweets = await Tweet.find(
     getQuery(params)
    ); /* find all the data in our database */
    res.status(200).json({ success: true, data: tweets });
   } catch (error) {
    console.log(error);
    res.status(400).json({ success: false });
   }
   break;
  default:
   res.status(400).json({ success: false });
   break;
 }
}
