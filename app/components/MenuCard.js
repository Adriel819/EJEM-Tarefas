export default function MenuCard({ nome, descricao, preco }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-2 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-bold text-stone-800">{nome}</h3>
        <span className="text-amber-700 font-semibold text-sm whitespace-nowrap ml-4">
          {preco}
        </span>
      </div>
      <p className="text-stone-500 text-sm">{descricao}</p>
    </div>
  );
}