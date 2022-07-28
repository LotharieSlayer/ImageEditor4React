import React from 'react';
import { Slider, SliderTrack, SliderFilledTrack, SliderThumb } from '@chakra-ui/react';
import PropTypes from 'prop-types';


export const Tint = ({ text, instance, color }) => {

    const defaultValue = 0;

    return (
        <Slider
            aria-label={text}
            defaultValue={defaultValue}
            min={0}
            max={100}
            name={text}
            onChange={(val) => instance.applyFilter('blendColor', { mode: 'tint', color: color.hex, alpha: val / 100 })}>
            <SliderTrack>
                <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
        </Slider>
    )
};


Tint.propTypes = {
    text: PropTypes.string,
    instance: PropTypes.instanceOf(Object),
    color: PropTypes.instanceOf(Object)
}


Tint.defaultProps = {
    text: "Tint",
    instance: {},
    color: {}
}

