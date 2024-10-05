export default function (timestamp: number) {
  const oneDay = 24 * 60 * 60 * 1000; // in milliseconds
  const now = Date.now();
  return now - timestamp > oneDay;
}
