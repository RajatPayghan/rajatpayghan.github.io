Thanks for laying out your file structure — it’s clear, and now I understand exactly what you're trying to do.

---

## ❓The Core Problem

You're trying to:

* Fetch Spotify data (server-side)
* Pass `isMobile` (client-side) down to the Presenter
* But `SpotifyMiddleware` was originally async and server-side, which breaks since you're using `useIsMobile()` (a hook → client-only) in `Home_Spotify`.

---

## ✅ Recommended Architecture

You need to **split concerns** like this:

| Component           | Type   | Responsibility                      |
| ------------------- | ------ | ----------------------------------- |
| `layout.js`         | Server | Base HTML structure                 |
| `page.js`           | Client | `useIsMobile`, loading state        |
| `Home_Spotify`      | Client | Gets `isMobile`, passes it down     |
| `SpotifyServerData` | Server | Calls `getSpotifyPlaylist()`        |
| `SpotifyMiddleware` | Client | Receives props from server + mobile |
| `SpotifyPresenter`  | Client | UI presentation                     |

---

## ✅ Step-by-Step Fix

### 1. Create a new server component to fetch data

```tsx
// components/Spotify/server-wrapper.js
import SpotifyMiddelware from './middleware';
import { getSpotifyStatus } from './data';

export default async function SpotifyServerWrapper({ isMobile }) {
  const status = await getSpotifyStatus();

  return <SpotifyMiddelware status={status} isMobile={isMobile} />;
}
```

### 2. Make `SpotifyMiddelware` a **client** component

```tsx
// components/Spotify/middleware.js
'use client';

import React from 'react';
import { SONG } from '@/constants/one-place-changer';
import SpotifyPresenter from './presenter';

export default function SpotifyMiddelware({ status, isMobile }) {
  return (
    <SpotifyPresenter SONG={SONG} isMobile={isMobile} status={status} />
  );
}
```

### 3. `SpotifyPresenter` stays client-only

```tsx
// components/Spotify/presenter.js
'use client';

import React from 'react';
import Badge from '@/components/Badge';
import { Play } from 'lucide-react';
import { Spotify as SpotifyIcon } from '@/constants/icons';
import { cn } from '@/constants/utils';

export default function SpotifyPresenter({ SONG, isMobile, status }) {
  return (
    <div>
      {/* Use status if needed */}
      <a href={SONG.hrefSpotify} rel='noopener noreferrer' target='_blank'>
        <div className={cn('...')}>
          {/* UI */}
        </div>
      </a>
    </div>
  );
}
```

### 4. Update `Home_Spotify` to call the server-wrapper

```tsx
import React from 'react';
import {
  SectionContainer,
  SectionContent,
  SectionTitle,
} from '@/components/Sections';
import { useIsMobile } from '@/components/Hooks/useIsMobile';
import SpotifyServerWrapper from '@/components/Spotify/server-wrapper';

export default function Home_Spotify() {
  const isMobile = useIsMobile();

  // Wrap in a client-only render fallback since SpotifyServerWrapper is async
  return (
    <SectionContainer>
      <SectionTitle>Recent Fav</SectionTitle>
      <SectionContent>
        <SpotifyServerWrapper isMobile={isMobile} />
      </SectionContent>
    </SectionContainer>
  );
}
```

> ❗ `SpotifyServerWrapper` is async and a server component, so technically you cannot call it inside a client component (`Home_Spotify`). So…

---

### 🧠 Final Fix — Let Page Be Server-Side (Not Client)

Change `page.js` to be server-side:

```tsx
// Remove 'use client'
import Home_Spotify from '@/components/Home/sections/v3.spotify';
import { isMobileServerSide } from '@/lib/helpers'; // you'll define this

export default async function Home() {
  const isMobile = isMobileServerSide(); // Use user-agent logic here

  return (
    <div>
      <Home_Spotify isMobile={isMobile} />
    </div>
  );
}
```

And update `Home_Spotify`:

```tsx
export default function Home_Spotify({ isMobile }) {
  return (
    <SectionContainer>
      <SectionTitle>Recent Fav</SectionTitle>
      <SectionContent>
        <SpotifyServerWrapper isMobile={isMobile} />
      </SectionContent>
    </SectionContainer>
  );
}
```

---

## ✅ Bonus: Detect Mobile Server-Side

```js
// lib/helpers.js
export function isMobileServerSide(userAgent = '') {
  return /Mobi|Android/i.test(userAgent);
}
```

---

## ✅ TL;DR

You **cannot use `useIsMobile` in server components** and **you cannot fetch data with `await` inside client components**.

So:

* Fetch data in a server wrapper
* Pass `isMobile` as a prop from top-level server component (from page.js)
* Make Presenter & Middleware client components

---

Would you like me to give you the refactored full file structure code with these changes applied?
