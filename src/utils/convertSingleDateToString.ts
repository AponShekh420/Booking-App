// import { DateRage } from "@/app/(client-components)/type";

const convertSingleDateToString = ([startDate]: any) => {
  const dateString =
    (startDate?.toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
    }) || "")
  return dateString;
};

export default convertSingleDateToString;
