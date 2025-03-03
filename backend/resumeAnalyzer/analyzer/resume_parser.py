import pdfminer.high_level
import docx2txt
import re
import spacy

nlp = spacy.load("en_core_web_sm")

def extract_text_from_resume(file_path):
    """Extract text from PDF/DOCX"""
    if file_path.endswith(".pdf"):
        return pdfminer.high_level.extract_text(file_path)
    elif file_path.endswith(".docx"):
        return docx2txt.process(file_path)
    return ""

def extract_details(text):
    """Extract Name, Email, Phone, Skills"""
    name = None
    email = re.findall(r"\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}\b", text)
    phone = re.findall(r"\b\d{10,12}\b", text)

    doc = nlp(text)
    skills = [ent.text for ent in doc.ents if ent.label_ == "SKILL"]
    
    return {
        "name": doc.ents[0].text if doc.ents else "Unknown",
        "email": email[0] if email else "",
        "phone": phone[0] if phone else "",
        "skills": ", ".join(skills) if skills else "N/A",
    }
