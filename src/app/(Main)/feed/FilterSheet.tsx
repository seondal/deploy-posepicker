'use client';

import { useEffect, useState } from 'react';

import { FilterTagsResponse, useFilterTagQuery } from '@/apis';
import { BottomDiv, PrimaryButton } from '@/components/Button';
import BottomSheet from '@/components/Modal/BottomSheet';
import { SelectionBasic, SelectionTagList } from '@/components/Selection';
import { frameCountList, peopleCountList } from '@/constants/data';
import useBottomSheet from '@/hooks/useBottomSheet';
import useFilterState from '@/hooks/useFilterState';

export default function FilterSheet() {
  const { data: tagListData } = useFilterTagQuery();

  const { filterState, updateFilterState } = useFilterState();
  const { isBottomSheetOpen, closeBottomSheet } = useBottomSheet();

  const [countState, setCountState] = useState<number>(0);
  const [frameState, setFrameState] = useState<number>(0);
  const [tagState, setTagState] = useState<string[]>([]);

  function resetFilter() {
    setCountState(0);
    setFrameState(0);
    setTagState([]);
  }

  function decideFilter() {
    updateFilterState({ peopleCount: countState, frameCount: frameState, tags: tagState });
    closeBottomSheet();
  }

  useEffect(() => {
    setCountState(filterState.peopleCount);
    setFrameState(filterState.frameCount);
    setTagState(filterState.tags);
  }, [isBottomSheetOpen, filterState]);

  function refineTagListData(tagListData: FilterTagsResponse) {
    const tagList: string[] = [];
    for (const tag of tagListData.poseTagAttributes) {
      tagList.push(tag.attribute);
    }
    return tagList;
  }

  return (
    <BottomSheet>
      <div className="flex flex-col gap-20 px-20 pb-32">
        <section>
          <div id="subtitle-2" className="mb-8 text-secondary">
            인원 수
          </div>
          <SelectionBasic data={peopleCountList} state={countState} setState={setCountState} />
        </section>
        <section>
          <div id="subtitle-2" className="mb-8 text-secondary">
            프레임 수
          </div>
          <SelectionBasic data={frameCountList} state={frameState} setState={setFrameState} />
        </section>
        <section>
          <div id="subtitle-2" className="mb-8 text-secondary">
            태그
          </div>
          {tagListData && (
            <SelectionTagList
              data={refineTagListData(tagListData)}
              state={tagState}
              setState={setTagState}
            />
          )}
        </section>
      </div>
      <BottomDiv>
        <PrimaryButton type="outline" icon="restart" text="필터 초기화" onClick={resetFilter} />
        <PrimaryButton type="fill" text="포즈보기" onClick={decideFilter} />
      </BottomDiv>
    </BottomSheet>
  );
}
