import { config } from "../config";
import { octokit } from "./client";

export const repoDispatch = () => {
  const { repo, repoEventType, repoOwner } = config.github;
  const { version } = config.app;
  return octokit.repos.createDispatchEvent({
    owner: repoOwner,
    event_type: repoEventType,
    repo,
    client_payload: {
      version,
    },
  });
};
