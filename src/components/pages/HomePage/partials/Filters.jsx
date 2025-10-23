import React from 'react'
import { Input } from '../../../material/Input'
import { useForm } from 'react-hook-form';
import { AttachMoneyOutlined, FormatColorTextOutlined, PlaceOutlined } from '@mui/icons-material';
import { Button } from '../../../material/Button';
import api from '../../../../api/axios';
import appError from '../../../../utils/appError';

const Filters = ({ setData }) => {

  const { register, handleSubmit, formState: { errors }} = useForm();

  const submit = async (data) => {

    const url = `api/properties`;

    await api.get(url, { params: data })
      .then(res => setData(res.data))
      .catch(err => appError(err))
  };

  return (
    <div className="bg-zinc-100 w-full">
      <nav className="p-4 w-full sm:max-w-2xl mx-auto">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(submit)}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              id="name"
              name="name"
              type="text"
              icon={<FormatColorTextOutlined />}
              placeholder="Nombre"
              register={{
                function: register,
                errors: {
                  function: errors,
                },
              }}
            />
            <Input
              id="address"
              name="address"
              type="text"
              icon={<PlaceOutlined />}
              placeholder="Dirección"
              register={{
                function: register,
                errors: {
                  function: errors,
                },
              }}
            />
            <Input
              id="minPrice"
              name="minPrice"
              type="number"
              icon={<AttachMoneyOutlined />}
              placeholder="Precio mínimo"
              register={{
                function: register,
                errors: {
                  function: errors,
                  rules: {
                    min: {
                      value: 1,
                      message: 'El valor debe ser de mínimo 1',
                    },
                  },
                },
              }}
            />
            <Input
              id="maxPrice"
              name="maxPrice"
              type="number"
              icon={<AttachMoneyOutlined />}
              placeholder="Precio máximo"
              register={{
                function: register,
                errors: {
                  function: errors,
                  rules: {
                    min: {
                      value: 1,
                      message: 'El valor debe ser de mínimo 1',
                    },
                  },
                },
              }}
            />        
          </div>
          <Button>Buscar</Button>
        </form>
      </nav>      
    </div>

  )
}

export default Filters
