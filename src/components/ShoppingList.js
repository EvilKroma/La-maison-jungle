import { plantList } from '../datas/plantList'
import '../styles/ShoppingList.css'

function ShoppingList() {
	return (
		<div>
			<ul>
				{plantList.map((plant) => (
					<li key={plant.id}>{plant.category}</li>
				))}
			</ul>
			<ul className='lmj-plant-list'>
				{plantList.map((plant) => (
					<li key={plant.id} className='lmj-plant-item'>
						{plant.name}
						{plant.onSales && <div className='lmj-sales'>Soldes</div>}
					</li>
				))}
			</ul>
		</div>
	);
}

export default ShoppingList;
