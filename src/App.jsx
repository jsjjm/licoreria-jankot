import React, { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import axios from 'axios';

function App() {
  // Estado para almacenar todos los licores
  const [licors, setLicors] = useState([]);

  // Estado para almacenar licores filtrados por categoría
  const [filteredLicors, setFilteredLicors] = useState([]);

  // Estado para almacenar la categoría seleccionada
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Efecto de carga al montar el componente para obtener datos de la API
  //http://localhost/licoreria-jankot/api/mostrar_items.php
  useEffect(() => {
    axios.get('https://braviasystems.000webhostapp.com/apps/licoreria-jankot/api/mostrar_items.php')
      .then(response => {
        setLicors(response.data);
        setFilteredLicors(response.data);
      })
      .catch(error => {
        console.error('Error fetching data from API:', error);
      });
  }, []);

  // Maneja el clic en una categoría, filtra los licores y actualiza el estado
  const handleCategoryClick = (category) => {
    const filtered = licors.filter(licor => licor.categoria === category);
    setFilteredLicors(filtered);
    setSelectedCategory(category);
  };

  // Restablece el filtro y muestra todos los licores
  const resetFilter = () => {
    setFilteredLicors(licors);
    setSelectedCategory(null);
  };

  // Lista de categorías disponibles
  const categories = ['Todos', 'Whisky', 'Cerveza', 'Bebidas', 'Vino'];

  // Mapea los licores filtrados para crear componentes de tarjeta
  const licorsList = filteredLicors.map(licor => (
    <Card key={licor.id_item} item={licor} />
  ));

  return (
    <div className="App">
      {/* Título de la aplicación */}
      <h1>Licoreria Jankot</h1>

      {/* Barra de navegación con botones de categoría */}
      <nav>
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => (category === 'Todos' ? resetFilter() : handleCategoryClick(category))}
            className={selectedCategory === category ? 'active' : ''}
          >
            {category}
          </button>
        ))}
      </nav>

      {/* Contenedor para las tarjetas de licores */}
      <div className='container'>
        {licorsList}
      </div>
    </div>
  );
}

export default App;



