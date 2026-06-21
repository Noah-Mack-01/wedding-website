'use client';

import { useState, useEffect } from 'react';

// Midnight on the wedding day — Playa del Carmen is UTC-5 (Quintana Roo, no DST)
const TARGET = new Date('2027-03-13T00:00:00-05:00');

interface Props {
  labels: { days: string; hours: string; minutes: string; seconds: string };
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calc(): TimeLeft | null {
  const diff = TARGET.getTime() - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000) / 60_000),
    seconds: Math.floor((diff % 60_000) / 1_000),
  };
}

export default function CountdownTimer({ labels }: Props) {
  // Start null to avoid hydration mismatch — client fills it in on first effect
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTimeLeft(calc());
    const id = setInterval(() => setTimeLeft(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!timeLeft) return null;

  const units = [
    { value: timeLeft.days, label: labels.days },
    { value: timeLeft.hours, label: labels.hours },
    { value: timeLeft.minutes, label: labels.minutes },
    { value: timeLeft.seconds, label: labels.seconds },
  ];

  return (
    <div className="mt-2 flex justify-center gap-6">
      {units.map(({ value, label }) => (
        <div key={label} className="flex flex-col items-center">
          <span className="text-2xl font-light tabular-nums text-vibrant-coral">
            {String(value).padStart(2, '0')}
          </span>
          <span className="text-xs uppercase tracking-widest text-foreground/50">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
