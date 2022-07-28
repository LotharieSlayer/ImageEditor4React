import React from 'react';
import { HStack, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import "react-color-palette/lib/css/styles.css";
import 'boxicons'

//* MENU *//
import { Undo } from '../buttons/utils/Undo';
import { Redo } from '../buttons/utils/Redo';
import { Misc } from '../buttons/utils/Misc';

export const UndoRedoDesc = ({ editorInstance, fileName, title, desc }) => (
    <>
    <Text
        boxShadow='lg'
        position='absolute'
        fontSize='sm'
        bgColor='white'
        borderRadius={500}
        paddingX={3}
        fontFamily='Arial'
        fontWeight='bold'
    >
        {fileName}
    </Text>
    <HStack pt={6}>
        <Undo instance={editorInstance} />
        <Redo instance={editorInstance} />
        <Misc title={title} desc={desc} />
    </HStack>
    </>
)

UndoRedoDesc.propTypes = {
    editorInstance: PropTypes.instanceOf(Object),
    fileName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
};

UndoRedoDesc.defaultProps = {
    editorInstance: {}
};
