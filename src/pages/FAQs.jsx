import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQs = () => {
  return (
    <div className="container mx-auto py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>
      
      <Accordion type="single" collapsible className="w-full space-y-4">
        <AccordionItem value="item-1" className="bg-white p-4 rounded-lg shadow">
          <AccordionTrigger className="text-lg font-medium">What is DemandScan?</AccordionTrigger>
          <AccordionContent>
            <p className="text-gray-700">
              A tool that analyzes customer interview transcripts, extracts key insights about customer problems, and generates detailed analysis reports using specialized AI Agents.
            </p>
            <p className="text-gray-700 mt-2">
              Uses sophisticated prompt engineering for core problem extraction, identifying explicit and implicit needs, customer requirements, and desired outcomes, identify's both immediate and future needs, evaluates the problem opportunity for fit and go/no go decision-making.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="bg-white p-4 rounded-lg shadow">
          <AccordionTrigger className="text-lg font-medium">How the system interprets qualitative data</AccordionTrigger>
          <AccordionContent>
            <div className="text-gray-700 space-y-4">
              <h3 className="font-semibold text-lg">Understanding DemandScan's Approach to Qualitative Variability</h3>
              
              <p>
                Interpreting DemandScan results requires understanding how the system manages qualitative variability. Here's a systems-level explanation of our approach:
              </p>
              
              <h4 className="font-medium text-base mt-4">1. Standardized Variability Framework</h4>
              <p>
                DemandScan implements a unified approach to handling qualitative variability across all analysis agents:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li><strong>Consistent Confidence Metrics</strong>: Every agent utilizes the same 0-100% confidence scale with standardized thresholds (80-100%, 60-79%, 0-59%)</li>
                <li><strong>Uniform Range Representation</strong>: All quantitative assessments include numeric ranges rather than point values (e.g., "4-5" instead of "4")</li>
                <li><strong>Explicit Variability Acknowledgment</strong>: System prompts explicitly instruct models to account for interpretive variability</li>
              </ul>
              
              <h4 className="font-medium text-base mt-4">2. Evidence-Centered Assessment Architecture</h4>
              <p>
                The entire system is built around a verification-first methodology:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li><strong>Quote Mandate</strong>: All agents <em>must</em> extract and include verbatim quotes from transcripts as evidence for findings</li>
                <li><strong>Evidence Explanation</strong>: The system requires explaining how each quote directly supports conclusions, enhancing traceability and transparency</li>
                <li><strong>Curbing Interpretation</strong>: Instructions to "prioritize explicit statements over inferred meanings" and "flag assumptions" reduce variability by grounding analyses in the text rather than interpretations</li>
                <li><strong>Clarity on Input</strong>: The system specifies that "transcript analysis" is the sole data source, avoiding confusion about where evidence comes from</li>
                <li><strong>Limitations Enhanced</strong>: Explicit notation of ambiguities and alternative interpretations addresses qualitative variability head-on</li>
                <li><strong>Evidence-Score Coupling</strong>: Every confidence score must be directly linked to supporting evidence</li>
              </ul>
              
              <h4 className="font-medium text-base mt-4">3. Structured Output Enforcement</h4>
              <p>
                Every analysis component enforces structured data representation that explicitly captures uncertainty:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li><strong>JSON Response Standardization</strong>: All agents use standardized structured response formats</li>
                <li><strong>Range-Confidence Pairing</strong>: Standard structure of ranges with confidence percentages throughout</li>
                <li><strong>Metadata Capture</strong>: Each analysis includes a limitations field to document ambiguities and constraints</li>
              </ul>
              
              <h4 className="font-medium text-base mt-4">4. Multi-level Validation System</h4>
              <p>
                DemandScan employs multiple validation mechanisms:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li><strong>Preprocessing Validation</strong>: Transcript formatting is verified before analysis begins</li>
                <li><strong>Fallback Processing Paths</strong>: Alternative processing routes activate when standard paths encounter issues</li>
                <li><strong>Cross-Module Verification</strong>: Gains analysis informs pain analysis, creating cross-validation</li>
                <li><strong>Structured Output Validation</strong>: System verifies expected fields are present in all responses</li>
              </ul>
              
              <h4 className="font-medium text-base mt-4">5. Uncertainty Visualization Framework</h4>
              <p>
                The UI systematically communicates variability to users:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li><strong>Consistent Visual Language</strong>: Color-coded badges with severity indicators</li>
                <li><strong>Confidence Range Display</strong>: Explicit confidence ranges shown alongside scores</li>
                <li><strong>BackdropTooltip Component</strong>: Contextual explanations of confidence metrics</li>
                <li><strong>Limitations Disclosure</strong>: Each analysis prominently displays limitations and caveats</li>
              </ul>
              
              <p className="mt-4">
                This integrated approach ensures that qualitative assessments maintain scientific rigor despite the inherent variability in natural language understanding, enabling executives to make confident decisions based on transparent, evidence-grounded insights.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="bg-white p-4 rounded-lg shadow">
          <AccordionTrigger className="text-lg font-medium">How does the Customer Pain Points Analysis work?</AccordionTrigger>
          <AccordionContent>
            <div className="text-gray-700 space-y-4">
              <p>
                The Customer Pain Points Analysis system is a sophisticated tool that extracts and analyzes pain points from customer interview transcripts using the CURSE framework. Here's how it works:
              </p>
              
              <ol className="list-decimal list-inside space-y-3">
                <li><strong>Data Processing:</strong> The system takes customer interview transcripts as input and processes them using specialized AI agents.</li>
                
                <li><strong>Pain Point Extraction:</strong> The Pain Extractor Agent contains a specialized prompt that instructs a large language model to analyze the transcripts and identify customer pain points.</li>
                
                <li><strong>CURSE Framework Analysis:</strong> Each identified pain point is analyzed using the CURSE framework:
                  <ul className="list-disc list-inside ml-6 mt-2">
                    <li><strong>C</strong>rucial: How essential the pain point is to the customer's core job</li>
                    <li><strong>U</strong>biquitous: How widespread the pain point is across users</li>
                    <li><strong>R</strong>ecurring: How frequently the customer experiences this pain</li>
                    <li><strong>S</strong>pecific: How well-defined and clear the pain point is</li>
                    <li><strong>E</strong>xtreme: How intense or severe the pain point is</li>
                  </ul>
                </li>
                
                <li><strong>Scoring and Confidence Levels:</strong>
                  <ul className="list-disc list-inside ml-6 mt-2">
                    <li>Each CURSE dimension receives a score (typically 1-5)</li>
                    <li>The system includes ranges and confidence levels for these scores to account for interpretive variability</li>
                    <li>A total CURSE score is calculated to determine overall severity</li>
                  </ul>
                </li>
                
                <li><strong>Structured Output:</strong> The analysis returns a structured JSON response containing:
                  <ul className="list-disc list-inside ml-6 mt-2">
                    <li>Identified pain points with titles, categories, and evidence</li>
                    <li>CURSE scores for each dimension</li>
                    <li>Impact assessments</li>
                    <li>Confidence levels</li>
                  </ul>
                </li>
                
                <li><strong>Sorting and Display:</strong>
                  <ul className="list-disc list-inside ml-6 mt-2">
                    <li>Results are sorted from most critical to least critical based on CURSE scores</li>
                    <li>The UI displays pain point severity with badges (e.g., "High severity")</li>
                    <li>Total and Critical pain points are shown as ranges with confidence intervals</li>
                  </ul>
                </li>
                
                <li><strong>Visual Enhancements:</strong>
                  <ul className="list-disc list-inside ml-6 mt-2">
                    <li>Custom BackdropTooltip component provides explanations of the CURSE framework</li>
                    <li>An Overall Pain Severity legend in the footer shows CURSE score ranges and meanings</li>
                  </ul>
                </li>
                
                <li><strong>Error Handling:</strong> The system includes robust error handling and can process various transcript formats through preprocessing steps.</li>
              </ol>
              
              <p>
                This system helps users identify the most critical customer pain points with a standardized scoring methodology, allowing them to prioritize which problems to address first in their product development.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4" className="bg-white p-4 rounded-lg shadow">
          <AccordionTrigger className="text-lg font-medium">Where is my data stored?</AccordionTrigger>
          <AccordionContent>
            <div className="text-gray-700 space-y-4">
              <p className="font-medium italic mb-4">
                DemandScan prioritizes a local-first approach with temporary cloud processing, minimizing persistent data storage outside your control.
              </p>
              
              <h3 className="font-semibold text-lg">Data Collection and Usage</h3>
              
              <p>
                When using DemandScan, you primarily provide:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Customer interview transcripts</li>
                <li>Project information and metadata</li>
                <li>User authentication information</li>
              </ul>
              
              <h4 className="font-medium text-base mt-4">Data Processing Journey</h4>
              <ol className="list-decimal list-inside space-y-2">
                <li><strong>Initial Upload</strong>: When you upload interview transcripts, this text data is temporarily stored in the application's memory.</li>
                <li><strong>AI Processing</strong>: The transcripts are sent to specialized AI agents built around GPT-4o that analyze the content, extracting pain points, jobs-to-be-done insights, problem awareness metrics, and other customer insights.</li>
                <li><strong>Structured Data Creation</strong>: The AI analysis transforms raw transcript text into structured data with metrics, confidence levels, and evidence-backed insights.</li>
              </ol>
              
              <h4 className="font-medium text-base mt-4">Storage Architecture</h4>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li><strong>Local Storage</strong>: DemandScan stores analysis results in your browser using local storage mechanisms.</li>
                <li><strong>No Central Database</strong>: There is no centralized server database that persistently stores your data.</li>
                <li><strong>Temporary Processing</strong>: Data is temporarily held in memory during processing before being presented in the UI and stored locally.</li>
                <li><strong>GPT API Integration</strong>: When data is sent to GPT-4o for analysis, it passes through OpenAI's API, which has its own data handling policies.</li>
              </ul>
              
              <h4 className="font-medium text-base mt-4">Privacy Considerations</h4>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li><strong>Transcript Content</strong>: The customer interview transcripts contain the most sensitive information, potentially including personal opinions and business-specific information.</li>
                <li><strong>Evidence Extraction</strong>: The system extracts verbatim quotes as evidence, which means portions of original transcripts are preserved in the analysis results.</li>
                <li><strong>Limited Data Sharing</strong>: DemandScan does not share your data with third parties beyond the necessary AI processing services.</li>
                <li><strong>Local-First Approach</strong>: By emphasizing local storage, the application minimizes data exposure.</li>
              </ul>
              
              <h4 className="font-medium text-base mt-4">User Control</h4>
              <p>
                You maintain control of your data, with the ability to:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Delete local data</li>
                <li>Choose what transcripts to upload</li>
                <li>Export or share results when needed</li>
              </ul>
              
              <h4 className="font-medium text-base mt-4">Data Security</h4>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Transcript data is processed through secure API connections</li>
                <li>Results are stored locally on your device, providing inherent security through isolation</li>
                <li>The evidence-grounded approach means that analysis can always be traced back to specific transcript content</li>
              </ul>
              

            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQs;
