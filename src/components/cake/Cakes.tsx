import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { cakeActions } from "../../features/cake/cakeSlice";

//js = in ts type any
const Cakes = () => {
  // useDispatch, useSelector
  const dispatch = useDispatch();
  const numOfCakes = useSelector<RootState, number>(
    (state) => state.cake.numberOfCakes
  );
  return (
    <div>
      <h2>Number of Cakes: {numOfCakes}</h2>
      <button onClick={() => dispatch(cakeActions.buyCake(2))}>Buy Cake</button>
    </div>
  );
};

export default Cakes;
