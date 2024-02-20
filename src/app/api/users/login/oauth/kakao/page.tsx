'use client';

import { useEffect } from 'react';

import { getRegister } from '@/apis';

interface PageProps {
  searchParams: {
    code: string;
  };
}

export default function Page({ searchParams }: PageProps) {
  useEffect(() => {
    console.log(searchParams.code);
    getRegister(searchParams.code);
  });

  return <>Loading...</>;
}
