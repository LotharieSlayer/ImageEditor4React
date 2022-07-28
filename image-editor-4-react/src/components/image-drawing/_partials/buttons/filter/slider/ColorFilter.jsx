import React from 'react';
import { Slider, SliderTrack, SliderFilledTrack, SliderThumb } from '@chakra-ui/react';
import PropTypes from 'prop-types';


export const ColorFilter = ({ text, instance, color }) => {

    const defaultValue = 0;

    return (
        <Slider
            aria-label={text}
            defaultValue={defaultValue}
            min={0}
            max={255}
            name={text}
            onChange={(val) => {
                if(val < 1)
                    instance.removeFilter('removeColor')
                else
                    instance.applyFilter('removeColor', { color: color.hex, distance: val / 255 })}
            }>
            <SliderTrack>
                <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
        </Slider>
    )
};


ColorFilter.propTypes = {
    text: PropTypes.string,
    instance: PropTypes.instanceOf(Object),
    color: PropTypes.instanceOf(Object)
}


ColorFilter.defaultProps = {
    text: "ColorFilter",
    instance: {},
    color: {}
}

