import React, { useEffect } from 'react';
import { IconButton } from '@chakra-ui/react';
import PropTypes from 'prop-types';

// À revoir, crop est bugué mais il y a des moyens de contourner le problème
// ui.crop is undefined et cropzone is null
export const Crop = ({ text, instance }) => {

    useEffect(() => {
        // console.log("crop :", instance)
    }, [instance])

    const handleCrop = () => {
        // instance?.stopDrawingMode();
        instance?.startDrawingMode('CROPPER');

        // console.log(instance.getDrawingMode())
    };
    return (
        <IconButton
            icon={<box-icon name="crop" />}
            onClick={handleCrop}
            bgColor='white'
            isRound
        >
            {text}
        </IconButton>
    )
};


Crop.propTypes = {
    text: PropTypes.string,
    instance: PropTypes.instanceOf(Object),
}


Crop.defaultProps = {
    text: "Crop",
    instance: undefined
}

