import React from 'react';

export default function GameLayout({ children }: { children: React.ReactNode }) {
  return <div className="flex h-full w-full flex-col items-center justify-center">{children}</div>;
}
