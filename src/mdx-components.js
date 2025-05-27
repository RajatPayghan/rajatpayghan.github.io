import React from 'react';
import Link from 'next/link';
import { highlight } from 'sugar-high';
import '@/styles/mdx-components.css';
import '@/styles/sugar-high-varibles.css';

const components = {
  h1: (props) => <h1 className='mdx-h1' {...props} />,

  h2: (props) => <h2 className='mdx-h2' {...props} />,

  h3: (props) => <h3 className='mdx-h3' {...props} />,

  h4: (props) => <h4 className='mdx-h4' {...props} />,

  p: (props) => <p className='mdx-paragraph' {...props} />,

  ol: (props) => <ol className='mdx-ordered-list' {...props} />,

  ul: (props) => <ul className='mdx-unordered-list' {...props} />,

  li: (props) => <li className='mdx-list-item' {...props} />,

  em: (props) => <em className='mdx-emphasis' {...props} />,

  strong: (props) => <strong className='mdx-strong' {...props} />,

  a: ({ href, children, ...props }) => {
    if (href?.startsWith('/')) {
      return (
        <Link href={href} className='mdx-link' {...props}>
          {children}
        </Link>
      );
    }

    if (href?.startsWith('#')) {
      return (
        <a href={href} className='mdx-link' {...props}>
          {children}
        </a>
      );
    }

    return (
      <a
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        className='mdx-link'
        {...props}
      >
        {children}
      </a>
    );
  },

  code: ({ children, className = '', ...props }) => {
    const isBlock = className.includes('language-');

    if (isBlock) {
      const lang = className.replace('language-', '');
      const highlighted = highlight(children); // or use Shiki's `highlighter.codeToHtml` if you switch
      return (
        <pre className='mdx-code-block'>
          <code
            className={`language-${lang} mdx-code`} // CODE FONT SIZE CONTROL HERE
            dangerouslySetInnerHTML={{ __html: highlighted }}
            {...props}
          />
        </pre>
      );
    }

    // Inline code fallback
    const inlineHighlighted = highlight(children);
    return (
      <code
        className='mdx-inline-code'
        dangerouslySetInnerHTML={{ __html: inlineHighlighted }}
        {...props}
      />
    );
  },

  table: (props) => <table className='mdx-table' {...props} />,
  thead: (props) => <thead className='mdx-table-header' {...props} />,
  tbody: (props) => <tbody {...props} />,
  tr: (props) => <tr className='mdx-table-row' {...props} />,
  th: (props) => <th className='mdx-table-header-cell' {...props} />,
  td: (props) => <td className='mdx-table-cell' {...props} />,

  blockquote: (props) => <blockquote className='mdx-blockquote' {...props} />,
};

export function useMDXComponents(otherComponents) {
  return {
    ...otherComponents,
    ...components,
  };
}
