import { FastAverageColor } from 'fast-average-color';

export default async function (imagePath: string): Promise<string> {
  const fac = new FastAverageColor();
  const color = await fac.getColorAsync(imagePath);
  return color.rgba;
}
