import css from "./SearchBox.module.css";
import { useSelector } from "react-redux";
import {
  changeFilter,
  selectNameFilter,
} from "../../redux/filters/filtersSlice";
import { useDispatch } from "react-redux";

export default function SearchBox() {
  const filters = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handle = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div>
      <p className={css.label}>Find contacts by name</p>
      <input
        type="text"
        value={filters}
        onChange={handle}
        className={css.input}
      />
    </div>
  );
}
