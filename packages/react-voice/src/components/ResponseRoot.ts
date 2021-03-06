import type { ReactInstance } from "react";
import ResponseComponent from "../reconciler/responseComponent";
import { Platforms } from "../types/platforms";


class ResponseRoot extends ResponseComponent {
  result: Record<string, any> = {};

  constructor(platform: Platforms) {
    super(null as unknown as ResponseRoot, {});
    this.platform = platform;
    this.result = this._initResponse(platform);
  }

  _initResponse(platform: Platforms) {
    switch (platform) {
      case Platforms.Alexa:
        return {
          version: "1.0",
          response: {
            shouldEndSession: true
          }
        };

      default:
        return {};
    }
  }

  render() {
    const platform = this.platform;

    for (const child of this.children) {
      if (!(child instanceof ResponseComponent)) continue;

      child.render();
    }


    switch (platform) {
      case Platforms.Alexa:
        if (this.result.response.outputSpeech?.ssml) {
          this.result.response.outputSpeech.ssml = `<speak>` + this.result.response.outputSpeech.ssml.join("\n") + `</speak>`;
        }
        break;
    }

    return this.result;
  }
}

export default ResponseRoot;