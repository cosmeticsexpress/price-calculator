const getDayEarnings = ({
  appointmentDuration,
  appointmentPrice,
  workingHours,
}: {
  appointmentDuration: number;
  appointmentPrice: number;
  workingHours: number;
}) => (60 / appointmentDuration) * appointmentPrice * workingHours;

export default getDayEarnings;
