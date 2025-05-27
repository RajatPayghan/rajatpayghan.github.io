// components/writing/ContentLayout.js
// SERVER COMPONENT - Layout wrapper for content pages
export function ContentLayout({ children }) {
  return (
    <main className='writing-content'>
      <section className='content-wrapper'>{children}</section>
    </main>
  );
}
