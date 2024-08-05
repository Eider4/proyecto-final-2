export default function CarProducos({ TITULO, PRECIO, IMAGEN }) {
  const precioFinal = PRECIO - (PRECIO * 10) / 100;

  return (
    <div className="transition-transform transform hover:scale-105 duration-300 ease-in-out p-4 bg-white rounded-lg shadow-lg max-w-xs mx-auto w-72 h-[400px] flex flex-col">
      <div className="h-60 w-full flex items-center justify-center mb-4 overflow-hidden">
        <img src={IMAGEN} alt={TITULO} className="object-contain w-full h-full" />
      </div>
      <h2 className="text-xl font-bold text-gray-800 mb-1 truncate">{TITULO}</h2>
      <p className="text-md text-gray-500 mb-1 line-through">${PRECIO}</p>
      <div className="flex justify-between items-center">
        <p className="text-lg font-bold text-green-500">
          ${precioFinal.toFixed(2)}
        </p>
        <div className="bg-sky-600  text-white text-xs font-bold py-1 px-2 rounded">
          {10}% OFF
        </div>
      </div>
    </div>
  );
}
