import { Params } from "next/dist/next-server/server/router";

export const getUrlParams = (queryString: string) => {
 const urlParams = new URLSearchParams(queryString);
 const params: Params = {};

 for (const [key, value] of urlParams) {
  params[key as keyof Params] = value;
 }

 return params;
};
