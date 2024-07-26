"use client";
import React from 'react';
import { useTheme } from "next-themes";
import { Button } from '@mantine/core';

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className='bg-red-800 p-4 text-white'
    >
      Toggle Mode
    </Button>
  );
}

export default ThemeButton;
