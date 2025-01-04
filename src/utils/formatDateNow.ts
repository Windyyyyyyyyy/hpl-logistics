export const formatDay = (time: number) => {
  const date = new Date(time);
  const day = date.getDate().toString().padStart(2, '0');
  return day;
};

export const formatMonth = (time: number) => {
  const date = new Date(time);
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const month = months[date.getMonth()];
  return month;
};
