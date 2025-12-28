import Card from "@/components/Card";
import OneNavi from "@/components/OneNavi";
import Title from "@/components/Title";

export default function Home() {
  return (
    <div className="w-full px-3 max-w-5xl mx-auto">
      <Title title="SWI 24 EQK" lore="실시간 지진 관측방송" />
      <Card>
        <div className="text-lg n1 text-center">
          <div className="mb-5 text-xl n2 bg-red-600 text-gray-50 px-3 py-1 rounded-2xl drop-shadow-2xl shadow-black">
            중요한 안내
          </div>
          <div className="">
            SWi24 한·일 지진관측 방송은 현재 송출자 사정으로 인한 무기한
            중단중입니다.
            <br />
            조속한 재개를 위해 최선을 다하겠습니다.
            <br />
            2024.01.01. ~ 2026.01.??.
          </div>
        </div>
      </Card>
      <Card>
        <div className="text-lg n1 text-center">
          <div className="mb-5 text-xl n2 bg-red-600 text-gray-50 px-3 py-1 rounded-2xl drop-shadow-2xl shadow-black">
            재난방송에 대한 면책
          </div>
          <div className="">
            SWi24는 KBS, NHK, KMA, JMA와 무관합니다.
            <br />
            SWi24는 유튜브 송출 특성상 지연이 발생하며, 간혹 부정확한 정보가
            전달될 수 있습니다. 재난 상황에선 무엇보다 정확한 정보의 습득과
            침착의 유지가 중요합니다. 본 서비스를 통해 취득하신 정보는 반드시
            검증하여 주시고, KBS, NHK등 신뢰 가능한 재난방송 주체의 정보를
            우선적으로 참고하여주십시오.
          </div>
        </div>
      </Card>
      <Card>
        <div className="text-lg n1 text-center">
          <div className="mb-5 text-xl n2 bg-rose-400 text-gray-50 px-3 py-1 rounded-2xl drop-shadow-2xl shadow-black">
            사설 재난방송과 정보공유에 대한 고찰
          </div>
          <div className="">
            재난방송은 중요합니다.
            <br />
            그러나 공적인 주체의 재난방송은 국외에서의 정보 습득이나, 양방향
            정보 공유, 고급 정보 습득에 한계가 있습니다.
            <br />
            SWi24는 이러한 한계를 보완하기 위하여 2022년 출범한 재난방송
            팀입니다.
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
