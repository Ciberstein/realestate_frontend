import { AttachMoneySharp, PlaceOutlined } from '@mui/icons-material'
import NoData from '../../../shared/NoData'
import Modal from '../../../material/Modal';
import { useState } from 'react';
import Property from './Property';

const Results = ({ data = [] }) => {

  const [modal, setModal] = useState(false);
  const [property, setProperty] = useState({});

  if(data.length === 0) 
    return (
      <div className="flex justify-center size-full">
        <NoData />
      </div>
    );

  return (
    <div className="flex flex-col gap-4">
      <Property open={modal} setOpen={setModal} data={property} />
      <div className="bg-zinc-100 col-span-full p-4">
        <span className="text-lg font-medium">{data.length} {data.length === 1 ? 'Resultado' : 'Resultados'} </span>
      </div>
      <div className="size-full xl:max-w-6xl grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.map((item, index) => (
          <div
            key={index}
            onClick={() => { setProperty(item); setModal(true) }}
            className="bg-zinc-100 h-min p-4 flex flex-col gap-2 hover:brightness-90 duration-300 cursor-pointer"
          >
            <div className="aspect-video" style={{
              backgroundImage: `url(${item.image || 'img/property-example.jpg'})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'cover',
              backgroundSize: 'cover',
            }} />
            <h3 className="font-medium text-xl">{item.name}</h3>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1">
                <AttachMoneySharp className="text-orange-500" sx={{ fontSize: 18 }} />
                <h4 className="font-medium text-sm">{item.priceProperty}</h4>
              </div>
              <div className="flex items-center gap-1">
                <PlaceOutlined className="text-orange-500" sx={{ fontSize: 18 }} />
                <h4 className="font-medium text-sm">{item.addressProperty}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Results
