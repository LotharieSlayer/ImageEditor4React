import React from 'react';
import { IconButton } from '@chakra-ui/react';
import PropTypes from 'prop-types';

// À revoir, crop est bugué mais il y a des moyens de contourner le problème
// cropzone is null
export const ApplyCrop = ({ text, instance }) => {
    const handleApplyCrop = () => {
        instance.crop(instance.getCropzoneRect()).then(() => {
            // instance.stopDrawingMode();
        });
        // instance.crop();
        // instance.setCropzoneRect(50,50,50,50)
        // instance.getCropzoneRect
    };
    return (
        <IconButton
            icon={<box-icon name="check" />}
            onClick={handleApplyCrop}
            isRound
            >
            {text}
        </IconButton>
    )
};


ApplyCrop.propTypes = {
    text: PropTypes.string,
    instance: PropTypes.instanceOf(Object),
}


ApplyCrop.defaultProps = {
    text: "Apply",
    instance: {}
}

