import React from 'react';
import { cn } from '../utilities/general';

export const ContactItem = ({ icon: Icon, text, isA4 = false }: { icon: React.ElementType, text: string, isA4?: boolean }) => (
  <div className={cn("flex text-slate-600", isA4 ? "items-start gap-1" : "items-end gap-3")}>
    <Icon className={cn("shrink-0 text-indigo-500 mt-0.5", isA4 ? "w-4 h-4" : "w-4 h-4 md:w-5 md:h-5")} />
    <span className={cn("font-medium break-all", isA4 ? "text-[10px] leading-tight" : "text-[12px] w-full")}>
      {text}
    </span>
  </div>
);