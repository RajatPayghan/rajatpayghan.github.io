import React from 'react';
import Link from 'next/link';
import { highlight } from 'sugar-high';
import '@/styles/mdx-components.css';

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

  code: ({ children, ...props }) => {
    const codeHTML = highlight(children);
    return (
      <code
        className='mdx-code'
        dangerouslySetInnerHTML={{ __html: codeHTML }}
        {...props}
      />
    );
  },

  Table: ({ data }) => (
    <table className='mdx-table'>
      <thead className='mdx-table-header'>
        <tr>
          {data.headers.map((header, index) => (
            <th key={index} className='mdx-table-header-cell'>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.rows.map((row, index) => (
          <tr key={index} className='mdx-table-row'>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} className='mdx-table-cell'>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  ),

  blockquote: (props) => <blockquote className='mdx-blockquote' {...props} />,
};

export function useMDXComponents(otherComponents) {
  return {
    ...otherComponents,
    ...components,
  };
}
