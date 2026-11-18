# Todo Tutorial

[Claude Code Playbook](https://docs.claude-hunt.com) 강의에서 작은 할 일 앱을 직접 만들어 보며 Claude Code 쓰는 법을 배우는 연습용 저장소입니다.

## 관련 링크

- 강의 본문: https://docs.claude-hunt.com
- 수강생 결과물 공유: https://claude-hunt.com

## 기술 스택

- Next.js 16 (App Router, Turbopack)
- React 19
- Tailwind CSS v4
- shadcn/ui (radix-maia 스타일, taupe 베이스)
- TypeScript / ESLint / Prettier
- 패키지 매니저: bun 1.3.6

## 시작하기

### 준비물

- [Node.js](https://nodejs.org) 20.9 이상 (Next.js 16 요구 사항)
- [bun](https://bun.sh) (1.3.6 이상에서 확인)
- Git

### 설치와 실행

```bash
git clone https://github.com/soyoung135-cpu/todo-tutorial.git
cd todo-tutorial
bun install
bun dev
```

터미널에 `Ready` 와 함께 표시되는 `Local:` 주소를 브라우저에서 엽니다. 기본은 [http://localhost:3000](http://localhost:3000) 입니다. 3000 포트를 이미 다른 프로그램이 쓰고 있으면 Next.js가 3001, 3002처럼 비어 있는 포트로 자동으로 바꾸니, 반드시 터미널에 찍힌 주소를 확인하세요. 서버는 `Ctrl + C` 로 끕니다.

### 자주 쓰는 스크립트

```bash
bun run build      # 프로덕션 빌드
bun run start      # 빌드 결과 실행 (먼저 bun run build 가 필요)
bun run lint       # ESLint
bun run typecheck  # tsc --noEmit
bun run test       # Vitest 테스트 실행
bun run format     # Prettier 포맷팅 (파일을 직접 수정함)
```

`bun run start` 는 `bun run build` 를 먼저 실행해야 하고, 포트를 바꾸려면 `PORT=3001 bun run start` 처럼 실행합니다. `bun run format` 은 `.ts`, `.tsx` 파일을 직접 고칩니다. Windows에서 Git의 줄바꿈 자동 변환(`autocrlf`)을 쓰면 내용은 그대로인데 많은 파일이 수정된 것으로 보일 수 있으니, 커밋 전에 `git diff` 로 확인하세요.

## 레슨별 시작 브랜치

레슨마다 시작 시점의 코드를 `lesson/<레슨 이름>` 브랜치로 제공합니다. 레슨 본문이 안내하는 브랜치로 바꾼 뒤 따라가세요.

```shell
git checkout lesson/claude-md
```

## 컴포넌트 추가

shadcn/ui 컴포넌트는 다음과 같이 추가합니다.

```bash
bunx --bun shadcn@latest add button
```

`components/ui` 디렉토리에 컴포넌트가 추가됩니다.

## 컴포넌트 사용

```tsx
import { Button } from "@/components/ui/button";
```
