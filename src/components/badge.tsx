import React from 'react';
import {cn} from '../utilities/general';

export const Badge = ({ children, intent = 'brand', isA4 = false }: { children: React.ReactNode, intent?: 'brand' | 'neutral', isA4?: boolean }) => (
  <div className={cn(
    "inline-block rounded border font-medium max-w-full align-middle break-inside-avoid",
    intent === 'brand' ? "bg-indigo-50 text-indigo-700 border-indigo-100" : "bg-slate-100 text-slate-600 border-slate-200",
    isA4 
      ? "px-1.5 text-[8px] whitespace-normal break-words leading-snug h-5" 
      : "px-2 py-1 text-[11px] md:text-xs leading-none"
  )}>
    {children}
  </div>
);