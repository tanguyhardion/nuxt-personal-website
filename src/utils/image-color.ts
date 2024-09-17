import { FastAverageColor } from 'fast-average-color';

export async function getImageColor(imagePath: string): Promise<string> {
  const fac = new FastAverageColor();
  const color = await fac.getColorAsync(imagePath);
  return color.rgba;
}
