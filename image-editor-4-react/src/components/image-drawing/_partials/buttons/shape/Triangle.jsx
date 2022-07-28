import React from 'react';
import { IconButton, Stack } from '@chakra-ui/react';
import PropTypes from 'prop-types';


export const Triangle = ({ text, instance, color, fill, isActive, setBtnSelected, ...rest }) => {

    const handleTriangle = () => {
        if(!fill){
            setBtnSelected('triangle')
            instance.discardSelection();
            instance.setDrawingShape('triangle', {
                fill: 'transparent',
                stroke: color.hex,
            });

        }
        else{
            setBtnSelected('triangleFill')
            instance.discardSelection();
            instance.setDrawingShape('triangle', {
                fill: color.hex,
            })
        }
        instance.startDrawingMode('SHAPE');
    }

    return (
        <Stack>
            {!fill && <IconButton isRound bgColor='white' icon={<box-icon name="up-arrow" />} onClick={handleTriangle} isActive={isActive} {...rest}/>}
            {fill && <IconButton isRound bgColor='white' icon={<box-icon name="up-arrow" type="solid" />} onClick={handleTriangle} isActive={isActive} {...rest}/>}
        </Stack>
    )
};


Triangle.propTypes = {
    text: PropTypes.string,
    instance: PropTypes.instanceOf(Object),
    color: PropTypes.instanceOf(Object),
    fill: PropTypes.bool,
    isActive: PropTypes.bool,
    setBtnSelected: PropTypes.func.isRequired
}


Triangle.defaultProps = {
    text: "Triangle",
    instance: {},
    color: {},
    fill: false,
    isActive: false
}

