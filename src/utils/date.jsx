import moment from 'moment';

export const dateParse = () => {
  const currentTime = moment().format().slice(0, 10);
  return currentTime;
};
