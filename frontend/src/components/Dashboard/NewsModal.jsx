import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button
} from '@chakra-ui/react'

/*
Popup modal component that displays more detailed important of news article
@param {boolean} props.isOpen - state indicating if modal is open 
@param {function} props.onClose - callback to handle closing of Modal
@param {Object} props.article - article object containing the title and detailed story
*/
function NewsModal({isOpen, onClose, article}) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{article.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody dangerouslySetInnerHTML={{ __html: article.story }}/>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default NewsModal