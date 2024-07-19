import CloseIcon from '@/shared/components/Icon/CloseIcon';
import { container, header, wrapper } from './index.css';
import { Dispatch, SetStateAction } from 'react';

type TProps = {
  setIsDrawerOpen: Dispatch<SetStateAction<boolean>>;
};

function DrawerMenu({ setIsDrawerOpen }: TProps) {
  const handleClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className={container}>
      <div className={wrapper}>
        <div className={header}>
          <h1>DrawerMenu</h1>
          <CloseIcon onClick={handleClose} />
        </div>
      </div>
    </div>
  );
}
export default DrawerMenu;
