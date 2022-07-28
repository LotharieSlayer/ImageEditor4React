import React from 'react';
import { Slider, SliderTrack, SliderFilledTrack, SliderThumb } from '@chakra-ui/react';
import PropTypes from 'prop-types';


export const Noise = ({ text, instance }) => {

    const defaultValue = 0;

    return (
        <Slider
            aria-label={text}
            defaultValue={defaultValue}
            min={0}
            max={1000}
            name={text}
            onChange={(val) => {
                if(val < 1)
                    instance.removeFilter('noise')
                else
                    instance.applyFilter('noise', { noise: val })}
                }>
            <SliderTrack>
                <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
        </Slider>
    )
};


Noise.propTypes = {
    text: PropTypes.string,
    instance: PropTypes.instanceOf(Object),
}


Noise.defaultProps = {
    text: "Noise",
    instance: {}
}

