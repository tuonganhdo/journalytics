'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EditEntry from '@/components/EditEntry';
import { CreateEntry } from '@/utils/EntryUtils';
import { redirect, useRouter } from 'next/navigation';
import dayjs from 'dayjs';
import { IsLoggedIn } from '@/utils/UserUtils';

export default function Home() {
  const router = useRouter();

  let redirectRoute = '/';
  if (IsLoggedIn()) {
    const today = dayjs(new Date).format('YYYYMMDD');
    redirectRoute = '/entries/' + today;
  } else {
    redirectRoute = '/login'
  }

  redirect(redirectRoute);
  // useEffect(() => {
  //   router.replace(redirectRoute);
  // }, [router, redirectRoute]);

  return (
    <div className="w-full min-h-screen">
    </div>
  );
}
