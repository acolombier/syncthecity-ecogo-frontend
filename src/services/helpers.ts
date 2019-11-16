export const getDuration = (value: number) => {
  var hours = value / 60;
  var rhours = Math.floor(hours);
  var minutes = (hours - rhours) * 60;
  var rminutes = Math.round(minutes);
  return rhours + 'h ' + rminutes + 'm';
};
