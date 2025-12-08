import Card from "@/components/Card";
import OneNavi from "@/components/OneNavi";

export default function Home() {
  return (
    <div className="w-full px-3">
      <OneNavi />
      <Card>
        <div className="text-lg n1 text-center">
          <div className="mb-5 text-xl n2 bg-rose-400 text-gray-50 px-3 py-1 rounded-2xl drop-shadow-2xl shadow-black">
            앞으로의 서비스 계획
          </div>
          <div className="">
            여러 서브 도메인으로 흩어진 서비스를 One 서비스 산하로 통합하고,
            지속적 서비스의 기반을 마련할 예정입니다.
          </div>
        </div>
      </Card>
      <Card>
        <div className="text-center text-lg n2">
          모바일에 최적화된 사이트입니다.
        </div>
      </Card>
    </div>
  );
}
