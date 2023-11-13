import { GitHubIssuePayload, GitHubStarPayload } from "../../interfaces";

export class GitHubService {
  constructor() {}

  onStar(payload: GitHubStarPayload): string {
    const { action, sender, repository } = payload;

    return `User ${sender.login} ${action} star on ${repository.full_name}`;
  }

  onIssue(payload: GitHubIssuePayload) {
    const { action, issue } = payload;

    if (action === "opened") {
      return `An issue was ${action} on ${issue.html_url} by ${issue.user.login}`;
    }

    if (action === "closed") {
      return `An issue was ${action} on ${issue.html_url} by ${issue.user.login}`;
    }

    if (action === "reopened") {
      return `An issue was ${action} on ${issue.html_url} by ${issue.user.login}`;
    }

    return `Unknown action: ${action}`;
  }
}
