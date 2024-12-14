import { plantList } from '../datas/plantList'

function ShoppingList() {
	return (
		<div>
			<ul>
				{plantList.map((plant) => (
					<li key={plant.id}><strong>{plant.category}</strong> {plant.name} {plant.isBestSale && <span>🔥</span>}</li> // Seulement si la condition est respectée
				))}
			</ul>
		</div>
	);
}

export default ShoppingList;
