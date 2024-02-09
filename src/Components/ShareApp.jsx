import React, { Component } from "react";
import {
  FacebookShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  FacebookMessengerShareButton,
  LineShareButton,
  EmailShareButton,
  LinkedinShareButton,
  WhatsappIcon,
  FacebookIcon,
  TelegramIcon,
  FacebookMessengerIcon,
  LineIcon,
  EmailIcon,
  LinkedinIcon,
} from "react-share";

function ShareApp() {
  const shareUrl = "https://generationfewd9.github.io/urgentTrackProject/";
  return (
    <div>
      <br />
      <br />
      <FacebookShareButton
        url={shareUrl}
        quote={"Share urgentTrack"}
        hashtag={"#Share urgentTrack"}
      >
        <FacebookIcon size={30} round={true} />
      </FacebookShareButton>

      <WhatsappShareButton
        url={shareUrl}
        quote={"Share urgentTrack"}
        hashtag={"#Share urgentTrack"}
      >
        <WhatsappIcon size={30} round={true} />
      </WhatsappShareButton>

      <TelegramShareButton
        url={shareUrl}
        quote={"Share urgentTrack"}
        hashtag={"#Share urgentTrack"}
      >
        <TelegramIcon size={30} round={true} />
      </TelegramShareButton>

      <FacebookMessengerShareButton
        url={shareUrl}
        quote={"Share urgentTrack"}
        hashtag={"#Share urgentTrack"}
      >
        <FacebookMessengerIcon size={30} round={true} />
      </FacebookMessengerShareButton>

      <LineShareButton
        url={shareUrl}
        quote={"Share urgentTrack"}
        hashtag={"#Share urgentTrack"}
      >
        <LineIcon size={30} round={true} />
      </LineShareButton>

      <LinkedinShareButton
        url={shareUrl}
        quote={"Share urgentTrack"}
        hashtag={"#Share urgentTrack"}
      >
        <LinkedinIcon size={30} round={true} />
      </LinkedinShareButton>

      <EmailShareButton
        url={shareUrl}
        quote={"Share urgentTrack"}
        hashtag={"#Share urgentTrack"}
      >
        <EmailIcon size={30} round={true} />
      </EmailShareButton>
    </div>
  );
}

export default ShareApp;
