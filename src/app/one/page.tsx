"use client";

import Card from "@/components/Card";
import { useState } from "react";
import Modal from "@/components/Modal";
import { motion } from "framer-motion";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="w-full px-3 max-w-5xl mx-auto">
      <Card>
        <div className="text-lg n1 text-center">
          <div className="mb-5 text-xl n2 bg-rose-400 text-gray-50 px-3 py-1 rounded-2xl drop-shadow-2xl shadow-black">
            공지사항
          </div>
          <div className="bg-slate-300 p-2 rounded-2xl drop-shadow-2xl shadow-black">
            <h1 className="text-xl n3">One 서비스 출범</h1>
            <p className="text-lg n2">
              2025년 12월부터 동아리 및 학교등 프로젝트를 제외한 모든 서비스를
              JKAhya One 서비스 산하로 이관하여 통합 서비스를 개시합니다.
              <br />
              기존의 도메인은 전부 One 서비스로 리다이렉트 됩니다.
            </p>
          </div>
          <div className="mt-5 bg-slate-300 p-2 rounded-2xl drop-shadow-2xl shadow-black">
            <h1 className="text-xl n3">One SWi24 송출 재개</h1>
            <p className="text-lg n2">
              2026년 1월부터 JKAhya One SWi24 지진관측 방송이 송출 재개됩니다.
              <br />
              자세한 내용은 추후 공지드리겠습니다.
            </p>
          </div>
        </div>
      </Card>
      <Card>
        <div className="text-2xl n3 text-center">
          하나의 사이트, 모든 서비스
        </div>
        <h1 className="text-lg n2 text-center">
          JKAhya One 서비스를 통해, 모든 서비스를 한곳에서 이용하실 수 있습니다.
        </h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="block mx-auto mt-10 px-6 py-3 bg-rose-400 text-white font-bold rounded-2xl shadow-2xl hover:bg-rose-500 transition-all"
        >
          패치노트
        </button>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="패치노트"
          footer={
            <>
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-6 py-2 bg-rose-400 text-white font-bold rounded-xl shadow-sm"
              >
                확인
              </button>
            </>
          }
        >
          <p className="n2">- 2025-12-28: One 서비스 출범에 따른 사이트 변경</p>
        </Modal>
      </Card>
    </div>
  );
}
