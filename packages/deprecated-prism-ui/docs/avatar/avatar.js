import React from "react";
import { map, pipe, prop, reverse, sortBy, values } from "ramda";

import { Avatar, sizes } from "avatar";
import { Example } from "../example";

import tobias from "../images/tobias.jpg";

const REACT_CODE = `
<div>
  <p>XL</p>
  <div className="psm-type-form-heading">120 x 120</div>
  <Avatar size={sizes.extraLarge} src={tobias} />
  <br />
  <Avatar initials="TF" size={sizes.extraLarge} />
  <br />
  <Avatar size={sizes.extraLarge} />
  <br />
</div>
`;

const HTML_CODE = `
<div class="psm-avatar--xl">
  <img class="psm-avatar__img" src="images/tobias.jpg" />
</div>
<div class="psm-avatar--xl">
  <span class="psm-avatar__text">TF</span>
</div>
<div class="psm-avatar--xl">
  <div class="pam-avatar__silhouette"></div>
</div>
`;

const mapSizeToPixels = size => {
  switch (size) {
    case sizes.extraLarge:
      return 120;
    case sizes.large:
      return 72;
    case sizes.medium:
      return 40;
    case sizes.small:
      return 32;
    case sizes.extraSmall:
      return 24;
  }
};

export const AvatarDocs = () => (
  <>
    <h2 className="section-header">Avatars</h2>
    <div className="flex center">
      {pipe(
        map(abbreviation => {
          const pixelSize = mapSizeToPixels(abbreviation);

          return [
            pixelSize,
            <div key={abbreviation}>
              <p>{abbreviation.toUpperCase()}</p>
              <div className="psm-type-form-heading">{`${pixelSize} x ${pixelSize}`}</div>
              <Avatar size={abbreviation} src={tobias} />
              <br />
              <Avatar initials="TF" size={abbreviation} />
              <br />
              <Avatar size={abbreviation} />
              <br />
            </div>,
          ];
        }),
        values,
        sortBy(prop(0)),
        map(prop(1)),
        reverse,
      )(sizes)}
    </div>
    <Example htmlCode={HTML_CODE} reactCode={REACT_CODE} />
  </>
);
