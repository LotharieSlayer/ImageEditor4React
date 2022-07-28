import React from 'react';
import { Menu, MenuButton, MenuList, Slider, SliderTrack, SliderThumb, SliderFilledTrack, IconButton, Stack, HStack, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { BsBorderWidth } from 'react-icons/bs';

export const ThickMenu = ({ instance, thicknessValue, setThicknessValue, setBtnSelected, ...rest }) => {

    const handleThickClick = () => {
        setBtnSelected('select')
    }

    return (
        <Menu>
            <MenuButton
                as={IconButton}
                aria-label='ThickMenu'
                icon={<BsBorderWidth size={24} color='black' />}
                onClick={handleThickClick}
                isRound
                bgColor='white'
            />
            <MenuList>
                <Stack margin={4}>
                    <HStack>
                        <Text fontFamily='Arial' fontWeight='bold' >Stroke width </Text>
                        <Text fontFamily='Arial' fontWeight='bold' position='absolute' right={5}>{thicknessValue}px</Text>
                    </HStack>
                    <Slider
                        aria-label='Thickness'
                        defaultValue={10}
                        min={1}
                        max={100}
                        name='Thickness'
                        onChange={(val) => {
                            instance.setBrush({ width: val });
                            instance.setDrawingShape('triangle', { strokeWidth: val });
                            instance.setDrawingShape('rect', { strokeWidth: val });
                            instance.setDrawingShape('circle', { strokeWidth: val });
                            setThicknessValue(val)
                        }}>
                        <SliderTrack>
                            <SliderFilledTrack />
                        </SliderTrack>
                        <SliderThumb />
                    </Slider>
                </Stack>
            </MenuList>
        </Menu>
    )
}

ThickMenu.propTypes = {
    instance: PropTypes.instanceOf(Object),
    setBtnSelected: PropTypes.func.isRequired,
    thicknessValue: PropTypes.number,
    setThicknessValue: PropTypes.func.isRequired
}


ThickMenu.defaultProps = {
    instance: {},
    thicknessValue: 10
}

