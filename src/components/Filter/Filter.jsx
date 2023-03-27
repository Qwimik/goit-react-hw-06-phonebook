import {
  FilterLabel,
  FilterSpan,
  FilterInput,
} from 'components/Filter/Filter.styled';
import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <FilterLabel htmlFor="filter">
        <FilterSpan>Find contacts by name</FilterSpan>
        <FilterInput
          type="text"
          name="filter"
          onChange={e => dispatch(filterContact(e.target.value))}
          autoComplete="off"
        />
      </FilterLabel>
    </div>
  );
};
