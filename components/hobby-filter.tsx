"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export type FilterType = 'all' | 'movie' | 'book' | 'travel';

interface HobbyFilterProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  counts: {
    all: number;
    movie: number;
    book: number;
    travel: number;
  };
}

const filterOptions = [
  { key: 'all' as const, label: 'All' },
  { key: 'movie' as const, label: 'Movies' },
  { key: 'book' as const, label: 'Books' },
  { key: 'travel' as const, label: 'Travel' },
] as const;

export default function HobbyFilter({ activeFilter, onFilterChange, counts }: HobbyFilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const activeOption = filterOptions.find(option => option.key === activeFilter);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleFilterSelect = (filterType: FilterType) => {
    onFilterChange(filterType);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-neutral-200 rounded-lg hover:bg-neutral-50 hover:border-neutral-300 transition-colors duration-200 text-sm font-medium text-neutral-700"
      >
        <span>Filter: {activeOption?.label}</span>
        <span className="text-xs px-2 py-0.5 bg-neutral-100 text-neutral-600 rounded-full">
          {counts[activeFilter]}
        </span>
        <ChevronDown 
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-neutral-200 rounded-lg shadow-lg z-10 py-1">
          {filterOptions.map((option) => {
            const isActive = activeFilter === option.key;
            const count = counts[option.key];
            
            return (
              <button
                key={option.key}
                onClick={() => handleFilterSelect(option.key)}
                className={`
                  w-full flex items-center justify-between px-3 py-2 text-sm hover:bg-neutral-50 transition-colors duration-150
                  ${isActive ? 'bg-neutral-100 text-neutral-900 font-medium' : 'text-neutral-700'}
                `}
              >
                <span>{option.label}</span>
                <span className={`
                  text-xs px-2 py-0.5 rounded-full
                  ${isActive 
                    ? 'bg-neutral-200 text-neutral-700' 
                    : 'bg-neutral-100 text-neutral-500'
                  }
                `}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}