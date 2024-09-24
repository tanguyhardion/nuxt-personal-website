export default function (date: Date): string {
  return `${date.toLocaleString('en', { month: 'short' })}. ${date.getFullYear()}`;
}
