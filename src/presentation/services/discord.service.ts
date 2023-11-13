import { envs } from "../../config";

export class DiscordService {
  private readonly discordWebHookUrl = envs.DISCORD_WEBHOOK_URL;

  constructor() {}

  async notify(message: string) {
    const body = {
      content: message,
      //   embeds: [
      //     {
      //       image: {
      //         url: "https://media.giphy.com/media/tkApIfibjeWt1ufWwj/giphy.gif",
      //       },
      //     },
      //   ],
    };
    const resp = await fetch(this.discordWebHookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!resp.ok) {
      console.log("Error sending discord notification");
      return false;
    }

    return true;
  }
}
