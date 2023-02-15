import moment from "moment";

export const convertToRelativeDate = (date) => moment(date).fromNow();

export const convertToFormatDate = (date) => moment(date).format("MMMM Do, YYYY");
