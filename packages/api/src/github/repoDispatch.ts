import { config, isProd } from "../config";
import { octokit } from "./client";

export const repoDispatch = async () => {
  if (isProd) {
    const { repo, repoEventType, repoOwner } = config.github;
    const { version } = config.app;
    await octokit.repos.createDispatchEvent({
      owner: repoOwner,
      event_type: repoEventType,
      repo,
      client_payload: {
        version,
      },
    });
  }
};
