import moment from "moment";

export const convertToRelativeDate = (date) => moment(date).fromNow();
