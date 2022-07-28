import React from 'react';
import { Menu, MenuButton, MenuList, MenuItem, IconButton } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { IoShapes } from 'react-icons/io5';
import 'boxicons';

export const ShapeMenu = ({ instance, color, thicknessValue, setBtnSelected, ...rest }) => {

    // Filled = Shape remplie

    const handleTriangle = () => {
        setBtnSelected('select')
        // Peut créer des bugs si on ne discard pas l'objet en cours (valable pour toutes les shapes)
        instance.discardSelection();
        instance.setDrawingShape('triangle', {
            fill: 'transparent',
            stroke: color.hex,
            strokeWidth: thicknessValue
        });

        instance.startDrawingMode('SHAPE');
    }

    const handleTriangleFilled = () => {
        setBtnSelected('select')
        instance.discardSelection();
        instance.setDrawingShape('triangle', {
            fill: color.hex,
            stroke: 'transparent'
        })
        instance.startDrawingMode('SHAPE');
    }


    const handleRectangle = () => {
        setBtnSelected('select')
        instance.discardSelection();
        instance.setDrawingShape('rect', {
            fill: 'transparent',
            stroke: color.hex,
            strokeWidth: thicknessValue
        });
        instance.startDrawingMode('SHAPE');

    }

    const handleRectangleFilled = () => {
        setBtnSelected('select')
        instance.discardSelection();
        instance.setDrawingShape('rect', {
            fill: color.hex,
            stroke: 'transparent'
        });
        instance.startDrawingMode('SHAPE');
    }

    const handleCircle = () => {
        setBtnSelected('select')
        instance.discardSelection();
        instance.setDrawingShape('circle', {
            fill: 'transparent',
            stroke: color.hex,
            strokeWidth: thicknessValue
        });
        instance.startDrawingMode('SHAPE');

    }

    const handleCircleFilled = () => {
        setBtnSelected('select')
        instance.discardSelection();
        instance.setDrawingShape('circle', {
            fill: color.hex,
            stroke: 'transparent'
        });
        instance.startDrawingMode('SHAPE');
    }

    return (
        <Menu>
            <MenuButton
                as={IconButton}
                aria-label='Shapes'
                icon={<IoShapes size={24} color='black' />}
                isRound
                bgColor='white'
            />
            <MenuList>
                <MenuItem onClick={handleTriangle} icon={<box-icon name="up-arrow" />}>
                Triangle
                </MenuItem>
                <MenuItem onClick={handleRectangle} icon={<box-icon name="rectangle" />}>
                Rectangle
                </MenuItem>
                <MenuItem onClick={handleCircle} icon={<box-icon name="circle" />}>
                Circle
                </MenuItem>
                <MenuItem onClick={handleTriangleFilled} icon={<box-icon name="up-arrow" type="solid" />}>
                Triangle (filled)
                </MenuItem>
                <MenuItem onClick={handleRectangleFilled} icon={<box-icon name="rectangle" type="solid" />}>
                Rectangle (filled)
                </MenuItem>
                <MenuItem onClick={handleCircleFilled} icon={<box-icon name="circle" type="solid" />}>
                Circle (filled)
                </MenuItem>
            </MenuList>
        </Menu>
    )
};


ShapeMenu.propTypes = {
    instance: PropTypes.instanceOf(Object),
    color: PropTypes.instanceOf(Object),
    setBtnSelected: PropTypes.func.isRequired,
    thicknessValue: PropTypes.number
}


ShapeMenu.defaultProps = {
    instance: {},
    color: {},
    thicknessValue: 10
}

