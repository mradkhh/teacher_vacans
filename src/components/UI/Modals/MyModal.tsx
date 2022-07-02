import { FC } from 'react'
import cl from './styles/MyModal.module.css'

type MyModalProps = {
 children: JSX.Element | JSX.Element[],
 visible: boolean,
 setVisible: (arg: boolean) => void
}

const MyModal: FC<MyModalProps> = ({children, visible, setVisible}) => {

  const rootClass = [cl.Root]
  if (visible) {
    rootClass.push(cl.active)
  }
 return (
  <div className={rootClass.join(' ')} onClick={() => setVisible(false)}>
    <div className={cl.Content} onClick={(e) => e.stopPropagation()}>
        {children}
    </div>
  </div>
 )
}



export default MyModal