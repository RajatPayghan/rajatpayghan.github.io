export default function Goodbye() {
  // Credit to https://www.are.na/meg-miller/good-sign-offs
  // Credit to https://tomasmaillo.com/ for this component

  const GOODBYES = [
    <>Sincerely,</>,
    <>My battery is low!</>,
    <>Keep smiling,</>,
    <>Sent from my heart,</>,
    <>Thanks for stopping by,</>,
    <>Aaannnnddd..... scene,</>,
    <>Drink some water,</>,
    <>Obsessively,</>,
    <>And thats&apos;s a wrap,</>,
    <>See you tomorrrow,</>,
    <>Big hug,</>,
    <>See you in the future,</>,
    <>Warm goodbyes,</>,
    <>Stay fun,</>,
    <>From your friend,</>,
    <>I will see myself out,</>,
    <>Stay hydrated,</>,
    <>Here&apos;s to the crazy ones,</>,
    <>Made with ♥︎ & ☕︎ by</>,
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
