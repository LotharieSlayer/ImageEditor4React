import React from 'react';
import { IconButton } from '@chakra-ui/react';
import PropTypes from 'prop-types';


export const FlipReset = ({ text,instance }) => {
    const handleFlipReset = () => {
        instance.resetFlip();
    };
    return (
        <IconButton
            icon={<box-icon name="reset" />}
            onClick={handleFlipReset}
            isRound
            bgColor='white'
        >
            {text}
        </IconButton>
    )
};


FlipReset.propTypes = {
    text: PropTypes.string,
    instance: PropTypes.instanceOf(Object),
}


FlipReset.defaultProps = {
    text: "Reset Flip",
    instance:  {}
}

