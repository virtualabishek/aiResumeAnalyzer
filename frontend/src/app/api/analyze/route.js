import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";
import "dotenv/config";

const apiKey = process.env.GEMINI_API_KEY;

async function extractCvData(cvText) {
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest" });

  const extractionPrompt = `
    Extract all identifiable data points from the following CV text, including:

    - Full Name
    - Email Address
    - Phone Number(s)
    - Location (City, State, Country)
    - Age/Birthdate (if present)
    - Gender (if clearly specified)
    - Education Details (Institutions, Degrees, Dates)
    - Work Experience (Companies, Titles, Dates)
    - Skills
    - Certifications (if available)
    - Languages

    Return the data in a JSON format, using the following structure:

    \`\`\`json
    {
      "personalDetails": {
        "name": string,
        "email": string,
        "phone": string,
        "location": string,
        "age": number | null,
        "gender": string | null
      },
      "education": [
        {
          "institution": string,
          "degree": string,
          "dates": string
        }
      ],
      "experience": [
        {
          "company": string,
          "title": string,
          "dates": string
        }
      ],
      "skills": string[],
      "certifications": string[],
      "languages": string[]
    }
    \`\`\`

    If any field cannot be extracted, set its value to null. Ensure all date fields are provided as a single string with approximate date (eg. 2018 - 2024) for correct date interpretation and to preserve context across spans. For personal Details also return location in format - "city, state, country". Skills and Languages will be extracted into lists and others such name etc string types.
    Here is the CV text:
    \`\`\`
    ${cvText}
    \`\`\`
  `;

  const result = await model.generateContent(extractionPrompt);
  const responseText = result.response.text();
  const cleanedResponseText = responseText.replace(/```json|```/g, "");

  try {
    const extractedData = JSON.parse(cleanedResponseText);
    return extractedData;
  } catch (error) {
    console.error(
      "Error parsing extracted data from Gemini:",
      error,
      cleanedResponseText
    );
    throw new Error(
      "Failed to parse extracted CV data from Gemini. Raw response: " +
        cleanedResponseText
    );
  }
}

async function analyzeCV(cvText) {
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-pro-latest",
  });

  const prompt = `
    Analyze the following CV text and provide:

    1.  **Overall Score:** A score from 0 to 100 indicating the quality of the CV. Consider factors like clarity, completeness, relevance to job descriptions, and use of keywords. Be strict.

    2.  **Strengths:** A list of 3-5 strengths of the CV.

    3.  **Areas for Improvement:** A list of 3-5 specific areas where the CV could be improved, with suggestions.

    4.  **Keywords:** Identify relevant keywords (skills, technologies, industry terms) from the CV. Include keywords that ARE MISSING and SHOULD BE ADDED to match current industry standards.

    5.  **Sample Improvement:** Rewrite the summary section to be more effective. Indicate the original summary and the rewritten summary. Aim to make the rewritten summary very impactful and showcase key achievements.

    Here is the CV text:
    \`\`\`
    ${cvText}
    \`\`\`

    Respond in JSON format, structured as follows:

    \`\`\`json
    {
      "score": number,
      "strengths": string[],
      "improvements": string[],
      "keywords": string[],
      "sampleImprovement": {
        "section": string,
        "original": string,
        "rewritten": string
      }
    }
    \`\`\`
  `;

  const result = await model.generateContent(prompt);
  const responseText = result.response.text();
  const cleanedResponseText = responseText.replace(/```json|```/g, "");

  try {
    const analysis = JSON.parse(cleanedResponseText);
    return analysis;
  } catch (error) {
    console.error(
      "Error parsing JSON response from Gemini:",
      error,
      cleanedResponseText
    );
    throw new Error(
      "Failed to parse Gemini response. Raw response: " + cleanedResponseText
    );
  }
}

async function generateImprovedCV(cvText) {
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest" });

  const improvedCVPrompt = `
    Based on the provided CV text, create a professionally enhanced version that would score above 90/100. 
    Structure the CV in a modern format with the following sections:

    1. Professional Summary
    2. Core Competencies
    3. Professional Experience (with quantifiable achievements)
    4. Education & Certifications
    5. Technical Skills
    6. Projects & Achievements
    7. Languages & Additional Skills

    Format the response in JSON:

    \`\`\`json
    {
      "professionalSummary": string,
      "coreCompetencies": string[],
      "experience": [
        {
          "title": string,
          "company": string,
          "duration": string,
          "location": string,
          "achievements": string[]
        }
      ],
      "education": [
        {
          "degree": string,
          "institution": string,
          "duration": string,
          "details": string
        }
      ],
      "technicalSkills": {
        "programming": string[],
        "tools": string[],
        "platforms": string[]
      },
      "projects": [
        {
          "name": string,
          "description": string,
          "technologies": string[],
          "outcome": string
        }
      ],
      "additionalSkills": string[]
    }
    \`\`\`

    Here is the CV text:
    \`\`\`
    ${cvText}
    \`\`\`

    Enhance the content by:
    1. Using action verbs and quantifiable achievements
    2. Modernizing the technical skills section
    3. Adding relevant industry keywords
    4. Structuring achievements in STAR format where applicable
    5. Highlighting leadership and innovative contributions
  `;

  const result = await model.generateContent(improvedCVPrompt);
  const responseText = result.response.text();
  const cleanedResponseText = responseText.replace(/```json|```/g, "");

  try {
    const improvedCV = JSON.parse(cleanedResponseText);
    return improvedCV;
  } catch (error) {
    console.error("Error parsing improved CV:", error);
    throw new Error("Failed to generate improved CV: " + error.message);
  }
}

export async function POST(req) {
  try {
    const { cvText } = await req.json();

    if (!cvText) {
      return NextResponse.json(
        { error: "CV text is required." },
        { status: 400 }
      );
    }

    try {
      // 1. Extract data
      const extractedData = await extractCvData(cvText);

      // 2. Analyze the CV
      const analysisResults = await analyzeCV(cvText);

      // 3. Generate improved CV
      const improvedCV = await generateImprovedCV(cvText);

      // 4. Combine the results
      const combinedResults = {
        extractedData: extractedData,
        analysis: analysisResults,
        improvedCV: improvedCV,
      };

      return NextResponse.json(combinedResults, { status: 200 });
    } catch (error) {
      console.error("Error during combined CV processing:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  } catch (error) {
    console.error("Error in POST handler:", error);
    return NextResponse.json(
      { error: "Internal server error. " + error.message },
      { status: 500 }
    );
  }
}
