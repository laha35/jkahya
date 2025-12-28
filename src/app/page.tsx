import Card from "@/components/Card";
import Title from "@/components/Title";

export default function Home() {
  return (
    <div className="w-full px-3">
      <Title title="Home" lore="JKAhya.com에 오신걸 환영합니다." />
      <Card>
        <div className="text-lg n1 text-center">
          <div className="mb-5 text-xl n2 bg-red-600 text-gray-50 px-3 py-1 rounded-2xl drop-shadow-2xl shadow-black">
            중요한 안내
          </div>
          <div className="">
            2025년 1월 1일부터 모든 서비스를 점차적으로 JKAhya One으로
            이관합니다.
          </div>
        </div>
      </Card>
      <Card>
        <a href="./one" className="text-2xl n3">
          JKAhya One으로 이동(β)
        </a>
      </Card>
      <Card>
        <div className="text-lg n1 text-center">
          <div className="mb-5 text-xl n2 bg-rose-400 text-gray-50 px-3 py-1 rounded-2xl drop-shadow-2xl shadow-black">
            특설 페이지
          </div>
          <a href="../one/docs/1210">
            <div className="">향후의 서비스 운영 계획</div>
          </a>
        </div>
      </Card>
    </div>
  );
}
