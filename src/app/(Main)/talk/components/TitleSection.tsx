'use client';
import { useEffect, useState } from 'react';
import { Tooltip } from 'react-tooltip';

import { Icon } from '@/components/Button/Icon';
import { Spacing } from '@/components/Spacing';
import { ICON } from '@/constants/icon';

export default function TitleSection() {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  useEffect(() => {
    if (localStorage.getItem('tooltipIsOpen') === 'false') setIsOpen(false);
  }, []);

  return (
    <section className="flex flex-col items-center">
      <div className="flex items-center">
        <h3 className="text-main-violet">뽑은 제시어</h3>
        <a
          data-tooltip-id="my-tooltip"
          data-tooltip-place="top"
          style={{ cursor: 'pointer' }}
          onClick={() => {
            if (isOpen) {
              localStorage.setItem('tooltipIsOpen', 'false');
              setIsOpen(false);
            } else {
              localStorage.setItem('tooltipIsOpen', 'true');
              setIsOpen(true);
            }
          }}
        >
          <Icon icon={ICON.info} />
        </a>
      </div>
      <Tooltip
        id="my-tooltip"
        style={{ fontSize: '1rem', fontWeight: 400 }}
        closeOnEsc
        openOnClick
        isOpen={isOpen}
        className="z-tooltip"
        render={() => (
          <div
            className="flex cursor-pointer"
            onClick={() => {
              localStorage.setItem('tooltipIsOpen', 'false');
              setIsOpen(false);
            }}
          >
            <div>
              <p>{`일명 <포즈로 말해요> 챌린지!`}</p>
              <p>제시어에 맞춰 포즈를 취해보세요.</p>
            </div>
            <Spacing size={8} direction="horizontal" />
            <Icon size={20} icon="close_white" />
          </div>
        )}
        clickable
      />
      <Spacing size={8} />
    </section>
  );
}
