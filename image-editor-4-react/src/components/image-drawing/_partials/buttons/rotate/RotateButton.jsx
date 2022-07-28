import React from 'react';
import { IconButton } from '@chakra-ui/react';
import PropTypes from 'prop-types';

// Faire un slider
export const RotateButton = ({ text,instance }) => {
    const handleRotate = () => {
        instance.rotate(45);
    };
    return (
        <IconButton
            icon={<box-icon name="rotate-right" />}
            onClick={handleRotate}
            isRound
            bgColor='white'
        >
            {text}
        </IconButton>
    )
};


RotateButton.propTypes = {
    text: PropTypes.string,
    instance: PropTypes.instanceOf(Object),
}


RotateButton.defaultProps = {
    text: "Rotation",
    instance:  {}
}

