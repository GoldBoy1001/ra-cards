import Card from './components/Card';
import CardImage from './components/CardImage';
import './App.css'

function App() {

	return (
		<>
			<div className='container'>
				<Card
					title="Card title"
					text="Some quick example text to build on the card title and make up the bulk of the card's content."
					btnName="Go somewhere"
				>
					<CardImage
						src="https://tolkunov.com/uploads/thumbs/portfolio/204x204_e837bba2f69c93e0fe04909f735890a1.webp"
						alt="Image cap"
					/>
				</Card>
				<Card
					title="Special title treatment"
					text="With supporting text below as a natural lead-in to additional content."
					btnName="Go home"
				/>
			</div>
		</>
	)
}

export default App
