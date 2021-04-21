import React, { useState, useEffect } from "react";
import Input from "../../shared/components/input";
import { Params, ReliefTweet } from "../classes";
import { HttpTweetService, TweetService } from "../service";
import { TWEETS } from "./sample-data";
import Tweet from "./tweet";

interface TweetFeedProps {
 service: TweetService;
}
const TweetFeed = ({ service }: TweetFeedProps) => {
 const [tweets, setTweets] = useState<ReliefTweet[]>();
 const [params, setparams] = useState<Params>();

 useEffect(() => {
  getTweets(params);
 }, [params]);

 useEffect(() => {
  getTweets();
 }, []);

 const getTweets = async (params?: Params) => {
  try {
   const tweets = await service.getAll(params);
   setTweets(tweets.data);
  } catch (error) {
   console.log(error);
  }
 };

 const handleSearch = (text: string) => {
  setparams({
   text
  });
 };
 return (
  <div className="min-h-screen bg-white flex flex-col">
   <header className="bg-white shadow-sm sticky top-0 z-10 py-2">
    <h3 className="text-black font-bold px-2">Tweet Relief Bot</h3>
   </header>

   <div className="grid grid-cols-6 gap-4 ">
    <div className="lg:col-start-3 lg:col-end-5">
     <Input
      placeholder="Search tweet"
      value={params?.text}
      onChange={handleSearch}
     />
     <div
      className="overflow-auto pt-2 mt-2"
      style={{ height: "calc(100vh - 80px)" }}
     >
      {tweets?.map(tweet => {
       return <Tweet tweet={tweet} />;
      })}
     </div>
    </div>
   </div>
  </div>
 );
};

TweetFeed.defaultProps = {
 service: new HttpTweetService()
};

export default TweetFeed;
