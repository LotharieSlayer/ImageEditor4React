import React from 'react';
import { Slider, SliderTrack, SliderFilledTrack, SliderThumb } from '@chakra-ui/react';
import PropTypes from 'prop-types';


export const Pixelate = ({ text, instance }) => {

    const defaultValue = 0;

    return (
        <Slider
            aria-label={text}
            defaultValue={defaultValue}
            min={0}
            max={20}
            name={text}
            onChange={(val) => {
                if(val < 2)
                    instance.removeFilter('pixelate')
                else
                    instance.applyFilter('pixelate', { blocksize: val })
            }}>
            <SliderTrack>
                <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
        </Slider>
    )
};


Pixelate.propTypes = {
    text: PropTypes.string,
    instance: PropTypes.instanceOf(Object),
}


Pixelate.defaultProps = {
    text: "Pixelate",
    instance: {}
}

