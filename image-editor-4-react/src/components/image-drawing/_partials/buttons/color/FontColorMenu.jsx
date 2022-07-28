import React from 'react';
import { Menu, MenuButton, MenuList, IconButton, Stack, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { BiFontColor } from 'react-icons/bi';
import { ColorPicker } from "react-color-palette";

export const FontColorMenu = ({ instance, color, setColor, objectActiveID, setBtnSelected, ...rest }) => (
    <Menu>
        <MenuButton
            as={IconButton}
            aria-label='ColorPicker (Font)'
            icon={<BiFontColor size={24} color={color.hex} />}
            bgColor='white'
            isRound
        />
        <MenuList>
            <Stack margin={4}>
                <Text fontFamily='Arial' fontWeight='bold'>Font Color</Text>
                <ColorPicker
                    width={300}
                    height={150}
                    color={color}
                    onChange={(val) => {
                        setColor(val)
                        setBtnSelected('select')
                        if(instance.getDrawingMode() === 'TEXT'){
                            // Début pour changer à chaud le texte de couleur
                            // instance.stopDrawingMode()
                        //     instance.changeTextStyle(objectActiveID, {fill: val.hex})
                        //     // instance.removeObject()
                        //     instance.addText('Double Click', {
                        //         styles: {
                        //             fill: color.hex,
                        //         },
                        //     })
                        }
                    }}
                    hideHSV
                    hideRGB />;
            </Stack>
        </MenuList>
    </Menu>
)

FontColorMenu.propTypes = {
    instance: PropTypes.instanceOf(Object),
    color: PropTypes.instanceOf(Object),
    setColor: PropTypes.func.isRequired,
    setBtnSelected: PropTypes.func.isRequired,
    objectActiveID: PropTypes.number,
}


FontColorMenu.defaultProps = {
    instance: {},
    color: {},
    objectActiveID: null
}
