export default function Goodbye() {
  // Credit to https://www.are.na/meg-miller/good-sign-offs
  // Credit to https://tomasmaillo.com/ for this component

  const GOODBYES = [
    <>Sincerely,</>,
    <>My battery’s low,</>,
    <>Keep smiling,</>,
    <>Thanks again,</>,
    <>Scene over,</>,
    <>Drink water,</>,
    <>Obsessively,</>,
    <>That’s a wrap,</>,
    <>See you soon,</>,
    <>Big hug,</>,
    <>Warm vibes,</>,
    <>Stay fun,</>,
    <>Your friend,</>,
    <>I’m off!,</>,
    <>Stay hydrated,</>,
    <>Be weird,</>,
    <>Made with ♥︎,</>,
  ];

  // Get the current date
  const today = new Date();

  // Convert the date to a string (e.g., "2024-09-01") and concatenate with the length of the GOODBYES array
  const dateString = `${today.getFullYear()}-${
    today.getMonth() + 1
  }-${today.getDate()}`;
  // Create a hash value by converting the string into a number
  const hash = dateString
    .split('')
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);

  // Get a stable index by using the hash modulo the length of the GOODBYES array
  const index = hash % GOODBYES.length;

  return (
    <p className='text-sm opacity-50 text-center leading-5'>
      {GOODBYES[index]}
    </p>
  );
}
