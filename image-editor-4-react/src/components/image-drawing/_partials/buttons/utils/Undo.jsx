import React from 'react';
import { IconButton } from '@chakra-ui/react';
import PropTypes from 'prop-types';


export const Undo = ({ text,instance }) => {

    // Undo l'action effectué
    const handleUndo = async () => {
        await instance.undo();
    };
    return (
        <IconButton
            icon={<box-icon name="undo" />}
            onClick={handleUndo}
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


Undo.propTypes = {
    text: PropTypes.string,
    instance: PropTypes.instanceOf(Object),
}


Undo.defaultProps = {
    text: "Undo",
    instance:  {}
}

