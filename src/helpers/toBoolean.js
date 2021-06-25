export default function toBoolean(value) {
  const input = `${value}`.toLowerCase();

  if (input === 'true' || input === '1' || input === 'yes' || input === 'y') {
    return true;
  }

  return false;
}
