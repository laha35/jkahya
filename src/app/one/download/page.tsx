import DownloadCard from "@/components/DownloadCard";

export default function DownloadPage() {
  return (
    <div className="w-full px-3 max-w-5xl mx-auto">
      <DownloadCard
        title="디스코드 웹훅 전송기"
        location="GitHub"
        downloadUrl="https://github.com/laha35/DiscordWebhookSender/releases/tag/1.2"
      >
        Python을 통해 디스코드 웹훅으로 메세지를 전송하는 간단한 프로그램입니다.
      </DownloadCard>
    </div>
  );
}
