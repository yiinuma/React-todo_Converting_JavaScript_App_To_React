import { Link } from 'react-router-dom';

export function Page404() {
  return (
    <div>
      <h1>ページが見つかりません</h1>
      <Link to="/">TOPに戻る</Link>
    </div>
  );
}
