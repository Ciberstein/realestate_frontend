import { SearchOffOutlined } from '@mui/icons-material'

const NoData = ({
  message = 'No se encontraron resultados',
  icon = <SearchOffOutlined sx={{ fontSize: 60 }} />,
  className = '',
}) => {
  return (
    <div className={`size-full flex flex-col gap-4 justify-center items-center ${className}`}>
      {icon}
      <span className="text-3xl text-center">{message}</span>
    </div>
  )
}

export default NoData
