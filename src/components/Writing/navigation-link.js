// SERVER COMPONENT - Reusable navigation link with icon
import Link from 'next/link';

export function NavigationLink({
  href,
  icon: Icon,
  iconSize = 20,
  children,
  variant = 'default',
}) {
  const className =
    variant === 'content' ? 'writing-content-nav-link' : 'writing-nav-link';

  return (
    <Link href={href} className={className}>
      <Icon size={iconSize} />
      <span>{children}</span>
    </Link>
  );
}
