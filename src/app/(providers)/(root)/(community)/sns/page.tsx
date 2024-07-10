import React from 'react';
import RankItem from './_components/RankItem';
import PostItem from './_components/PostItem';
import Link from 'next/link';
import { FaPencil } from 'react-icons/fa6';

function page() {
  return (
    <div className="">
      <header className="mt-10">
        <h1 className="ml-10 text-lg font-semibold">랭킹</h1>
        <RankItem />
      </header>
      <main className="mt-16">
        <div className="mr-[70px] mt-2 flex justify-between text-xl">
          <h1 className="ml-10 text-lg font-semibold">자랑하기</h1>
          <Link href="/upload">
            <FaPencil />
          </Link>
        </div>
        <PostItem />
      </main>
    </div>
  );
}

export default page;
