"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, ClipboardCheck, Layers, ShieldAlert, Award, CreditCard } from 'lucide-react';

const docRequirements = [
  "Photocopy of Birth Registration Certificate (obtained from Municipalities / Panchayat). Original must be produced for verification.",
  "Transfer Certificate (original, if applicable).",
  "Previous Report Card (copy).",
  "Vaccine and Immunization Card (copy).",
  "Blood Group report (in original).",
  "Proof of Residential Address of Parents (Voter ID Card, Aadhar Card, or Passport).",
  "Income Proof of the Parents (copy).",
  "Stamp size photos: Child (3 copies) and Parents (1 copy)."
];

const ageRequirements = [
  { class: "Play House", age: "2 years 6 months" },
  { class: "Lower Nursery", age: "2 yrs 6 months to 3 yrs 6 months" },
  { class: "Upper Nursery", age: "3 yrs 6 months to 4 yrs 6 months" },
  { class: "K.G.", age: "4 yrs 6 months to 5 yrs 6 months" },
  { class: "Class I", age: "5 yrs 6 months to 6 yrs 6 months" },
  { class: "Class II", age: "6 yrs 6 months to 7 yrs 6 months" },
  { class: "Class III", age: "7 yrs 6 months to 8 yrs 6 months" },
  { class: "Class IV", age: "8 yrs 6 months to 9 yrs 6 months" },
  { class: "Class V", age: "9 yrs 6 months to 10 yrs 6 months" },
  { class: "Class VI", age: "10 yrs 6 months to 11 yrs 6 months" },
  { class: "Class VII", age: "11 yrs 6 months to 12 yrs 6 months" },
  { class: "Class VIII", age: "12 yrs 6 months to 13 yrs 6 months" },
  { class: "Class IX", age: "13 yrs 6 months to 14 yrs 6 months" },
];

