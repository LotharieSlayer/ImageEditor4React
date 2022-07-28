import React from 'react';
import { IconButton, Stack } from '@chakra-ui/react';
import PropTypes from 'prop-types';


export const Rectangle = ({ text, instance, color, fill, isActive, setBtnSelected, ...rest }) => {

    const handleRectangle = () => {
        if(!fill){
            setBtnSelected('rectangle')
            instance.discardSelection();
            instance.setDrawingShape('rect', {
                fill: 'transparent',
                stroke: color.hex,
            });
            instance.startDrawingMode('SHAPE');

        }
        else{
            setBtnSelected('rectangleFill')
            instance.discardSelection();
            instance.setDrawingShape('rect', {
                fill: color.hex,
            });

        }
        instance.startDrawingMode('SHAPE');
    }
    return (
        <Stack>
            {!fill && <IconButton isRound bgColor='white' icon={<box-icon name="rectangle" />} onClick={handleRectangle} isActive={isActive} {...rest}/>}
            {fill && <IconButton isRound bgColor='white' icon={<box-icon name="rectangle" type="solid" />} onClick={handleRectangle} isActive={isActive} {...rest}/>}
        </Stack>
    )
};


Rectangle.propTypes = {
    text: PropTypes.string,
    instance: PropTypes.instanceOf(Object),
    color: PropTypes.instanceOf(Object),
    fill: PropTypes.bool,
    isActive: PropTypes.bool,
    setBtnSelected: PropTypes.func.isRequired
}


Rectangle.defaultProps = {
    text: "Rectangle",
    instance:  {},
    color: {},
    fill: false,
    isActive: false,
}

