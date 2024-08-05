"use client";
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button"; // Adjust the import according to your project structure

type endtimeProps = {
    endTiming: Date,
}

const CountdownButton: React.FC<endtimeProps> = ({ endTiming }) => {
  const [timeLeft, setTimeLeft] = useState<number | null>(null);

  useEffect(() => {
    const endTime = new Date(endTiming).getTime();
    const currentTime = new Date().getTime();
    setTimeLeft(Math.max(0, endTime - currentTime));

    const intervalId = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        if (prevTimeLeft === null) return null;
        return Math.max(0, prevTimeLeft - 1000);
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [endTiming]);

  const formatTimeLeft = (milliseconds: number) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <div className="absolute bottom-6 left-8">
      <div className="px-1  bg-[#ffffff75] flex justify-center items-center w-36 rounded-sm text-[#000000] ">
        {timeLeft !== null ? formatTimeLeft(timeLeft) + " left" : 'Loading...'}
      </div>
    </div>
  );
};

export default CountdownButton;