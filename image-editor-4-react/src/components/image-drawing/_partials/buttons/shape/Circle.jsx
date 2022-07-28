import React from 'react';
import { IconButton, Stack } from '@chakra-ui/react';
import PropTypes from 'prop-types';


export const Circle = ({ text, instance, color, fill, isActive, setBtnSelected, ...rest }) => {

    const handleCircle = () => {
        if(!fill){
            setBtnSelected('circle')
            // Peut créer des bugs si on ne discard pas l'objet en cours (valable pour toutes les shapes)
            instance.discardSelection();
            instance.setDrawingShape('circle', {
                fill: 'transparent',
                stroke: color.hex,
            });
            instance.startDrawingMode('SHAPE');

        }
        else{
            setBtnSelected('circleFill')
            instance.discardSelection();
            instance.setDrawingShape('circle', {
                fill: color.hex,
            });

        }
        instance.startDrawingMode('SHAPE');
    }
    return (
        <Stack>
            {!fill && <IconButton isRound bgColor='white' icon={<box-icon name="circle" />} onClick={handleCircle} isActive={isActive} {...rest}/>}
            {fill && <IconButton isRound bgColor='white' icon={<box-icon name="circle" type="solid" />} onClick={handleCircle} isActive={isActive} {...rest}/>}
        </Stack>
    )
};


Circle.propTypes = {
    text: PropTypes.string,
    instance: PropTypes.instanceOf(Object),
    color: PropTypes.instanceOf(Object),
    fill: PropTypes.bool,
    isActive: PropTypes.bool,
    setBtnSelected: PropTypes.func.isRequired
}


Circle.defaultProps = {
    text: "Cercle",
    instance:  {},
    color: {},
    fill: false,
    isActive: false,
}

