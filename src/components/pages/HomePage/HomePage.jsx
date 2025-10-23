import { useDispatch, useSelector } from 'react-redux'
import UserLayout from '../../layouts/UserLayout'
import Filters from './partials/Filters'
import { useEffect, useState } from 'react';
import { propertiesThunk } from '../../../store/slices/properties.slice';
import Results from './partials/Results';

const HomePage = () => {

  const dispatch = useDispatch();
  const [data, setData] = useState();
  const properties = useSelector(state => state.properties);

  useEffect(() => {
    dispatch(propertiesThunk());
  }, []);

  useEffect(() => {
    setData(properties);
  }, [properties]);

  return (
    <UserLayout>
      <div className="h-full flex flex-col gap-4">
        <Filters setData={setData} />
        <Results data={data} />
      </div>
    </UserLayout>
  )
}

export default HomePage
