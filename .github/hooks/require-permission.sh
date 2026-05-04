#!/bin/bash

# Permission Gate Hook with Audio Alert
# Triggers before any tool execution and prompts for user approval
# Plays custom audio file to alert user

# Read hook input from stdin
input=$(cat)

# Extract tool name from input
tool_name=$(echo "$input" | grep -o '"toolName":"[^"]*"' | head -1 | cut -d'"' -f4)
if [ -z "$tool_name" ]; then
  tool_name="unknown tool"
fi

# Emit audio alert using custom audio file
audio_file="$HOME/.ai/message_sent.wav"
if [ -f "$audio_file" ]; then
  paplay "$audio_file" > /dev/null 2>&1 &
fi

# Display message to stdout/stderr for visibility
cat >&2 <<EOF

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️  AI wants to run: $tool_name

Return to VS Code and click "Allow" to permit this action,
or click "Deny" to block it.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

EOF

# Return permission decision for user approval (VS Code will prompt)
cat <<EOF
{
  "hookSpecificOutput": {
    "hookEventName": "PreToolUse",
    "permissionDecision": "ask",
    "permissionDecisionReason": "User must approve tool execution"
  }
}
EOF

exit 0
