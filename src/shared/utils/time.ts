export const secondsToHms = (time: number) => {
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = Math.floor((time % 3600) % 60);

  return {
    minutes,
    seconds,
  };
};
