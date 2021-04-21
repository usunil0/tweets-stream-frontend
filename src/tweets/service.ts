import axios from "axios";
import { BASE_URL } from "../shared/constants";
import { Params, ReliefTweet } from "./classes";

export interface TweetService {
 getAll: (params?: Params) => Promise<{ data: ReliefTweet[] }>;
}

export class HttpTweetService implements TweetService {
 protected getUrlEscapedParams(params?: Params) {
  if (!params) {
   return params;
  }

  const urlEscapedParams: any = {};

  for (const key in params) {
   let value = params[key as keyof Params];

   if (typeof value === "object") {
    //@ts-expect-error
    value = value.join(",");
   }

   urlEscapedParams[key] = value;
  }

  return urlEscapedParams;
 }

 getAll = async (params?: Params): Promise<{ data: ReliefTweet[] }> => {
  return await (
   await axios.get(`${BASE_URL}/tweets`, {
    params: this.getUrlEscapedParams(params)
   })
  ).data;
 };
}
