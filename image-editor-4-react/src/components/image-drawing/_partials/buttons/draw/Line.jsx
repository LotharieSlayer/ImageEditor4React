import React from 'react';
import { IconButton, Stack } from '@chakra-ui/react';
import PropTypes from 'prop-types';


export const Line = ({ text, instance, color, thicknessValue, isActive, setBtnSelected }) => {
    const handleLine = () => {
        setBtnSelected('line')
        instance.stopDrawingMode()
        instance.startDrawingMode('LINE_DRAWING', {
            color: color.hex,
            width: thicknessValue
        });
    };

    return (
        <Stack>
            {!isActive && <IconButton isRound bgColor='white' icon={<box-icon name="minus" rotate="45" />} onClick={handleLine} isActive={isActive} />}
            {isActive && <IconButton isRound bgColor='white' icon={<box-icon name="minus" rotate="45" animation="tada" />} onClick={handleLine} isActive={isActive} />}
        </Stack>
    )
};


Line.propTypes = {
    text: PropTypes.string,
    instance: PropTypes.instanceOf(Object),
    color: PropTypes.instanceOf(Object),
    thicknessValue: PropTypes.number,
    isActive: PropTypes.bool,
    setBtnSelected: PropTypes.func.isRequired
}


Line.defaultProps = {
    text: "Line",
    instance: {},
    color: {},
    thicknessValue: 10,
    isActive: false,
}
