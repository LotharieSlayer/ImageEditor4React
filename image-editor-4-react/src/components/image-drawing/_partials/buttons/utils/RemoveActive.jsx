import React from 'react';
import { IconButton } from '@chakra-ui/react';
import PropTypes from 'prop-types';


export const Remove = ({ text, instance }) => {

    // Supprime l'objet ou les objets sélectionné
    const handleRemove = () => {
        instance.removeActiveObject()
    };
    return (
        <IconButton
            icon={<box-icon name="trash" />}
            onClick={handleRemove}
            isRound
            size='lg'
            padding={6}
            bgColor='white'
            boxShadow='lg'
        >
            {text}
        </IconButton>
    )
};


Remove.propTypes = {
    text: PropTypes.string,
    instance: PropTypes.instanceOf(Object),
}


Remove.defaultProps = {
    text: "Remove",
    instance: {}
}

