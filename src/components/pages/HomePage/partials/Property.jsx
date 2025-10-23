import Modal from '../../../material/Modal'
import { AttachMoneySharp, CloseOutlined, PlaceOutlined } from '@mui/icons-material';

const Property = ({ open, setOpen, data = {} }) => {

  return (
    <Modal
      screen
      open={open}
      setOpen={setOpen}
    >
      <div className="w-sm md:w-3xl flex flex-col gap-4">
        <div className="flex justify-between items-center gap-4">
          <h3 className="font-medium text-2xl">{data.name}</h3>
          <button onClick={() => setOpen(false)} className="cursor-pointer">
            <CloseOutlined />
          </button>
        </div>
        <div className="aspect-video w-full" style={{
          backgroundImage: `url(${data.image || 'img/property-example.jpg' })`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'cover',
          backgroundSize: 'cover',
        }} />
        <div className="flex flex-col gap-1 bg-zinc-100 p-4">
          <div className="flex items-center gap-1">
            <AttachMoneySharp className="text-orange-500" sx={{ fontSize: 25 }} />
            <h4 className="font-medium text-xl">{data.priceProperty}</h4>
          </div>
          <div className="flex items-center gap-1">
            <PlaceOutlined className="text-orange-500" sx={{ fontSize: 25 }} />
            <h4 className="font-medium text-xl">{data.addressProperty}</h4>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default Property
