import React from 'react';
import { IconButton } from '@chakra-ui/react';
import PropTypes from 'prop-types';


export const FlipY = ({ text,instance }) => {
    const handleFlipY = () => {
        instance.flipY();
    };
    return (
        <IconButton
            icon={<box-icon name="reflect-horizontal" />}
            onClick={handleFlipY}
            isRound
            bgColor='white'
        >
            {text}
        </IconButton>
    )
};


FlipY.propTypes = {
    text: PropTypes.string,
    instance: PropTypes.instanceOf(Object),
}


FlipY.defaultProps = {
    text: "Flip Y",
    instance:  {}
}

