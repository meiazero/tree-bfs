import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/modal'
import {Button} from '@chakra-ui/button'
import { FormControl, FormLabel, Input } from '@chakra-ui/react'
import React, { useState } from 'react'

type Props = {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (txt: string) => void;
}

const NodeModal: React.FC<Props> = ({isOpen, onClose, onSubmit}) => {

    const [txt, setTxt] = useState("");

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Adicionar membro a familia</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <FormControl>
                        <FormLabel>Nome</FormLabel>
                        <Input value={txt} onChange={(event)=> setTxt(event.target.value)} />
                    </FormControl>
                </ModalBody>
                <ModalFooter>
                    <Button color="blue.500" margin="10px" border=".1rem solid black" variant="solid" onClick={()=> onSubmit(txt)} disabled={!txt} >
                        Adicionar
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
        )
}

export default NodeModal