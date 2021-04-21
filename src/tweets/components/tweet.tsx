import { UserCircle, ArrowUpRight } from "phosphor-react";
import React from "react";

import Button from "../../shared/components/button";
import { getFormmatedDate } from "../../utils/date-utils";
import { ReliefTweet } from "../classes";

interface TweetProps {
 tweet: ReliefTweet;
}
const Tweet = ({ tweet }: TweetProps) => {
 return (
  <div className="w-full bg-black">
   <div className="w-full flex items-center justify-center px-5 py-5">
    <div className="w-full mx-auto rounded-lg bg-white shadow p-5 text-gray-800">
     <div className="w-full flex">
      <div className="w-full flex mb-4">
       <div className="overflow-hidden rounded-full w-12 h-12">
        <UserCircle size={48} color="#8da4ce" weight="bold" />
       </div>
       <div className="flex-grow pl-3">
        <h6 className="font-bold text-md">{tweet.referenced_user.name}</h6>
        <p className="text-xs text-gray-600">
         <a
          className="hover:underline"
          target="_blank"
          href={`https://twitter.com/${tweet.referenced_user.username}`}
         >
          @{tweet.referenced_user.username}
         </a>
        </p>
       </div>
       <div className="w-12 text-right">
        <i className="mdi mdi-twitter text-blue-400 text-3xl"></i>
       </div>
      </div>
      <a
       target="_blank"
       href={`https://twitter.com/${tweet.referenced_user.username}/status/${tweet.conversation_id}`}
      >
       <Button type="button" variant="outlined" variantColor="success">
        <ArrowUpRight size={16} color="#8da4ce" weight="bold" />
       </Button>
      </a>
     </div>
     <div className="w-full mb-4">
      <p className="text-sm">{tweet.referenced_text}</p>
     </div>
     <div className="w-full">
      <p className="text-xs text-gray-500 text-right">
       {getFormmatedDate(tweet.created_at, "MMM d'th' HH:mm a")}
      </p>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Tweet;
