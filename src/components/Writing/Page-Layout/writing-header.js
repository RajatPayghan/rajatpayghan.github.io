// SERVER COMPONENT - Header with navigation and title
export function WritingHeader({ navigationLink, children }) {
  return (
    <header className='writing-header'>
      {navigationLink}
      <h1 className='hero-title'>{children}</h1>
    </header>
  );
}
