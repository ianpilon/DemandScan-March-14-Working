import OpenAI from 'openai';

export const FINAL_REPORT_SYSTEM_PROMPT = `You are an expert research analyst tasked with creating a comprehensive final report that synthesizes all previous analysis results. Your goal is to create an executive summary that brings together key insights from all analyses performed.

For each analysis type, extract the most important findings and organize them into a cohesive narrative that helps stakeholders understand:
1. The customer's current situation and challenges
2. Their goals and desired outcomes
3. Key pain points and areas of friction
4. Strategic recommendations

Format your response in the following JSON structure:

{
  "executiveSummary": "string",
  "keyFindings": {
    "currentSituation": {
      "summary": "string",
      "keyPoints": ["string"]
    },
    "goalsAndOutcomes": {
      "summary": "string",
      "keyPoints": ["string"]
    },
    "painPoints": {
      "summary": "string",
      "keyPoints": ["string"]
    }
  },
  "strategicRecommendations": ["string"],
  "nextSteps": ["string"],
  "metadata": {
    "confidenceScore": number,
    "dataGaps": ["string"]
  }
}`;

// Helper function to update progress with delay
const updateProgress = async (progress, progressCallback, stepText) => {
  console.log('Setting Final Report progress to:', progress, stepText ? `(${stepText})` : '');
  if (progressCallback) {
    progressCallback(progress, stepText);
  }
  // Add a small delay to make the progress updates smoother
  await new Promise(resolve => setTimeout(resolve, 100));
};

export const generateFinalReport = async (allResults, progressCallback, apiKey) => {
  console.log('Starting Final Report generation with:', {
    hasResults: !!allResults,
    resultKeys: Object.keys(allResults || {}),
    hasApiKey: !!apiKey,
    hasProgressCallback: !!progressCallback
  });

  if (!apiKey) {
    console.error('Missing API key');
    throw new Error('OpenAI API key is required. Please set your API key first.');
  }

  const openai = new OpenAI({
    apiKey,
    dangerouslyAllowBrowser: true
  });

  try {
    // Start progress
    console.log('Setting initial progress');
    await updateProgress(10, progressCallback, "Initializing final report generation...");

    // Validate that we have some results to analyze
    if (!allResults || Object.keys(allResults).length === 0) {
      console.error('No analysis results available');
      throw new Error('No analysis results available to generate final report.');
    }

    // Validate required previous results - we need at least transcript and some analysis results
    // Note: longContextChunking is no longer required in the new flow
    const requiredAgents = ['transcript', 'jtbdGains', 'painExtractor', 'problemAwareness'];
    const missingAgents = requiredAgents.filter(agent => !allResults[agent]);
    
    if (missingAgents.length > 0) {
      console.error('Missing required analysis results:', missingAgents);
      throw new Error(`Missing required analysis results: ${missingAgents.join(', ')}`);
    }

    // Update progress
    console.log('Setting progress after validation');
    await updateProgress(20, progressCallback, "Validating analysis results...");

    // First, get summaries of each analysis to reduce token count
    console.log('Getting summaries of each analysis');
    const summaryMessages = [
      {
        role: 'system',
        content: 'You are a research analysis summarizer. Create very concise summaries of analysis results as JSON, focusing only on the most important findings. Keep summaries under 200 words and format your response as a JSON object.'
      }
    ];

    for (const [agentId, results] of Object.entries(allResults)) {
      // Skip transcript and any empty results
      if (agentId === 'transcript' || !results) continue;
      
      // Handle different result formats
      let resultData = results;
      if (typeof results === 'string') {
        try {
          resultData = JSON.parse(results);
          console.log(`Successfully parsed ${agentId} results from string`);
        } catch (e) {
          console.warn(`Could not parse ${agentId} results as JSON, using as-is`, e);
        }
      }
      
      summaryMessages.push({
        role: 'user',
        content: `Please summarize these ${agentId} results concisely: ${JSON.stringify(resultData)}`
      });
    }

    await updateProgress(30, progressCallback, "Preparing analysis summaries...");
    console.log('Getting summaries from OpenAI');
    
    const summaryResponse = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: summaryMessages,
      response_format: { type: "json_object" },
      temperature: 0.3,
      max_tokens: 1000
    });

    const summaries = summaryResponse.choices[0].message.content;
    await updateProgress(50, progressCallback, "Synthesizing analysis findings...");

    // Now generate the final report with the summaries
    console.log('Generating final report with summaries');
    const finalReportMessages = [
      {
        role: 'system',
        content: FINAL_REPORT_SYSTEM_PROMPT
      },
      {
        role: 'user',
        content: `Please analyze these summarized research results and generate a comprehensive final report as a JSON object: ${summaries}`
      }
    ];

    console.log('Sending request to OpenAI for final report generation');
    const response = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: finalReportMessages,
      response_format: { type: "json_object" },
      temperature: 0.7,
      max_tokens: 2000
    });

    await updateProgress(80, progressCallback, "Finalizing executive summary...");
    console.log('Parsing OpenAI response');

    const finalReport = JSON.parse(response.choices[0].message.content);

    if (!finalReport.executiveSummary || !finalReport.keyFindings) {
      console.error('Invalid final report structure:', finalReport);
      throw new Error('Invalid final report structure');
    }

    await updateProgress(100, progressCallback, "Final report complete");
    console.log('Final report generation complete');

    return finalReport;

  } catch (error) {
    console.error('Error in Final Report Generation:', error);
    throw error;
  }
};
