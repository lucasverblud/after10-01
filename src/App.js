import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

const ItemList = [
	{ nombre: 'Home', enlace: '/' },
	{ nombre: 'Nosotros', enlace: '/nosotros' },
	{ nombre: 'Contacto', enlace: '/contacto' },
]

function App() {
	return (
		<div className='App'>
      <NavBar data={ItemList} />
      <ItemListContainer greeting="Hola Coder"/>
		</div>
	)
}

export default App
