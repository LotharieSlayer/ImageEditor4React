import React from 'react';
import { Menu, MenuButton, MenuList, IconButton, Stack, Circle, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { ColorPicker } from "react-color-palette";

export const ColorMenu = ({ instance, color, setColor, setBtnSelected, ...rest }) => (
    <Menu>
        <MenuButton
            as={IconButton}
            aria-label='ColorPicker'
            icon={<Circle size='20px' bg={color.hex} />}
            bgColor='white'
            isRound
        />
        <MenuList>
            <Stack margin={4}>
                <Text fontFamily='Arial' fontWeight='bold'>Brush & Shape Color</Text>
                <ColorPicker
                    width={300}
                    height={150}
                    color={color}
                    onChange={(val) => {
                        setColor(val)
                        instance.setBrush({ color: val.hex });
                        // On set de nouveau chaque forme pour y mettre la nouvelle couleur
                        instance.setDrawingShape('triangle', { color: val.hex });
                        instance.setDrawingShape('rect', { color: val.hex });
                        instance.setDrawingShape('circle', { color: val.hex });
                    }}
                    hideHSV
                    hideRGB />;
            </Stack>
        </MenuList>
    </Menu>
)

ColorMenu.propTypes = {
    instance: PropTypes.instanceOf(Object),
    color: PropTypes.instanceOf(Object),
    setColor: PropTypes.func.isRequired,
    setBtnSelected: PropTypes.func.isRequired,
}


ColorMenu.defaultProps = {
    instance: {},
    color: {},
}

