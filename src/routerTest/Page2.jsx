import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export function Page2() {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [name, setName] = useState('');

  return (
    <div className="m-0 h-screen bg-gray-300 p-4">
      <h1 className="text-xl">Page2ページです</h1>
      <div className="my-8 flex w-6/12 flex-row justify-items-end">
        <label className="block">
          ID:
          <input
            type="text"
            placeholder="IDを入力してください"
            className="text-m placeholder-blueGray-300 ml-2 h-10 rounded border-0 px-2 text-gray-600 shadow outline-none focus:outline-none focus:ring"
            required
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
        </label>
        <label className="ml-8 block">
          名前:
          <input
            type="text"
            placeholder="名前を入力してください"
            className="text-m placeholder-blueGray-300 ml-2 h-10 rounded border-0 px-2 text-gray-600 shadow outline-none focus:outline-none focus:ring"
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>
      </div>
      <Link
        to={{ pathname: `/page2/${id}?name=${name}` }}
        className="text-slate-800 hover:text-slate-500"
      >
        パラメータ画面へ
      </Link>
      <br />
      <button
        onClick={() => {
          navigate('/');
        }}
        type="button"
        className="mt-8 rounded border-b-4 border-blue-700 bg-blue-500 py-2 px-4 font-bold text-white hover:border-blue-500 hover:bg-blue-400"
      >
        Homeに移動
      </button>
    </div>
  );
}
