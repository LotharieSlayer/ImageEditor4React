import React from 'react';
import { IconButton } from '@chakra-ui/react';
import PropTypes from 'prop-types';


export const Clear = ({ text, instance }) => {

    // Supprime tous les objets
    const handleClear = () => {
        instance.clearObjects()
    };

    return (
        <IconButton
            icon={<box-icon name="x" />}
            onClick={handleClear}
            isRound
            size='lg'
            padding={6}
            bgColor='white'
            boxShadow='lg'
            colorScheme='red'
        >
            {text}
        </IconButton>
    )
};


Clear.propTypes = {
    text: PropTypes.string,
    instance: PropTypes.instanceOf(Object),
}


Clear.defaultProps = {
    text: "Clear",
    instance: {}
}

