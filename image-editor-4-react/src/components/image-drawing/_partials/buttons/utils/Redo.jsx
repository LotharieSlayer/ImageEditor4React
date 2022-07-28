import React from 'react';
import { IconButton } from '@chakra-ui/react';
import PropTypes from 'prop-types';


export const Redo = ({ text,instance }) => {

    // Redo l'action effectué
    const handleRedo = async () => {
        await instance.redo();
    };
    return (
        <IconButton
            icon={<box-icon name="redo" />}
            onClick={handleRedo}
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


Redo.propTypes = {
    text: PropTypes.string,
    instance: PropTypes.instanceOf(Object),
}


Redo.defaultProps = {
    text: "Redo",
    instance:  {}
}

