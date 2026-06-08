import React, { useState, useRef } from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import {
  Loader2, Phone, Mail, Linkedin, Github, Briefcase, GraduationCap, User, Sparkles, Download
} from 'lucide-react';
import { RESUME_CONFIG } from '../dataConfig/data';
import { Badge, SectionHeading, ContactItem } from '../components'
import { cn } from '../utilities/general';

export default function ResumeApp() {
  const { personalInfo, professionalSummary, experiences, educations, competencies } = RESUME_CONFIG;
  const resumePrintRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownloadPDF = async () => {
    if (!resumePrintRef.current) return;
    setIsGenerating(true);

    try {
      // Baobao note: Capture the HIDDEN A4 container instead of the responsive view
      const canvas = await html2canvas(resumePrintRef.current, {
        scale: 2, 
        useCORS: true, 
        backgroundColor: '#ffffff',
        scrollX: 0,
        scrollY: 0,
        windowWidth: 794,
        windowHeight: 1123
      });

      const imgData = canvas.toDataURL('image/png');
      
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${personalInfo.fullName.replace(/\s+/g, '_')}_Resume.pdf`);
    } catch (error) {
      console.error("Failed to generate PDF:", error);
      alert("Error generating PDF. Please check console.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 py-6 md:py-10 px-4 md:px-8 font-sans relative">
      
      {/* ----------------------------------------------------- */}
      {/* FAB - Download Action Button */}
      {/* ----------------------------------------------------- */}
      <button 
        onClick={handleDownloadPDF}
        disabled={isGenerating}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center gap-2 bg-indigo-600 text-white px-5 py-3 rounded-full shadow-xl hover:bg-indigo-700 active:scale-95 disabled:opacity-70 disabled:cursor-wait transition-all"
      >
        {isGenerating ? <Loader2 className="animate-spin" size={20} /> : <Download size={20} />}
        <span className="font-semibold text-sm shadow-sm">
          {isGenerating ? "Generating PDF..." : "Download Resume"}
        </span>
      </button>

      {/* ----------------------------------------------------- */}
      {/* VIEW 1: RESPONSIVE WEB UI (Visible to User) */}
      {/* ----------------------------------------------------- */}
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Baobao note: Mobile Header (Hidden on Desktop) */}
        <div className="md:hidden bg-indigo-600 p-6 flex flex-col items-center text-center">
          {personalInfo.photoUrl ? (
             <img src={personalInfo.photoUrl.photo} alt="Profile" crossOrigin="anonymous" className={personalInfo.photoUrl.classOverride} />
          ) : (
            <div className="w-24 h-24 rounded-full mb-3 bg-indigo-100 text-indigo-500 flex items-center justify-center border-4 border-indigo-400"><User size={36} /></div>
          )}
          <h1 className="text-2xl font-black text-white">{personalInfo.fullName}</h1>
          <p className="text-sm font-semibold text-indigo-200 mt-1 uppercase tracking-wider">{personalInfo.role}</p>
        </div>

        {/* Responsive Sidebar */}
        <aside className="w-full md:w-[320px] bg-slate-50 border-r border-slate-100 p-6 md:p-8 flex flex-col gap-6 md:gap-8 shrink-0">
          {/* Baobao note: Desktop Profile (Hidden on Mobile) */}
          <div className="hidden md:flex flex-col items-center text-center">
             {personalInfo.photoUrl ? (
                <img src={personalInfo.photoUrl.photo} alt="Profile" crossOrigin="anonymous" className={personalInfo.photoUrl.classOverride} />
             ) : (
               <div className="w-40 h-40 rounded-full mb-4 bg-indigo-100 text-indigo-500 flex items-center justify-center border-4 border-white shadow-md"><User size={64} /></div>
             )}
             <h1 className="text-2xl font-black text-slate-900 leading-tight">{personalInfo.fullName}</h1>
             <p className="text-sm font-bold text-indigo-600 mt-2 uppercase tracking-wider">{personalInfo.role}</p>
          </div>

          <div>
            <SectionHeading title="Contact" icon={Phone} />
            <div className="space-y-3">
              <ContactItem icon={Phone} text={personalInfo.phone} />
              <ContactItem icon={Mail} text={personalInfo.email} />
              <ContactItem icon={Linkedin} text={personalInfo.linkedinUrl} />
              <ContactItem icon={Github} text={personalInfo.githubUrl} />
            </div>
          </div>

          <div>
            <SectionHeading title="Education" icon={GraduationCap} />
            <div className="flex flex-col gap-4">
              {educations.map(edu => (
                <div key={edu.id}>
                  <h3 className="text-sm font-bold leading-tight text-slate-800">{edu.degree}</h3>
                  <p className="text-xs text-slate-600 mt-1">{edu.institution}</p>
                  <p className="text-[11px] text-indigo-500 font-medium mt-1 inline-block bg-indigo-50 px-2 py-0.5 rounded">{edu.duration}</p>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Responsive Main Content */}
        <main className="flex-1 p-6 md:p-10 flex flex-col gap-8">
          <section>
            <SectionHeading title="Professional Summary" icon={User} />
            <p className="text-sm md:text-[15px] text-slate-600 leading-relaxed text-justify mt-2">
              {professionalSummary}
            </p>
          </section>

          <section>
            <SectionHeading title="Core Competencies" icon={Sparkles} />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              {competencies.map(comp => (
                <div key={comp.id} className="bg-slate-50 border border-slate-100 rounded-lg p-4 shadow-sm">
                  <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2.5">{comp.category}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {comp.skills.map(skill => <Badge key={skill} intent="brand">{skill}</Badge>)}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <SectionHeading title="Professional Experience" icon={Briefcase} />
            <div className="mt-4 space-y-6">
              {experiences.map(exp => (
                <div key={exp.id} className="relative pl-5 md:pl-6 border-l-2 border-slate-200">
                  <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[7px] top-1.5 ring-4 ring-white" />
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                    <div>
                      <h3 className="text-base font-bold text-slate-800 leading-tight">{exp.role}</h3>
                      <p className="text-sm font-medium text-indigo-600 mt-0.5">{exp.company}</p>
                    </div>
                    <Badge intent="neutral">{exp.duration}</Badge>
                  </div>
                  <ul className="mt-3 space-y-2">
                    {exp.highlights.map(hl => (
                      <li key={hl.id} className="text-sm text-slate-600 flex items-start gap-2 leading-relaxed">
                        <span className="text-indigo-400 mt-0.5 shrink-0">•</span>
                        <span><strong className="font-semibold text-slate-700">{hl.title}:</strong> {hl.description}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>

      {/* ----------------------------------------------------- */}
      {/* VIEW 2: HIDDEN A4 PRINT TEMPLATE (Used by jsPDF) */}
      {/* Placed off-screen to avoid disrupting the UI */}
      {/* ----------------------------------------------------- */}
      <div className="absolute top-0 left-0 -z-50 opacity-0 pointer-events-none w-[794px] h-[1123px] overflow-hidden">
        <div 
          ref={resumePrintRef}
          className="bg-white flex flex-row w-[794px] h-[1123px] box-border text-slate-800 origin-top-left"
        >
          {/* A4 Sidebar */}
          <aside className="w-[260px] bg-slate-50 border-r border-slate-200 p-6 flex flex-col gap-6 shrink-0 h-full">
            <div className="flex flex-col items-center text-center">
              {personalInfo.photoUrl ? (
                  <img src={personalInfo.photoUrl.photo} alt="Profile" crossOrigin="anonymous" className={cn("!w-32 !h-32 !mb-3", personalInfo.photoUrl.classOverride)} />
              ) : (
                <div className="w-32 h-32 rounded-full mb-3 bg-indigo-100 text-indigo-500 flex items-center justify-center border-4 border-white shadow-md"><User size={48} /></div>
              )}
              <h1 className="text-[22px] font-black leading-tight text-slate-900">{personalInfo.fullName}</h1>
              <p className="text-[11px] font-bold text-indigo-600 mt-1 uppercase tracking-wider">{personalInfo.role}</p>
            </div>

            <div className="w-full">
              <SectionHeading title="Contact" icon={Phone} isA4 />
              <div className="space-y-2 mt-2">
                <ContactItem icon={Phone} text={personalInfo.phone} isA4 />
                <ContactItem icon={Mail} text={personalInfo.email} isA4 />
                <ContactItem icon={Linkedin} text={personalInfo.linkedinUrl} isA4 />
                <ContactItem icon={Github} text={personalInfo.githubUrl} isA4 />
              </div>
            </div>

            <div>
              <SectionHeading title="Education" icon={GraduationCap} isA4 />
              <div className="flex flex-col gap-1 mt-2">
                {educations.map(edu => (
                  <div key={edu.id}>
                    <h3 className="text-[11px] font-bold leading-tight">{edu.degree}</h3>
                    <p className="text-[10px] text-slate-500 mt-0.5">{edu.institution}</p>
                    <p className="text-[9px] text-indigo-500 font-medium mt-0.5">{edu.duration}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionHeading title="Core Competencies" icon={Sparkles} isA4 />
              <div className="flex flex-col gap-2 mt-2">
                {competencies.filter(comp => comp.isA4).map(comp => (
                  <div key={comp.id} >
                    <h3 className="text-[10px] font-bold text-slate-700 uppercase tracking-wide mb-1.5">{comp.category}</h3>
                    <div className="flex flex-wrap gap-1">
                      {comp.skills.map(skill => <Badge key={skill} intent="brand" isA4>{skill}</Badge>)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </aside>

          {/* A4 Main Content */}
          <main className="flex-1 p-6 h-full flex flex-col gap-5">
            <section>
              <SectionHeading title="Professional Summary" icon={User} isA4 />
              <p className="text-[11px] text-slate-600 leading-relaxed text-justify mt-1">
                {professionalSummary}
              </p>
            </section>

            <section className="flex-1">
              <SectionHeading title="Professional Experience" icon={Briefcase} isA4 />
              <div className="mt-3 space-y-2">
                {experiences.map(exp => (
                  <div key={exp.id} className="relative pl-3 border-l-2 border-slate-200">
                    <div className="absolute w-2 h-2 bg-indigo-500 rounded-full -left-[5px] top-1 ring-2 ring-white" />
                    <div className="flex justify-between items-start mb-1">
                      <div>
                        <h3 className="text-[12px] font-bold text-slate-800 leading-tight">{exp.role}</h3>
                        <p className="text-[10px] font-medium text-indigo-600">{exp.company}</p>
                      </div>
                      <Badge intent="neutral" isA4>{exp.duration}</Badge>
                    </div>
                    <ul className="mt-1 space-y-1">
                      {exp.highlights.map(hl => (
                        <li key={hl.id} className="text-[10px] text-slate-600 flex items-start gap-1.5 leading-snug">
                          <span className="text-indigo-400 mt-0.5 shrink-0">•</span>
                          <span><strong className="font-semibold text-slate-700">{hl.title}:</strong> {hl.description}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
      
    </div>
  );
}