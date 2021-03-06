import * as React from "react";
import { FooterLink } from ".";
import Icon from "../icon";
import FooterCmp, { FooterProps } from "./Footer";
import FooterInfo from "./FooterInfo";

export const Footer = (args: FooterProps) => {
  return (
    <FooterCmp
      left={<FooterInfo>{"Info 1"}</FooterInfo>}
      center={
        <FooterLink to="https://github.com">
          <Icon icon={["fab", "github"]} size="lg" />
        </FooterLink>
      }
      right={<FooterInfo>{"Info 2"}</FooterInfo>}
      {...args}
    />
  );
};
