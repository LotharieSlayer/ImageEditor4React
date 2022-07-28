import React from "react";
import { IconButton } from "@chakra-ui/react";
import PropTypes from "prop-types";

export const Save = ({ text, instance, functionToSave }) => {
  const supportingFileAPI = !!(
    window.File &&
    window.FileList &&
    window.FileReader
  );
  const rImageType = /data:(image\/.+);base64,/;

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

  const saveAsBlob = () => {
    let imageName = instance.getImageName();

    const dataURL = instance.toDataURL();
    let blob;
    let type;

    if (supportingFileAPI) {
      blob = base64ToBlob(dataURL);
      type = blob.type.split("/");
      if (imageName.split(".").pop() !== type[1]) {
        imageName += `.${type[1]}`;
      }
    }
    blob.name = imageName;
    functionToSave(blob);
  };

  return (
    <IconButton
      icon={<box-icon name="save" type="solid" />}
      onClick={saveAsBlob}
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

Save.propTypes = {
  text: PropTypes.string,
  instance: PropTypes.instanceOf(Object),
  functionToSave: PropTypes.func,
};

Save.defaultProps = {
  text: "Download",
  instance: {},
  functionToSave: undefined,
};
