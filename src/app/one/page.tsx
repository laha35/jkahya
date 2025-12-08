import Card from "@/components/Card";
import OneNavi from "@/components/OneNavi";

export default function Home() {
  return (
    <div className="w-full px-3">
      <OneNavi />
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
      </Card>
      <Card>
        <div className="text-center text-lg n2">
          모바일에 최적화된 사이트입니다.
        </div>
      </Card>
      <Card>
        <div className="text-center text-lg n2">
          웹표준과 시멘틱웹을 따르고 싶습니다.
          <br />
          Copyright © laha35. All rights reserved.
          <br />
          From TinyFloor 조합
        </div>
      </Card>
    </div>
  );
}
