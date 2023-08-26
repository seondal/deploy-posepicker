'use client';
import Image from 'next/image';
import Link from 'next/link';

import IconButton from '@/components/Button/IconButton';
import { Header } from '@/components/Header';
import { Popup } from '@/components/Modal';
import { useOverlay } from '@/components/Overlay/useOverlay';

export default function DetailHeader() {
  const { open } = useOverlay();
  return (
    <Header
      leftNode={
        <Link href="/feed">
          <IconButton size="large">
            <Image src="/icons/close.svg" width={24} height={24} alt="back" />
          </IconButton>
        </Link>
      }
      rightNode={
        <IconButton
          size="large"
          onClick={() =>
            open(({ exit }) => (
              <Popup onClick={exit} className="cursor-pointer rounded-8" onCloseOutside={exit}>
                <p>해당 기능은 아직 준비중이에요!</p>
                <p> 업데이트를 기대해 주세요.</p>
              </Popup>
            ))
          }
        >
          <Image src="/icons/bookmark.svg" width={24} height={24} alt="bookmark" />
        </IconButton>
      }
      className="px-4"
    />
  );
}
