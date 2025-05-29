# Metadata

The main metadata sturcture is given below. These fields will be the core for metadata, used in filtering, display and sorting. More metadata fileds will be supported in case need arises, but none of them shall be used in any main display or filtering options.

## Copy Block

```javascript
export const metadata = {
  title: '',
  date: 'YYYY-MM-DD',
  readTime: 'About X mins',
  description: '',
  tags: ['', ''],
  isPublished: false,
  isFeatured: false,
  type: 'post',
  image: './index.avif',
};
```

## Metadata sturcture

```javascript
export const metadata = {
  title: '', // Display title
  date: 'YYYY-MM-DD', // Last Modified Date works here
  readTime: 'About X mins', // Formula : RT in mins = (character_count / 1200)
  description: '', // A quick summary
  tags: ['', ''], // Make sure there is always a tag
  isPublished: false, // Mark true when ready to publish
  isFeatured: false, // If featuring, mark this a true
  type: 'post', // Types can be 'note', 'post' and 'essay'
  image: './index.avif', // Preffered use is avif format
  ...otherMetadata
};
```
