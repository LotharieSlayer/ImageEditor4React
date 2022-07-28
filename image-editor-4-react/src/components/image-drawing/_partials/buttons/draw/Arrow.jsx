import React from 'react';
import { IconButton, Stack } from '@chakra-ui/react';
import PropTypes from 'prop-types';


export const Arrow = ({ text, instance, color, thicknessValue, isActive, setBtnSelected }) => {
    const handleArrow = () => {
        setBtnSelected('arrow')
        // On stop le drawing mode à chaque fois car si on ne le stop pas, il arrive de ne pas avoir d'update d'outil (valable pour : Arrow, Draw et Line.jsx)
        // Exemple : On prends Line puis Arrow, et bien le composant arrow ne fera qu'une ligne car Line n'est pas préalablement stoppé
        instance.stopDrawingMode()
        instance.startDrawingMode('LINE_DRAWING', {
            color: color.hex,
            arrowType: {
                tail: 'chevron'
            },
            width: thicknessValue

        });
    };
    return (
        <Stack>
            {!isActive && <IconButton isRound bgColor='white' icon={<box-icon name="right-arrow-alt" />} onClick={handleArrow} isActive={isActive} />}
            {isActive && <IconButton isRound bgColor='white' icon={<box-icon name="right-arrow-alt" animation="tada" />} onClick={handleArrow} isActive={isActive} />}
        </Stack>
    )
};


Arrow.propTypes = {
    text: PropTypes.string,
    instance: PropTypes.instanceOf(Object),
    color: PropTypes.instanceOf(Object),
    thicknessValue: PropTypes.number,
    isActive: PropTypes.bool,
    setBtnSelected: PropTypes.func.isRequired
}


Arrow.defaultProps = {
    text: "Arrow",
    instance: {},
    color: {},
    thicknessValue: 10,
    isActive: false,
}
