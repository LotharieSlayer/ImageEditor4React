import React from 'react';
import { Slider, SliderTrack, SliderFilledTrack, SliderThumb } from '@chakra-ui/react';
import PropTypes from 'prop-types';


export const Brightness = ({ text, instance }) => {

    const defaultValue = 0;

    return (
        <Slider
            aria-label={text}
            defaultValue={defaultValue}
            min={-256}
            max={255}
            name={text}
            onChange={(val) => {
                if(val < -255)
                    instance.removeFilter('brightness')
                else
                    instance.applyFilter('brightness', { brightness: val / 255 })}
            }>
            <SliderTrack>
                <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
        </Slider>
    )
};


Brightness.propTypes = {
    text: PropTypes.string,
    instance: PropTypes.instanceOf(Object),
}


Brightness.defaultProps = {
    text: "Brightness",
    instance: {}
}

