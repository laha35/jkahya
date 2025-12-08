import Card from "@/components/Card";
import Title from "@/components/Title";

export default function Home() {
  return (
    <div className="w-full px-5">
      <Title title="Home" lore="JKAhya.com에 오신걸 환영합니다." />
      <Card>
        <div className="text-lg n1">
          입니다 나는 시간이 없는. 고등학생이므로. 따라서 합니다 나는 관리
          사이트 발로. 그러므로 종종 생깁니다. 문제 하지만 입니다 할수 없는 즉각
          대응 그러므로 죽습니다 서비스가. 입니다 하는 죄송.
        </div>
      </Card>
      <Card>
        <div className="text-lg n1">
          하단에 동아리 사이트 여러개가 첨부되어있으나, 코딩은 전부 제가 했으니
          저작권 걱정 마시고 들어가셔서 트래픽을 늘리므로써 제가 사이트에
          애드센스를 걸수 있도록 도와주시기 바립니다.
          <br /> -서버비 수호캠페인-
        </div>
      </Card>
      <Card>
        <div className="text-lg n1">쓸말이없음</div>
      </Card>
    </div>
  );
}
