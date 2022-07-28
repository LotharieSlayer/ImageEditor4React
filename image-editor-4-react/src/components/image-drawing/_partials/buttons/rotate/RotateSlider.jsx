import React from 'react';
import { Slider, SliderTrack, SliderFilledTrack, SliderThumb } from '@chakra-ui/react';
import PropTypes from 'prop-types';

// Faire un slider
export const RotateSlider = ({ text,instance }) => {

    const defaultValue = 0;

    return (
        <Slider
            aria-label={text}
            defaultValue={defaultValue}
            min={0}
            max={360}
            name={text}
            onChange={(val) => { instance.setAngle(val) }}>
            <SliderTrack>
                <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
        </Slider>
    )
};


RotateSlider.propTypes = {
    text: PropTypes.string,
    instance: PropTypes.instanceOf(Object),
}


RotateSlider.defaultProps = {
    text: "Rotation",
    instance:  {}
}
