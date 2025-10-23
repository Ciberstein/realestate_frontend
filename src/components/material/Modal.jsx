import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { CloseOutlined } from '@mui/icons-material'
import { Tooltip } from '@mui/material'

export default function Modal({
  children,
  open = false,
  setOpen,
  title = false,
  header = true,
  className= '',
  as: As = 'div',
  backdrop = true,
  screen = false, 
}) {

  return (
    <Dialog open={open} as="div" className="relative z-10 focus:outline-none" onClose={backdrop ? setOpen : () => null}>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 backdrop-blur-2xl">
          { screen ?
            <DialogPanel transition className={`duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0 ${className}`}>
              {children}
            </DialogPanel> :
            <DialogPanel as={"div"} transition
              className={`w-full max-w-md rounded-3xl backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0 ${className}`}
            >
              <div className="flex flex-col gap-6 dark:text-white">
                { header &&
                  <header className="flex justify-between items-center gap-4">
                    <DialogTitle as="h3" className="text-base/7 font-medium dark:text-white w-full">
                      {title}
                    </DialogTitle>
                    <Tooltip placement="top" title="Close">
                      <Button onClick={() => setOpen(false)} >
                        <CloseOutlined />
                      </Button>                      
                    </Tooltip>
                  </header>
                }
                <As className={className}>
                  {children}
                </As>
              </div>
            </DialogPanel>
          }
        </div>
      </div>
    </Dialog>
  )
}