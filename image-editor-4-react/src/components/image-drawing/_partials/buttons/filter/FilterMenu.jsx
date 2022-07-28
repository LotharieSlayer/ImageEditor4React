import React from 'react';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Slider, SliderTrack, SliderFilledTrack, SliderThumb, HStack, Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { IoColorFilterSharp } from 'react-icons/io5';
import 'boxicons';

export const FilterMenu = ({ instance, color, setBtnSelected, ...rest }) => {

    const defaultValue = 0;

    const handleGrayscale = () => {
        instance.hasFilter('grayscale') ?
            instance.removeFilter('grayscale') :
            instance.applyFilter('grayscale')
    };

    const handleSharpen = () => {
        instance.hasFilter('sharpen') ?
            instance.removeFilter('sharpen') :
            instance.applyFilter('sharpen')
    };

    return (
        <Menu>
            <MenuButton
                as={IconButton}
                aria-label='Filter Menu'
                icon={<IoColorFilterSharp size={24} color='black' />}
                isRound
                bgColor='white'
            />
            <MenuList>
                <MenuItem onClick={handleGrayscale} icon={<box-icon name="color" />}>
                    Grayscale
                </MenuItem>
                <MenuItem onClick={handleSharpen} icon={<box-icon name="show" />}>
                    Sharpen
                </MenuItem>
                <HStack ml={3} mr={4}>
                    <Box>
                        <box-icon name="sun" />
                    </Box>
                    <Slider
                        aria-label="Brightness"
                        defaultValue={defaultValue}
                        min={-256}
                        max={255}
                        name="Brightness"
                        onChange={(val) => {
                            if (val < -255)
                                instance.removeFilter('brightness')
                            else
                                instance.applyFilter('brightness', { brightness: val / 255 })
                        }
                        }>
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


FilterMenu.propTypes = {
    instance: PropTypes.instanceOf(Object),
    color: PropTypes.instanceOf(Object),
    setBtnSelected: PropTypes.func.isRequired
}


FilterMenu.defaultProps = {
    instance: {},
    color: {},
}

