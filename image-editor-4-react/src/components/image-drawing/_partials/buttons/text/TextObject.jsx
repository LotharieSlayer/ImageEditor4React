import React from 'react';
import { IconButton, Stack } from '@chakra-ui/react';
import PropTypes from 'prop-types';


export const TextObject = ({ text, instance, color, isActive, setObjectActiveID, setBtnSelected }) => {

    const handleText = () => {
        setBtnSelected('textObject')
        instance.discardSelection();
        instance.addText('Double Click', {
            styles: {
                fill: color.hex,
                fontSize: 100,
                fontWeight: 'bold',
                fontFamily: 'Arial'
            },
        }).then(objectProps => {
            // Début de la gestion des ID d'objet
            setObjectActiveID(objectProps.id)
        });
        instance.stopDrawingMode()
        setBtnSelected('select')

    };



    return (
        <Stack>
            {!isActive && <IconButton isRound bgColor='white' icon={<box-icon name="text" />} onClick={handleText} isActive={isActive} />}
            {isActive && <IconButton isRound bgColor='white' icon={<box-icon name="text" animation="tada" />} onClick={handleText} isActive={isActive} />}
        </Stack>
    )
};


TextObject.propTypes = {
    text: PropTypes.string,
    instance: PropTypes.instanceOf(Object),
    color: PropTypes.instanceOf(Object),
    isActive: PropTypes.bool,
    setBtnSelected: PropTypes.func.isRequired,
    setObjectActiveID: PropTypes.func.isRequired
}


TextObject.defaultProps = {
    text: "Text",
    instance: {},
    color: {},
    isActive: false,
}

