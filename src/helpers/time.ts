export function getTime(openTime: number, closeTime: number, gap: number) {
  const arr: Array<any> = [];
  for (let time = openTime; time <= closeTime; time + gap) {
    arr.push(time);
  }
  return arr;
}
