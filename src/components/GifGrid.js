import GifGridItem from './GifGridItem'
import { useFetchGifs } from './hooks/useFetchGifs';

const GifGrid = ({ category }) => {

  const {data:images, loading} = useFetchGifs(category);
  
  return (
    <div>
      <h3>{category}</h3>
      { loading && <div class="lds-dual-ring"></div>}
      <div className="containerCat">
        {images.map(item => <GifGridItem key={item.id} img={item}/> )}
      </div>
    </div>
  )
}

export default GifGrid;