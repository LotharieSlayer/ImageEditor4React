import React from 'react';
import {
    IconButton, Menu, MenuButton, MenuItem, MenuList, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader,
    ModalOverlay, Stack, useDisclosure, Text, HStack, Link, Kbd
} from '@chakra-ui/react';
import PropTypes from 'prop-types';


export const Misc = ({ title, desc }) => {

    const { isOpen: isDetailsOpen, onOpen: onDetailsOpen, onClose: onDetailsClose } = useDisclosure();
    const { isOpen: isShortcutsOpen, onOpen: onShortcutsOpen, onClose: onShortcutsClose } = useDisclosure();

    // LIMITATION DE CARACTÈRES
    let titleDisplay;
    if (title.length > 26) {
        titleDisplay = title.substring(0, 26)
        titleDisplay += "..."
    }
    else {
        titleDisplay = title
    }

    return (
        <>
            {/* DETAILS MODAL */}
            <Modal
                isOpen={isDetailsOpen}
                onClose={onDetailsClose}
                isCentered
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <HStack>
                            <box-icon name='info-circle' />
                            <Text fontFamily='Arial' fontSize='md'>Details</Text>
                        </HStack>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <Stack>
                            <HStack>
                                <Text fontFamily='Arial' fontWeight='bold'>Document :</Text>
                                <Text fontFamily='Arial'>{titleDisplay}</Text>
                            </HStack>
                            <HStack color='darkgray'>
                                <Text fontFamily='Arial' fontSize='sm'><b>Description :</b> {desc}</Text>
                            </HStack>
                            <Stack fontFamily='Arial' fontWeight='bold' fontSize='xs' pt={6}>
                                <Text>Made by <Link href='https://wyzengroup.com/' isExternal
                                >Wyzen</Link> • ImageEditor4React on <Link href='https://github.com/LotharieSlayer/ImageEditor4React' isExternal>Github</Link></Text>
                            </Stack>
                        </Stack>
                    </ModalBody>
                </ModalContent>
            </Modal>

            {/* SHORTCUTS MODAL */}
            <Modal
                isOpen={isShortcutsOpen}
                onClose={onShortcutsClose}
                isCentered
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <HStack>
                            <box-icon name='keyboard' type='solid' />
                            <Text fontFamily='Arial' fontSize='md'>Shortcuts</Text>
                        </HStack>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <Stack>
                            <HStack>
                                <Text fontFamily='Arial' fontWeight='bold'>Delete current object(s)</Text>
                                <HStack position='absolute' right={6}>
                                    <Kbd>Del</Kbd>
                                </HStack>
                            </HStack>
                            <HStack>
                                <Text fontFamily='Arial' fontWeight='bold'>Undo</Text>
                                <HStack position='absolute' right={6}>
                                    <span>
                                        <Kbd >Ctrl</Kbd> + <Kbd>Z</Kbd>
                                    </span>
                                </HStack>
                            </HStack>
                            <HStack>
                                <Text fontFamily='Arial' fontWeight='bold'>Redo</Text>
                                <HStack position='absolute' right={6}>
                                    <span>
                                        <Kbd>Ctrl</Kbd> + <Kbd>Y</Kbd>
                                    </span>
                                </HStack>
                            </HStack>
                            <Stack fontFamily='Arial' fontWeight='bold' fontSize='xs' pt={6}>
                                <Text>Made by <Link href='https://wyzengroup.com/' isExternal
                                >Wyzen</Link> • ImageEditor4React on <Link href='https://github.com/LotharieSlayer/ImageEditor4React' isExternal>Github</Link></Text>
                            </Stack>
                        </Stack>
                    </ModalBody>
                </ModalContent>
            </Modal>

            {/* MENU */}
            <Menu>
                <MenuButton
                    as={IconButton}
                    icon={<box-icon name='dots-horizontal-rounded' />}
                    isRound
                    size='lg'
                    padding={6}
                    bgColor='white'
                    boxShadow='lg'
                />
                <MenuList>
                    <MenuItem onClick={onDetailsOpen} icon={<box-icon name='info-circle' />}>
                        Details
                    </MenuItem>
                    <MenuItem onClick={onShortcutsOpen} icon={<box-icon name='keyboard' type='solid' />}>
                        Shortcuts
                    </MenuItem>
                </MenuList>
            </Menu>
        </>
    )
};


Misc.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
}
