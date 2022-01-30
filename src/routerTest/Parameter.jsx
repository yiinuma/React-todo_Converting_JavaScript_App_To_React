import { useLocation, useNavigate, useParams } from 'react-router-dom';

export function Parameter() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);

  return (
    <div className="m-0 h-screen bg-gray-300 p-4">
      <h1 className="text-xl">Parameterページです</h1>
      <p className="mt-8">IDは、{id}です</p>
      <p>名前は、{query.get('name')}です</p>
      <br />
      <button
        onClick={() => {
          navigate('/page2');
        }}
        type="button"
        className="mt-8 rounded border-b-4 border-blue-700 bg-blue-500 py-2 px-4 font-bold text-white hover:border-blue-500 hover:bg-blue-400"
      >
        Page2に移動
      </button>
    </div>
  );
}
