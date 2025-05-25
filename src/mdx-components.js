import React from 'react';
import Link from 'next/link';
import { highlight } from 'sugar-high';

const components = {
  h1: (props) => <h1 className='font-medium pt-12 mb-0' {...props} />,
  h2: (props) => (
    <h2
      className='text-gray-800 dark:text-zinc-200 font-medium mt-8 mb-3'
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className='text-gray-800 dark:text-zinc-200 font-medium mt-8 mb-3'
      {...props}
    />
  ),
  h4: (props) => <h4 className='font-medium' {...props} />,
  p: (props) => (
    <p className='text-gray-800 dark:text-zinc-300 leading-snug' {...props} />
  ),
  ol: (props) => (
    <ol
      className='text-gray-800 dark:text-zinc-300 list-decimal pl-5 space-y-2'
      {...props}
    />
  ),
  ul: (props) => (
    <ul
      className='text-gray-800 dark:text-zinc-300 list-disc pl-5 space-y-1'
      {...props}
    />
  ),
  li: (props) => <li className='pl-1' {...props} />,
  em: (props) => <em className='font-medium' {...props} />,
  strong: (props) => <strong className='font-medium' {...props} />,
  a: ({ href, children, ...props }) => {
    const className =
      'text-blue-500 hover:text-blue-700 dark:text-gray-400 hover:dark:text-gray-300 dark:underline dark:underline-offset-2 dark:decoration-gray-800';
    if (href?.startsWith('/')) {
      return (
        <Link href={href} className={className} {...props}>
          {children}
        </Link>
      );
    }
    if (href?.startsWith('#')) {
      return (
        <a href={href} className={className} {...props}>
          {children}
        </a>
      );
    }
    return (
      <a
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        className={className}
        {...props}
      >
        {children}
      </a>
    );
  },
  code: ({ children, ...props }) => {
    const codeHTML = highlight(children);
    return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
  },
  Table: ({ data }) => (
    <table>
      <thead>
        <tr>
          {data.headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.rows.map((row, index) => (
          <tr key={index}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  ),
  blockquote: (props) => (
    <blockquote
      className='ml-[0.075em] border-l-3 border-gray-300 pl-4 text-gray-700 dark:border-zinc-600 dark:text-zinc-300'
      {...props}
    />
  ),
};

export function useMDXComponents(otherComponents) {
  return { ...otherComponents, ...components };
}
