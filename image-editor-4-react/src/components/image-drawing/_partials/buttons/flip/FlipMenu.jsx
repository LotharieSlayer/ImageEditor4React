import React, { useState } from 'react';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, HStack, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { BiRefresh } from 'react-icons/bi';

export const FlipMenu = ({ instance, setBtnSelected, ...rest }) => {

    const [rotateValue, setRotateValue] = useState(0)
    const [isCustom, setIsCustom] = useState(false)

    const handleFlipX = () => {
        setBtnSelected('none')
        instance.flipX();
    };

    const handleFlipY = () => {
        setBtnSelected('none')
        instance.flipY();
    };

    // Reset le flip (ne reset pas la rotation)
    const handleFlipReset = () => {
        setBtnSelected('none')
        instance.resetFlip();
    };

    const handleRotate = () => {
        instance.rotate(45);
        setRotateValue(null)
        setIsCustom(true)
    };

    const handleRotateLeft = () => {
        instance.rotate(-45)
        setRotateValue(null)
        setIsCustom(true)
    };

    // Lorsque l'on presse l'un des deux boutons Rotate, on set un Text "personnalisé" pour le degré de Rotation dans le menu

    return (
        <Menu>
            <MenuButton
                as={IconButton}
                aria-label='FlipMenu'
                icon={<BiRefresh size={24} color='black' />}
                bgColor='white'
                isRound
            />
            <MenuList>
                <MenuItem onClick={handleFlipX} icon={<box-icon name="reflect-vertical" />}>
                    Flip X
                </MenuItem>
                <MenuItem onClick={handleFlipY} icon={<box-icon name="reflect-horizontal" />}>
                    Flip Y
                </MenuItem>
                <MenuItem onClick={handleFlipReset} icon={<box-icon name="reset" />}>
                    Reset Flip
                </MenuItem>
                <MenuItem onClick={handleRotate} icon={<box-icon name="rotate-right" />}>
                    Rotate (45°)
                </MenuItem>
                <MenuItem onClick={handleRotateLeft} icon={<box-icon name="rotate-left" />}>
                    Rotate (-45°)
                </MenuItem>
                <HStack ml={3}>
                    <Text fontFamily='Arial' fontWeight='bold'>Rotation</Text>
                    {isCustom && <Text fontFamily='Arial' fontWeight='bold'>personnalisé</Text>}
                    {!isCustom && <Text fontFamily='Arial' fontWeight='bold' position='absolute' right={5}>{rotateValue}°</Text>}
                </HStack>
                <HStack ml={3} mr={4} mt={2} mb={2}>
                    <Slider
                        aria-label='Rotate'
                        defaultValue={0}
                        min={0}
                        max={360}
                        name='Rotate'
                        onChange={(val) => {
                            instance.setAngle(val)
                            setRotateValue(val)
                            setIsCustom(false)
                        }}>
                        <SliderTrack>
                            <SliderFilledTrack />
                        </SliderTrack>
                        <SliderThumb />
                    </Slider>
                </HStack>
            </MenuList>
        </Menu>
    )
};


FlipMenu.propTypes = {
    instance: PropTypes.instanceOf(Object),
    setBtnSelected: PropTypes.func.isRequired
}


FlipMenu.defaultProps = {
    instance: {},
}

