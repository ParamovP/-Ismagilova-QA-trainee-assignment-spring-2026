export function parseTime(text: string | null): number {
  if (!text) throw new Error('Timer text is null');
  const [min, sec] = text.split(':').map(Number);
  return min * 60 + sec;
}