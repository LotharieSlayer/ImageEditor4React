import React from 'react';
import { IconButton, Stack } from '@chakra-ui/react';
import PropTypes from 'prop-types';


export const Draw = ({ text, instance, color, thicknessValue, isActive, setBtnSelected }) => {
    const handleDraw = () => {
        setBtnSelected('draw')
        instance.stopDrawingMode()
        instance.startDrawingMode('FREE_DRAWING', {
            color: color.hex,
            width: thicknessValue
        });
    };

    return (
        <Stack>
            {!isActive && <IconButton isRound bgColor='white' icon={<box-icon name="brush" />} onClick={handleDraw} isActive={isActive} />}
            {isActive && <IconButton isRound bgColor='white' icon={<box-icon name="brush" type="solid" animation="tada" />} onClick={handleDraw} isActive={isActive} />}
        </Stack>
    )
};


Draw.propTypes = {
    text: PropTypes.string,
    instance: PropTypes.instanceOf(Object),
    color: PropTypes.instanceOf(Object),
    isActive: PropTypes.bool,
    thicknessValue: PropTypes.number,
    setBtnSelected: PropTypes.func.isRequired
}


Draw.defaultProps = {
    text: "Draw",
    instance: {},
    color: {},
    thicknessValue: 10,
    isActive: false,
}

