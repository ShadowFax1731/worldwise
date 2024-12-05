import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";

function CityList({ cities, loading }) {
  const msg = `Add your first city by clicking on a city on the map.`;
  if (loading) return <Spinner />;

  if (cities.length === 0) return <Message message={msg} />;

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
