import React from 'react';
import { IconButton } from '@chakra-ui/react';
import PropTypes from 'prop-types';


export const FlipX = ({ text,instance }) => {
    const handleFlipX = () => {
        instance.flipX();
    };
    return (
        <IconButton
            icon={<box-icon name="reflect-vertical" />}
            onClick={handleFlipX}
            isRound
            bgColor='white'
        >
            {text}
        </IconButton>
    )
};


FlipX.propTypes = {
    text: PropTypes.string,
    instance: PropTypes.instanceOf(Object),
}


FlipX.defaultProps = {
    text: "Flip X",
    instance:  {}
}

