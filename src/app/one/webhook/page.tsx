"use client";

import { useState } from "react";
import Title from "@/components/Title";
import Card from "@/components/Card";

export default function DiscordWebhookPage() {
  // 상태 관리: URL, 메시지, 전송 상태
  const [webhookUrl, setWebhookUrl] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSend = async () => {
    if (!webhookUrl.trim() || !message.trim()) {
      alert("웹훅 URL과 메시지를 모두 입력해주세요.");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: message,
          // 필요 시 여기에 username이나 avatar_url 등을 추가할 수 있습니다.
        }),
      });

      if (response.ok) {
        setStatus("success");
        setMessage(""); // 전송 성공 시 메시지 창 비우기
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        throw new Error("전송 실패");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <div className="">
      <div className="w-full px-3 max-w-5xl mx-auto">
        <Title title="Discord Webhook" lore="디스코드용 웹후크 전송기입니다." />

        <div className="mt-3 grid grid-cols-1 gap-8">
          {/* 입력 섹션 */}
          <Card>
            <div className="space-y-6">
              {/* Webhook URL 입력 */}
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">
                  Webhook URL
                </label>
                <input
                  type="text" // 보안을 위해 password 타입 권장 (내용 확인 필요 시 text로 변경 가능)
                  placeholder="https://discord.com/api/webhooks/..."
                  value={webhookUrl}
                  onChange={(e) => setWebhookUrl(e.target.value)}
                  className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-400 transition-all text-slate-700 placeholder:text-slate-300"
                />
              </div>

              {/* Message 입력 */}
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">
                  Message Content
                </label>
                <textarea
                  rows={5}
                  placeholder="보낼 메시지를 입력하세요..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-400 transition-all text-slate-700 placeholder:text-slate-300 resize-none"
                />
              </div>

              {/* 전송 버튼 및 상태 표시 */}
              <div className="pt-4 flex items-center justify-between gap-4">
                <div className="flex-1">
                  {status === "success" && (
                    <p className="text-emerald-500 font-bold flex items-center gap-2 animate-pulse">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      전송 완료!
                    </p>
                  )}
                  {status === "error" && (
                    <p className="text-rose-500 font-bold flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                        />
                      </svg>
                      전송 실패. URL을 확인하세요.
                    </p>
                  )}
                </div>

                <button
                  onClick={handleSend}
                  disabled={status === "loading"}
                  className={`
                    px-10 py-4 rounded-2xl font-bold text-white shadow-2xl drop-shadow-2xl transition-all active:scale-95 min-w-[180px]
                    ${
                      status === "loading"
                        ? "bg-slate-400 cursor-not-allowed"
                        : "bg-rose-400 hover:bg-rose-500 shadow-rose-100"
                    }
                  `}
                >
                  {status === "loading" ? "전송 중..." : "웹훅 전송"}
                </button>
              </div>
            </div>
          </Card>

          {/* 안내 사항 섹션
          <section className="bg-slate-100 rounded-3xl p-6 border border-slate-200">
            <h4 className="text-slate-800 font-bold mb-2 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 text-rose-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                />
              </svg>
              Discord Webhook이란?
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              디스코드 채널 설정에서 생성한 웹훅 URL을 통해 외부 메시지를 채널로
              보낼 수 있는 기능입니다. 메시지 전송 시 서버 이름, 봇 이름 등을
              커스텀하여 모니터링이나 알림용으로 사용할 수 있습니다.
            </p>
          </section> */}
        </div>
      </div>
    </div>
  );
}
