export default function MediaContainer({ children }) {
  return (
    <div className='flex items-center justify-center md:px-24 md:py-8 w-full'>
      {children}
    </div>
  );
}
