import React, { useState } from 'react';

const AddProductForm = () => {
  const [product, setProduct] = useState({
    descripcion: '',
    precio: '',
    direccionImagen: '',
    rating: '',
    disponibilidad: '',
    marca: '',
    infOpcional: '',
    fechaDeLanzamiento: '',
    origen: '',
    color: '',
    dimensiones: '',
    peso: '',
    garantia: '',
    material: '',
    cuidadoDeProducto: '',
    direccionImagenArray: [],
    categoriaPrincipal: '',
    idPromociones: '',
    idSubcategoria: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Product data:', product);
   
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
      <div>
        <label className="block text-sm font-medium text-gray-700">Descripción</label>
        <textarea
          name="descripcion"
          value={product.descripcion}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Precio</label>
        <input
          type="number"
          name="precio"
          value={product.precio}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          step="0.01"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Dirección Imagen Principal</label>
        <input
          type="text"
          name="direccionImagen"
          value={product.direccionImagen}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          maxLength="255"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Rating</label>
        <input
          type="number"
          name="rating"
          value={product.rating}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          step="0.01"
          min="0"
          max="5"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Disponibilidad</label>
        <input
          type="text"
          name="disponibilidad"
          value={product.disponibilidad}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          maxLength="50"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Marca</label>
        <input
          type="text"
          name="marca"
          value={product.marca}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          maxLength="255"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Información Opcional</label>
        <textarea
          name="infOpcional"
          value={product.infOpcional}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Fecha de Lanzamiento</label>
        <input
          type="date"
          name="fechaDeLanzamiento"
          value={product.fechaDeLanzamiento}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
        />
        aqui debo cuadrar por que la fecha es la misma del momento que guarda el producto
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Origen</label>
        <input
          type="text"
          name="origen"
          value={product.origen}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          maxLength="50"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Color</label>
        <input
          type="text"
          name="color"
          value={product.color}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          maxLength="255"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Dimensiones</label>
        <textarea
          name="dimensiones"
          value={product.dimensiones}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Peso</label>
        <input
          type="text"
          name="peso"
          value={product.peso}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          maxLength="50"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Garantía</label>
        <input
          type="text"
          name="garantia"
          value={product.garantia}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          maxLength="50"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Material</label>
        <input
          type="text"
          name="material"
          value={product.material}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          maxLength="100"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Cuidado del Producto</label>
        <textarea
          name="cuidadoDeProducto"
          value={product.cuidadoDeProducto}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Imágenes Adicionales</label>
        <input
          type="text"
          name="direccionImagenArray"
          value={product.direccionImagenArray}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          placeholder="Separar por comas"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Categoría Principal</label>
        <input
          type="text"
          name="categoriaPrincipal"
          value={product.categoriaPrincipal}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          maxLength="50"
        />

        <select name="" id="">
//agregar producto
          <option value="Joyas">
            Joyas
          </option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">ID Promociones</label>
        <input
          type="number"
          name="idPromociones"
          value={product.idPromociones}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">ID Subcategoría</label>
        <input
          type="number"
          name="idSubcategoria"
          value={product.idSubcategoria}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <button type="submit" className="mt-4 w-full bg-blue-600 text-white p-2 rounded-md">
        Agregar Producto
      </button>
    </form>
  );
};

export default AddProductForm;
