import { Link } from "react-router-dom";
import { Button } from "../components/common/Button";

export function NotFoundPage() {
  return (
    <main className="page-shell page-shell--center">
      <section className="container empty-state">
        <p className="eyebrow">404</p>
        <h1>페이지를 찾을 수 없습니다.</h1>
        <p>요청하신 주소가 변경되었거나 아직 준비되지 않은 화면입니다.</p>
        <Button as={Link} to="/">
          홈으로 이동
        </Button>
      </section>
    </main>
  );
}