export default function AdmissionsPage() {
  const [activeTab, setActiveTab] = useState<'eligibility' | 'uniform' | 'policies'>('eligibility');

  return (
    <div className="bg-brand-offwhite min-h-screen pb-24">
      {/* Red Banner Header with white doodles */}
      <div className="bg-brand-red bg-doodles-white text-white py-20 mb-12 relative overflow-hidden shadow-md">
        <div className="absolute inset-0 bg-brand-navy/10 pointer-events-none"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="text-brand-gold font-bold tracking-widest text-sm uppercase block mb-3">Prospectus</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Admissions & Guidelines</h1>
          <div className="w-24 h-1.5 bg-brand-gold mx-auto rounded-full mb-4"></div>
          <p className="text-brand-gold italic font-serif text-lg">&ldquo;Vidya Dadati Vinayam&rdquo;</p>
          <p className="text-xs text-gray-300 uppercase tracking-widest mt-1">Education gives Humility</p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Tab Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { id: 'eligibility', label: 'Eligibility & Entry', icon: <ClipboardCheck size={18} /> },
            { id: 'uniform', label: 'School Uniform', icon: <Layers size={18} /> },
            { id: 'policies', label: 'Rules & Fees', icon: <CreditCard size={18} /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-xs cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-brand-navy text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content Area - dynamic color and doodles watermark */}
        <div className={`rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100 min-h-[500px] transition-colors duration-500 bg-doodles ${
          activeTab === 'eligibility'
            ? 'bg-brand-bg-yellow'
            : activeTab === 'uniform'
            ? 'bg-brand-bg-green'
            : 'bg-brand-bg-blue'
        }`}>
          <AnimatePresence mode="wait">
            {activeTab === 'eligibility' && (
              <motion.div
                key="eligibility"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-12"
              >
                {/* Admission Process Info */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-5 bg-brand-navy text-white p-8 rounded-2xl shadow-md relative overflow-hidden">
                    <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
                    <h3 className="font-serif text-2xl font-bold text-brand-gold mb-6 flex items-center gap-2">
                      <FileText className="shrink-0" />
                      Admission Process
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-4 text-sm">
                      Admissions are granted based on the performance in the written test and interview conducted by the school authority.
                    </p>
                    <ul className="space-y-3 text-sm text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-brand-gold font-bold">1.</span>
                        Submit the duly filled application form within the specified timeline.
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-gold font-bold">2.</span>
                        Test and interview dates will be officially notified by the school.
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-gold font-bold">3.</span>
                        Selected candidates will be notified via phone, email, and lists on the school website.
                      </li>
                    </ul>
                  </div>

                  {/* Documents Required */}
                  <div className="lg:col-span-7 space-y-6">
                    <h3 className="font-serif text-2xl font-bold text-brand-navy border-b pb-2">Documents Required at Admission</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {docRequirements.map((doc, idx) => (
                        <div key={idx} className="bg-brand-offwhite p-4 rounded-xl border-l-4 border-brand-gold flex items-start space-x-3 shadow-xs">
                          <span className="text-brand-gold font-bold text-sm mt-0.5 shrink-0">✓</span>
                          <p className="text-xs text-gray-700 leading-relaxed font-medium">{doc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Age Limits */}
                <div className="pt-6">
                  <h3 className="font-serif text-2xl font-bold text-brand-navy mb-6 text-center">Class-wise Age Limits</h3>
                  <div className="overflow-x-auto rounded-2xl border border-gray-100 max-w-3xl mx-auto">
                    <table className="w-full text-left border-collapse bg-white">
                      <thead>
                        <tr className="bg-brand-navy text-white">
                          <th className="p-4 font-serif text-lg font-bold border-b border-brand-navy">Class / Wing</th>
                          <th className="p-4 font-serif text-lg font-bold border-b border-brand-navy">Age Requirement Range</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 text-sm">
                        {ageRequirements.map((req, idx) => (
                          <tr key={idx} className="hover:bg-brand-offwhite/50 transition-colors">
                            <td className="p-4 font-semibold text-brand-navy">{req.class}</td>
                            <td className="p-4 text-gray-600 font-medium">{req.age}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'uniform' && (
              <motion.div
                key="uniform"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-12 animate-fade-in"
              >
                {/* Standard Uniform */}
                <div>
                  <h3 className="font-serif text-2xl font-bold text-brand-navy mb-2">Standard Daily Uniform</h3>
                  <p className="text-gray-500 text-sm mb-6">Every student must wear a clean, complete, and correct uniform. Items must be obtained from the school to ensure uniformity.</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Playhouse to KG */}
                    <div className="bg-brand-offwhite p-6 rounded-2xl border border-gray-100 shadow-xs">
                      <div className="text-4xl mb-4">🧸</div>
                      <h4 className="font-serif font-bold text-lg text-brand-navy mb-2">Play House to K.G.</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Specially designed uniform consisting of a **yellow shirt** and **green check shorts / skirt**.
                      </p>
                    </div>

                    {/* Girls */}
                    <div className="bg-brand-offwhite p-6 rounded-2xl border border-gray-100 shadow-xs">
                      <div className="text-4xl mb-4">👧</div>
                      <h4 className="font-serif font-bold text-lg text-brand-navy mb-2">Girls (Class I onwards)</h4>
                      <ul className="space-y-2 text-xs text-gray-600 leading-relaxed font-medium">
                        <li>• Deep blue skirt</li>
                        <li>• Light sky blue shirt with school monogram</li>
                        <li>• Deep blue tie</li>
                        <li>• Black leather shoes</li>
                        <li>• White socks</li>
                      </ul>
                    </div>

                    {/* Boys */}
                    <div className="bg-brand-offwhite p-6 rounded-2xl border border-gray-100 shadow-xs">
                      <div className="text-4xl mb-4">👦</div>
                      <h4 className="font-serif font-bold text-lg text-brand-navy mb-2">Boys (Class I onwards)</h4>
                      <ul className="space-y-2 text-xs text-gray-600 leading-relaxed font-medium">
                        <li>• Deep blue shorts</li>
                        <li>• Light sky blue shirt with school monogram</li>
                        <li>• Deep blue tie</li>
                        <li>• Black leather shoes</li>
                        <li>• White socks</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* PT and Winter Uniforms */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t">
                  {/* PT Uniform */}
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-brand-navy mb-4 flex items-center gap-2">
                      <Award className="text-brand-gold shrink-0" />
                      P.T. Uniform
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed bg-brand-offwhite p-6 rounded-2xl shadow-xs">
                      Students wear a **T-shirt and track pants** according to their house color, combined with **white keds**. Applicable from **Class I onwards** on scheduled PT days.
                    </p>
                  </div>

                  {/* Winter Uniform */}
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-brand-navy mb-4 flex items-center gap-2">
                      <Layers className="text-brand-gold shrink-0" />
                      Winter Uniform Regulations
                    </h3>
                    <div className="space-y-4 text-xs text-gray-600 leading-relaxed bg-brand-offwhite p-6 rounded-2xl shadow-xs font-medium">
                      <div>
                        <span className="font-bold text-brand-navy block mb-1">Boys:</span>
                        Junior Section (till Class V): Deep Blue Pullover with School Monogram.<br />
                        Senior Section (Class VI onwards): Navy Blue Blazer with School Monogram.
                      </div>
                      <div>
                        <span className="font-bold text-brand-navy block mb-1">Girls:</span>
                        Junior Section (till Class V): Deep Blue Cardigan, white stockings.<br />
                        Senior Section (Class VI onwards): Navy Blue Blazer with School Monogram, white stockings.<br />
                        <span className="text-red-600 font-bold block mt-2">※ Girls are strictly not allowed to wear leggings during winter season.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'policies' && (
              <motion.div
                key="policies"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-12"
              >
                {/* School Fees */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-brand-offwhite p-8 rounded-2xl border border-gray-100 shadow-xs relative">
                    <h3 className="font-serif text-2xl font-bold text-brand-navy mb-6">School Fee Guidelines</h3>
                    <ul className="space-y-3 text-xs text-gray-600 leading-relaxed font-semibold">
                      <li className="flex items-start gap-2">
                        <span className="text-brand-gold font-bold">•</span>
                        Fees covers twelve calendar months and must be paid by the end of each month (in monthly installments or in advance).
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-gold font-bold">•</span>
                        Payment is accepted in office hours on school days.
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-gold font-bold">•</span>
                        Holiday month fees must be paid in advance before the school closes.
                      </li>
                      <li className="flex items-start gap-2 text-red-600">
                        <span className="text-red-600 font-bold">•</span>
                        Late payments after the due date incur a late fee of Rs. 30/- per month.
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-gold font-bold">•</span>
                        Overdue fees may bar the student from sitting for examinations or result in names being struck off the rolls.
                      </li>
                    </ul>
                  </div>

                  {/* Withdrawal & Dismissal */}
                  <div className="bg-brand-offwhite p-8 rounded-2xl border border-gray-100 shadow-xs">
                    <h3 className="font-serif text-2xl font-bold text-brand-navy mb-6">Withdrawal & Dismissal</h3>
                    <ul className="space-y-3 text-xs text-gray-600 leading-relaxed font-semibold">
                      <li className="flex items-start gap-2">
                        <span className="text-brand-navy font-bold">1.</span>
                        One month&apos;s fee is required in lieu of notice before withdrawing a student.
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-navy font-bold">2.</span>
                        Transfer Certificate applications must be submitted before the beginning of the new session.
                      </li>
                      <li className="flex items-start gap-2 text-red-600">
                        <span className="text-red-600 font-bold">3.</span>
                        Failing two years in succession in the same class, or twice in three consecutive years, results in names being struck off.
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-navy font-bold">4.</span>
                        Irregular attendance, disobedience, or conduct harmful to the moral tone of the school can lead to dismissal.
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-navy font-bold">5.</span>
                        The Principal&apos;s decision is final in all cases of dismissal or withdrawal.
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Discipline Guidelines */}
                <div className="bg-red-50/30 border border-red-100 rounded-3xl p-8">
                  <h3 className="font-serif text-2xl font-bold text-red-900 mb-6 flex items-center gap-2">
                    <ShieldAlert className="text-red-700 shrink-0" />
                    Discipline Code of Conduct
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-red-950 font-medium">
                    <div className="space-y-3">
                      <p>🗣️ **English Speaking**: Speaking in English is compulsory for all students within the school campus.</p>
                      <p>🚯 **Banned Items**: Smoking, chewing pan, chewing gum, betel-nut, or tobacco etc. are strictly forbidden.</p>
                      <p>📱 **Mobile Phones**: Students are strictly prohibited from carrying mobile phones inside the school campus.</p>
                    </div>
                    <div className="space-y-3">
                      <p>🏫 **Property Damage**: Any damage caused to school property must be repaired or replaced by the concerned student.</p>
                      <p>🤝 **Polite Conduct**: Students must address all teachers and members of the school staff with due respect and politeness.</p>
                      <p>🚶 **Out-of-School Behavior**: Students must behave in a courteous manner on their way to and from school.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
