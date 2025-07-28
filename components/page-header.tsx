"use client";

import { cn } from "@/lib/utils"
import ContactButtons from "./contact-buttons";

interface PageHeaderProps {
  title: string
  description?: string
  className?: string
}

export default function PageHeader({ title, description, className }: PageHeaderProps) {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <h1 className="text-balance text-2xl font-semibold">
        {title}
      </h1>
      {description && (
        <p className="text-sm">
          {description}
        </p>
      )}

      <ContactButtons />
    </div>
  )
}
