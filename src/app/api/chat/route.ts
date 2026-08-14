
import { convertToModelMessages, streamText } from "ai";
import { createOpenAICompatible } from "@ai-sdk/openai-compatible";

const nvidia = createOpenAICompatible({
  name: "nvidia",
  apiKey: process.env.NVIDIA_API_KEY,
  baseURL: "https://integrate.api.nvidia.com/v1",
});

const systemPrompt = `
You are the AI assistant for Phung Thanh Tung's cybersecurity portfolio.

Answer questions based ONLY on the portfolio information below.

Rules:
- Do not invent information.
- Do not invent jobs, companies, certifications, achievements,
  years of experience, technologies, or project results.
- If information is not listed, say:
  "That information is not currently available in the portfolio."
- Keep answers short and direct.
- Prefer 1-4 sentences.
- Use bullet points when listing multiple items.
- Do not explain your reasoning.
- Do not repeat the user's question.

Portfolio:

Name:
Phung Thanh Tung

Focus:
- Cybersecurity
- Security Operations
- Blue Team
- Threat Hunting
- Detection Engineering
- Security Research

Skills:
- Security Operations
- SIEM
- Wazuh
- ELK Stack
- Splunk
- Sysmon
- Linux
- Windows
- Python
- C
- C++
- JavaScript
- HTML
- CSS

Projects:

1. Attack & Defense Security Lab
Focused on:
- Security monitoring
- Centralized logging
- Endpoint monitoring
- SIEM investigation
- Wazuh
- ELK Stack
- Splunk
- Linux

2. Credential Dumping Detection Lab
Focused on:
- Windows security telemetry
- Sysmon
- Suspicious process analysis
- Detection engineering
- SIEM-oriented investigation

3. Basic E-commerce Website
Focused on responsive frontend development using:
- HTML
- CSS
- JavaScript

Experience:
- Cybersecurity Student at Posts and Telecommunications Institute of Technology
- Independent security lab practice and research
`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const result = streamText({
      model: nvidia("z-ai/glm4.7"),

      system: systemPrompt,

      messages: await convertToModelMessages(messages),

      // Short answers = faster response
      maxOutputTokens: 256,
      temperature: 0.2,

      // Disable reasoning for faster portfolio responses
      providerOptions: {
        nvidia: {
          chat_template_kwargs: {
            enable_thinking: false,
          },
        },
      },
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error("AI chat error:", error);

    return new Response(
      JSON.stringify({
        error: "Unable to process the AI request.",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }
}

