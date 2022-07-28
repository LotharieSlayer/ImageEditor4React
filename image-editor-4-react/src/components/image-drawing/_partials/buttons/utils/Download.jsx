import React from "react";
import { IconButton } from "@chakra-ui/react";
import PropTypes from "prop-types";
import FileSaver from "file-saver";

export const Download = ({ text, instance }) => {
  const supportingFileAPI = !!(
    window.File &&
    window.FileList &&
    window.FileReader
  );
  const rImageType = /data:(image\/.+);base64,/;

  const handleDownload = async () => {
    let imageName = instance.getImageName();
    const dataURL = instance.toDataURL();
    let blob;
    let type;

    if (supportingFileAPI) {
      blob = base64ToBlob(dataURL);
      // eslint-disable-next-line prefer-destructuring
      type = blob.type.split("/")[1];
      if (imageName.split(".").pop() !== type) {
        imageName += `.${type}`;
      }

      // Library: FileSaver - saveAs
      FileSaver.saveAs(blob, imageName); // eslint-disable-line
    }
  };

  function base64ToBlob(data) {
    let mimeString = "";
    let raw;
    let uInt8Array;
    let i;
    let rawLength;

    raw = data.replace(rImageType, (header, imageType) => {
      mimeString = imageType;

      return "";
    });

    raw = atob(raw);
    // eslint-disable-next-line prefer-const
    rawLength = raw.length;
    uInt8Array = new Uint8Array(rawLength); // eslint-disable-line

    for (i = 0; i < rawLength; i += 1) {
      uInt8Array[i] = raw.charCodeAt(i);
    }

    return new Blob([uInt8Array], { type: mimeString });
  }

  return (
    <IconButton
      icon={<box-icon name="arrow-to-bottom" />}
      onClick={handleDownload}
      isRound
      size="lg"
      marginTop={4}
      padding={6}
      bgColor="white"
      boxShadow="lg"
    >
      {text}
    </IconButton>
  );
};

Download.propTypes = {
  text: PropTypes.string,
  instance: PropTypes.instanceOf(Object),
};

Download.defaultProps = {
  text: "Download",
  instance: {},
};
