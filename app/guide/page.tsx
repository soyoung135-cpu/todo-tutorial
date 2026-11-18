import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "사용법 | todo",
}

const STEPS = [
  {
    title: "할 일 추가",
    body: "입력창에 내용을 쓰고 Enter를 누릅니다. 새 항목은 전체 목록에 추가됩니다.",
  },
  {
    title: "완료 표시",
    body: "항목 왼쪽 체크박스를 누르면 완료로 바뀌고, 다시 누르면 진행중으로 돌아갑니다.",
  },
  {
    title: "내용 수정",
    body: "항목 글자를 더블클릭해 고친 뒤 Enter(또는 다른 곳 클릭)로 저장합니다. Esc는 취소입니다.",
  },
  {
    title: "삭제",
    body: "항목 오른쪽 휴지통 버튼으로 하나씩 지웁니다.",
  },
  {
    title: "필터로 보기",
    body: "전체 · 진행중 · 완료 탭으로 원하는 항목만 모아 봅니다.",
  },
  {
    title: "완료한 일 한 번에 지우기",
    body: "완료한 항목이 있으면 목록 아래에 '완료한 일 지우기' 버튼이 나타납니다.",
  },
]

export default function GuidePage() {
  return (
    <main className="mx-auto flex min-h-svh w-full max-w-md flex-col gap-6 p-6 pt-16">
      <h1 className="text-3xl font-bold tracking-tight">사용법</h1>
      <ol className="flex flex-col gap-4">
        {STEPS.map(({ title, body }, i) => (
          <li key={title} className="flex gap-3">
            <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
              {i + 1}
            </span>
            <div className="flex flex-col gap-1">
              <h2 className="text-sm font-semibold">{title}</h2>
              <p className="text-sm text-muted-foreground">{body}</p>
            </div>
          </li>
        ))}
      </ol>
      <p className="text-xs text-muted-foreground">
        할 일은 사용 중인 브라우저에만 저장되며, 다른 기기와는 공유되지 않습니다.
      </p>
      <Link href="/" className="text-sm underline underline-offset-4">
        할 일 목록으로 돌아가기
      </Link>
    </main>
  )
}
