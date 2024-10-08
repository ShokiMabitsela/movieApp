import { useNavigate } from "react-router-dom";
import movieStore from "./moviesStorage.json";

const chunkArray = (array, size) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

function LatestSeries() {
  const navigate = useNavigate();

  const images = movieStore.series.all.titles.map((series) => ({
    src: series.src, 
    id: series.id,  
    title: series.title 
  }));

  const rows = chunkArray(images, 4);

  const handleImageClick = (seriesId) => {
    navigate(`/ViewSeries/${seriesId}`);
  };

  return (
    <div className="flex flex-col items-center py-32">
      <table className="border-collapse">
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={`row-${rowIndex}`}>
              {row.map((series) => (
                <td key={`cell-${rowIndex}-${series.id}`} className="p-2">
                  <img
                    src={series.src}
                    alt={`Series ${series.title}`}
                    className="w-60 h-96 object-cover cursor-pointer"
                    onClick={() => handleImageClick(series.id)} 
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LatestSeries;
