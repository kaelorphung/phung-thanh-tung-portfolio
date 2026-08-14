import {
  convertToModelMessages,
  streamText,
} from "ai";
import { createOpenAICompatible } from "@ai-sdk/openai-compatible";

const nvidia = createOpenAICompatible({
  name: "nvidia",
  apiKey: process.env.NVIDIA_API_KEY,
  baseURL: "https://integrate.api.nvidia.com/v1",
});

const systemPrompt = `
You are the AI assistant for Phung Thanh Tung's cybersecurity portfolio.

Answer questions based ONLY on the portfolio information below.

Do not invent:
- jobs
- companies
- certifications
- achievements
- years of experience
- technologies
- project results

If information is not listed, say that it is not currently available
in the portfolio.

Portfolio information:

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
   Focused on security monitoring, centralized logging,
   endpoint monitoring, SIEM investigation, Wazuh,
   ELK Stack, Splunk, and Linux.

2. Credential Dumping Detection Lab
   Focused on Windows security telemetry, Sysmon,
   suspicious process analysis, detection engineering,
   and SIEM-oriented investigation.

3. Basic E-commerce Website
   Focused on responsive frontend development using
   HTML, CSS, and JavaScript.

Experience:
- Cybersecurity Student at Posts and Telecommunications Institute of Technology
- Independent security lab practice and research

Keep answers concise, professional, and factual.
`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const result = streamText({
      model: nvidia("z-ai/glm-5.2"),
      system: systemPrompt,
      messages: await convertToModelMessages(messages),
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