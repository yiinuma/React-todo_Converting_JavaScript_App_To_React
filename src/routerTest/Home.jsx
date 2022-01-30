import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="mt-4 ml-4">
      <h1 className="mt-8 text-xl">Homeページです</h1>
      <p className="mt-8">↓ページ遷移のテスト</p>
      <Link to="/todo" className="text-blue-300 hover:text-blue-800">
        Todo APPへ移動します
      </Link>
      <br />
      <Link to="/Page1" className="text-blue-300 hover:text-blue-800">
        Page1へ移動します
      </Link>
      <br />
      <Link to="/Page2" className="text-blue-300 hover:text-blue-800">
        Page2へ移動します
      </Link>
    </div>
  );
}
