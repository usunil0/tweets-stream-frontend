import { format } from "date-fns";

export const getFormmatedDate = (dateString: string, formatString: string) => {
 return format(new Date(dateString), formatString);
};
