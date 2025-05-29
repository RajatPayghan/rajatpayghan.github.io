export function formatLastPlayedTime(inputTime) {
  const now = new Date();
  const past = new Date(inputTime);
  const diffInSeconds = Math.floor((now - past) / 1000);

  const units = [
    { label: 'year', seconds: 31536000 },
    { label: 'month', seconds: 2592000 },
    { label: 'day', seconds: 86400 },
    { label: 'hr', seconds: 3600 },
    { label: 'min', seconds: 60 },
    { label: 'sec', seconds: 1 },
  ];

  for (const unit of units) {
    const interval = Math.floor(diffInSeconds / unit.seconds);
    if (interval >= 1) {
      return `${interval} ${unit.label}${interval > 1 ? 's' : ''} ago`;
    }
  }

  return 'Now';
}

function getOrdinalSuffix(day) {
  if (day > 3 && day < 21) return 'th'; // 11th–13th are special
  switch (day % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}

export function formatDateForPostList(inputTime) {
  const now = new Date();
  const past = new Date(inputTime);
  const diffInSeconds = Math.floor((now - past) / 1000);
  const diffInDays = Math.floor(diffInSeconds / 86400);

  // If more than a month old, show like "10th Apr"
  if (diffInDays > 30) {
    const options = { day: 'numeric', month: 'short', year: '2-digit' };
    const date = past.toLocaleDateString('en-GB', { day: 'numeric' });
    const month = past.toLocaleDateString('en-GB', { month: 'short' });
    const year = past.toLocaleDateString('en-GB', { year: '2-digit' });
    return `${date}${getOrdinalSuffix(date)} ${month}`;
  }

  const units = [
    { label: 'year', seconds: 31536000 },
    { label: 'month', seconds: 2592000 },
    { label: 'day', seconds: 86400 },
    { label: 'hr', seconds: 3600 },
    { label: 'min', seconds: 60 },
    { label: 'sec', seconds: 1 },
  ];

  for (const unit of units) {
    const interval = Math.floor(diffInSeconds / unit.seconds);
    if (interval >= 1) {
      return `${interval} ${unit.label}${interval > 1 ? 's' : ''} ago`;
    }
  }

  return 'Now';
}
