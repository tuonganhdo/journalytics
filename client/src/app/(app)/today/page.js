import { redirect } from 'next/navigation';
import dayjs from 'dayjs';

export default function Today() {
    const today = dayjs(new Date).format('YYYYMMDD');
    redirect('/entries/' + today);
}