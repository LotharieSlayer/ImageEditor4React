import React from 'react';
import { HStack } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import "react-color-palette/lib/css/styles.css";
import 'boxicons'

//* MENU *//
import { Remove } from '../buttons/utils/RemoveActive';
import { Clear } from '../buttons/utils/Clear';

export const Trash = ({ editorInstance }) => (

    <HStack>
        {/* TOUT SUPPRIMER */}
        <Clear instance={editorInstance} />

        {/* SUPPRIMER L'OBJET SELECTIONNE(S) */}
        <Remove instance={editorInstance} />
    </HStack>

)

Trash.propTypes = {
    editorInstance: PropTypes.instanceOf(Object),
};

Trash.defaultProps = {
    editorInstance: {}
};
