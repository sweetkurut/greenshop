import { useDispatch, useSelector } from "react-redux";
import styles from "./cards.module.sass";
import { useEffect } from "react";
import { getAllPlants } from "../../../../store/slices/plantsSlice";
import Loaders from "../../../../UI/Loaders/loaders";

const Cards = () => {
  const dispatch = useDispatch();
  const { plant, isLoading } = useSelector((state) => state.plants);

  useEffect(() => {
    dispatch(getAllPlants());
  }, [dispatch]);

  console.log(plant);

  return (
    <div className={styles.wrapper}>
      {isLoading && <Loaders />}

      <div className={styles.container}>
        <div className={styles.cards}>
          {plant && plant.length > 0 ? (
            plant.map((item) => (
              <div className={styles.card} key={item.id}>
                <h3>{item.title}</h3>
              </div>
            ))
          ) : (
            <h2>По вашему запросу ничего не найдено :( </h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cards;
