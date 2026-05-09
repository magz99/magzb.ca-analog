---
title: Setting Up Claude Code with a Local LLM
slug: 2026-05-08-setting-up-claude-code-with-local-llm
description: A comprehensive guide to configuring Claude Code to work with local language models
coverImage: /images/old-books.jpg
---

# Setting Up Claude Code with a Local LLM

In this article, I'll walk you through the process of configuring Claude Code to work with local language models. This setup allows you to leverage the power of local AI models while maintaining the convenience of Claude's interface.

## Why Use Local LLMs?

Using local language models offers several advantages:
- **Privacy**: Your data stays on your machine
- **Performance**: No network latency
- **Cost**: No API usage fees
- **Control**: Full control over the model and its behavior

## Prerequisites

Before we begin, ensure you have:
- Claude Code installed
- A local LLM server running (such as Ollama, LM Studio, or LocalAI)
- Basic understanding of command-line tools

## Step 1: Install Required Tools

First, make sure you have the necessary tools installed:

```sh
# Install Ollama (if using Ollama)
curl -fsSL https://ollama.com/install.sh | sh

# Install Claude Code CLI
npm install -g @anthropic/claude-code
```

![Installing Ollama and Claude Code CLI](/images/claudesetup-step1.png)

## Step 2: Start Your Local LLM

Start your local LLM server. For example, with Ollama:

```sh
ollama run llama3
```

![Starting Local LLM Server](/images/claudesetup-step2.png)

## Step 3: Configure Claude Code

Now, configure Claude Code to use your local LLM:

1. Open Claude Code
2. Go to Settings → Models
3. Add a new model configuration:
   - Name: `local-llama3`
   - Provider: `Local`
   - Model: `llama3`
   - Endpoint: `http://localhost:11434`

![Configuring Claude Code with Local LLM](/images/claudesetup-step3.png)

## Step 4: Test the Configuration

To verify everything is working:

1. Open a new chat in Claude Code
2. Select your local model
3. Ask a simple question like "What is 2+2?"

## Troubleshooting

### Common Issues

- **Connection refused**: Make sure your local LLM server is running
- **Model not found**: Verify the model name matches exactly
- **Slow responses**: Check your system resources

### Configuration Tips

- For Ollama, ensure the port matches your setup (`11434` by default)
- Use consistent model names across tools
- Consider using `.env` files for sensitive configurations

## Conclusion

Setting up Claude Code with local LLMs is a powerful way to get the best of both worlds: Claude's interface and the privacy/performance benefits of local models. This setup is particularly useful for developers who want to experiment with AI without relying on cloud services.

Happy coding!