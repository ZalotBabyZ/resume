import React from "react";
import { cn } from "../utilities/general";

export const SectionHeading = ({ title, icon: Icon, isA4 = false }: { title: string, icon: React.ElementType, isA4?: boolean }) => (
  <div className={cn("flex items-center border-b-2 border-slate-100", isA4 ? "gap-2 mb-2 pb-1" : "gap-2 md:gap-3 mb-4 pb-2")}>
    <div className={cn("bg-indigo-50 rounded text-indigo-600", isA4 ? "p-1" : "p-1.5 md:p-2")}>
      <Icon className={isA4 ? "w-3.5 h-3.5" : "w-4 h-4 md:w-5 md:h-5"} />
    </div>
    <h2 className={cn("font-bold text-slate-800 uppercase", isA4 ? "text-[13px] tracking-widest" : "text-sm md:text-lg tracking-wider")}>{title}</h2>
  </div>
);
