import Modal, {Styles} from 'react-modal';
import { FC } from 'react';
import { ImageModalProps } from '../../types'

const customStyles: Styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(65, 65, 65, 0.95)'
  },
  content: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    right: '20px',
    bottom: '20px',
    outline: 'none',
    backgroundColor: 'rgba(85, 85, 85, 0.75)',
    overflow: 'hidden', 
    maxWidth: '100%',
    maxHeight: '100%'
  }
  };

  Modal.setAppElement('#root');

export const ImageModal: FC<ImageModalProps> = ({onClose, state, img}) => {
    return(
         <Modal
         isOpen={state}
         onRequestClose={onClose}
         style={customStyles}>
          <button onClick={onClose}>Close</button>
          {img && (
                <img src={img.modalUrl} alt={img.alt_description} />
            )}

         </Modal>
    )
}



